import * as wppconnect from '@wppconnect-team/wppconnect';

import { EventEmitter } from 'events';
import { envs } from './envs';
import goodlog from 'good-logs';

interface IWhatsappClient {
    initialize(): Promise<void>;
}

export class WhatsAppAdapter extends EventEmitter implements IWhatsappClient {

    private client: wppconnect.Whatsapp | null;
    private _qrcode: string | null;
    private _sessionStatus: boolean;

    constructor() {
        super()
        this.client = null
        this._qrcode = null;
        this._sessionStatus = false;
    }


    // Methods
    async initialize(): Promise<void> {

        try {

            this.client = await wppconnect.create({
                session: 'session',
                catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
                    if (urlCode) {
                        this._qrcode = urlCode;
                        this.emit('qrCodeReceived', urlCode);
                    }
                },
                statusFind: (status) => this.handleStatus(status),
                headless: true,
                browserArgs: ["--no-sandbox"],
                autoClose: 0,
                logQR: false,
                debug: false,
                folderNameToken: `${envs.WHATSAPP_DATA_PATH}`,
                tokenStore: 'file',
            });

            // Escucha de mensajes recibidos
            this.client.onMessage((message: wppconnect.Message) => {
                this.emit('messageReceived', { message, client: this.client });
            });

            this.client.onStateChange(async (state: string) => {
                goodlog.debug(`WhatsApp state changed: ${state}`);
                if (state === 'UNPAIRED' && this.client) {
                    this._sessionStatus = false;
                    this._qrcode = null;
                    this.client.logout();
                    this.client.close();
                    this.client = null;
                    this.emit('disconnected');
                }
            })

        } catch (error) {
            console.error('Error al inicializar el cliente:', error);
            throw error;
        }
    }

    private handleStatus(statusSession: string): void {

        goodlog.debug(`statusSession: ${statusSession}`);

        if (statusSession === 'qrReadSuccess') {
            this._sessionStatus = true;
            this._qrcode = null;
            this.emit('authenticated');
        }

    }

    // Getters and Setters
    public getClient(): wppconnect.Whatsapp | null {
        return this.client
    }

    public getQrCode(): string | null {
        return this._qrcode
    }

    public getStatusSession(): boolean {
        return this._sessionStatus;
    }

}
