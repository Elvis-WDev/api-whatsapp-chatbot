

import { Router } from 'express';
import { AuthService } from '../../services/auth.service';
import { AuthController } from './controller';


export class Authroutes {

    static get routes(): Router {

        const router = Router();
        const authService = new AuthService();

        const authController = new AuthController(authService);

        // Definir las rutas
        router.post('/login', authController.loginUser);

        return router;
    }


}