

import { Message, Whatsapp } from "@wppconnect-team/wppconnect";
import { WhatsAppAdapter } from "../../config";
import goodlog from "good-logs";
import { prisma } from "../../data";

interface messageReceivedOptions {
    message: Message;
    client: Whatsapp;
}

export interface responseOptions {
    status: 'error' | 'success',
    message: string,
}

export enum SessionMessage {
    AlreadyActive = "Session is already active",
    ClientNotFount = "No client found for the user",
}

export class WhatsAppApiService {

    private whatsappAdapter: WhatsAppAdapter | null = null;
    private isProcessing: boolean = false;

    public async connect(): Promise<responseOptions> {

        if (this.whatsappAdapter && this.whatsappAdapter.getStatusSession()) {
            return {
                status: 'error',
                message: SessionMessage.AlreadyActive,
            }
        }

        if (this.whatsappAdapter && this.whatsappAdapter.getQrCode()) {
            return {
                status: 'success',
                message: this.whatsappAdapter.getQrCode()!,
            }
        }

        console.log('Creando instancia...');
        this.whatsappAdapter = new WhatsAppAdapter();
        this.whatsappAdapter.initialize()

        return new Promise((resolve) => {

            this.whatsappAdapter?.on('qrCodeReceived', (qrCode) => {
                this.handleQrCodeReceived(qrCode, resolve);
            });
            this.whatsappAdapter?.on('messageReceived', (data: { message: Message; client: Whatsapp; }) => {
                this.handleMessageReceived(data);
            });
            this.whatsappAdapter?.on('authenticated', () => {
                this.handleAuthenticated();
            });
            this.whatsappAdapter?.on('disconnected', () => {
                this.handleDisconnection();
            });

        });
    }

    private async handleQrCodeReceived(qrCode: string, resolve: (value: responseOptions) => void) {
        resolve({
            status: "success",
            message: qrCode,
        });
    }

    private async handleMessageReceived({ message, client }: messageReceivedOptions) {

        try {
            const commands = await prisma.commands.findMany({
                where: {
                    status: 'activate',
                },
            });

            for (const command of commands) {
                if (message.body === command.activator_command) {
                    await client.sendText(message.from, command.message);
                    break;
                }
            }
        } catch (error) {
            console.error('Error al procesar el mensaje:', error);
        }



    }

    private async handleAuthenticated() {

        goodlog.debug('Authenticated');

    }

    private async handleDisconnection() {
        this.whatsappAdapter = null;
        goodlog.debug('Disconnected');
    }

    public async getStatusSession() {

        if (!this.whatsappAdapter) return {
            success: true,
            data: { session: false },
            message: 'Whatsapp session is not active'
        };

        return {
            success: true,
            data: { session: this.whatsappAdapter.getStatusSession() },
            message: 'Whatsapp session is active'
        };

    }

}