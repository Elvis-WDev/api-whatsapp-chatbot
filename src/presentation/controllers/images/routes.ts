
import { Router } from 'express';
import { ImageController } from '../..';

export class ImageRoutes {

    static get routes(): Router {

        const router = Router();
        const controller = new ImageController();

        router.get('/whatsapp/:img', controller.getImage)

        return router;

    }

}

