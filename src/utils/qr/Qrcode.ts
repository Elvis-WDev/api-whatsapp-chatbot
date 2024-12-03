import path from "path";
import { envs } from "../../config";
import QRCode from 'qrcode';
import fs from 'fs';
import { CustomError } from "../../domain";


export class Qrcode {

    constructor() { }

    public static async Toimg(qr: string): Promise<string> {

        try {

            const qrDirectory = path.join(`${envs.WHATSAPP_DATA_PATH}/QR/`);
            const NameFile = `${Date.now()}.png`
            const qrImagePath = path.join(qrDirectory, NameFile);

            if (!fs.existsSync(qrDirectory)) {
                fs.mkdirSync(qrDirectory, { recursive: true });
            }

            await QRCode.toFile(qrImagePath, qr);

            return path.resolve(qrImagePath);

        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        }


    }
}