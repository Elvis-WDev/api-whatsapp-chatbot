
import { Router } from "express";
import { WhatsappApiController } from '../..';
import { WhatsAppApiService } from "../../services/whatsapp.service";

export class WhatssapApiRoutes {

    static get routes(): Router {

        const router = Router();

        const whatsAppApiService = new WhatsAppApiService();

        const whatsappController = new WhatsappApiController(whatsAppApiService)

        router.get('/connect', whatsappController.connect);
        router.get('/status', whatsappController.status);

        return router;
    }


}