
import { Router } from 'express';
import { Authroutes } from '.././/presentation';
import { WhatssapApiRoutes } from '../presentation';
// import { ImageRoutes } from '../presentation';
import { AuthMiddleware } from '../presentation';
import { CommandRoutes } from './controllers/commands/routes';


export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        // Definir las rutas
        router.use('/api/auth', Authroutes.routes);
        router.use('/api/whatsapp', [AuthMiddleware.validateJWT], WhatssapApiRoutes.routes);
        router.use('/api/command', [AuthMiddleware.validateJWT], CommandRoutes.routes);


        return router;
    }


}