import { Request, Response } from 'express';
import { handleError } from '../../../utils';
import { responseOptions, WhatsAppApiService } from '../../services/whatsapp.service';
import { Qrcode } from '../../../utils/qr/Qrcode';
import { status } from '@wppconnect/wa-js';

export class WhatsappApiController {

    constructor(

        public readonly whatsappApiService: WhatsAppApiService

    ) { }

    connect = (req: Request, res: Response) => {

        this.whatsappApiService.connect()
            .then(async (response: responseOptions) => {

                if (response.status === 'success') {
                    const qrimage = await Qrcode.Toimg(response.message);

                    res.sendFile(qrimage)
                } else {
                    res.json(response);
                }

            })
            .catch((error) => {
                console.error('Error en la conexión:', error);
                handleError(error, res);
            });
    }

    status = (req: Request, res: Response) => {

        this.whatsappApiService.getStatusSession()
            .then(async (response) => res.json(response))
            .catch((error) => {
                console.error('Error en la conexión:', error);
                handleError(error, res);
            });

    }




}
