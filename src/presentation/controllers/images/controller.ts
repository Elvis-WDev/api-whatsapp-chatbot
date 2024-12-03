
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { envs } from '../../../config';


export class ImageController {

    constructor() { }

    getImage = (req: Request, res: Response) => {

        const { img = '' } = req.params;

        const id = req.body.user.id

        const imagePath = path.resolve(`${envs.WHATSAPP_DATA_PATH}${id}/QR/${img}`);

        if (!fs.existsSync(imagePath)) {
            res.status(404).send('Image not found')
            return
        }

        res.sendFile(imagePath);

        console.log('Imagen encontrada y enviada')
    }


}