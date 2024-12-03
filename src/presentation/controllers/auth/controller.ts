

import { Request, Response } from 'express';
import { LoginUserDto } from '../../../domain';
import { AuthService } from '../../services/auth.service';
import { handleError } from '../../../utils';


export class AuthController {

    // DI
    constructor(
        public readonly authService: AuthService
    ) { }

    loginUser = (req: Request, res: Response) => {

        console.log(req.body);

        const [error, loginUserDto] = LoginUserDto.create(req.body);

        if (error) {
            res.status(400).json({ error });
            return;
        }

        this.authService.loginUser(loginUserDto!)
            .then(user => res.json(user))
            .catch(error => handleError(error, res));

    }

}