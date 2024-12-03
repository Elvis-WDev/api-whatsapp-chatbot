import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import { UserEntity } from "../../domain";
import { prisma } from "../../data";

export class AuthMiddleware {

    static async validateJWT(req: Request, res: Response, next: NextFunction) {

        const authorization = req.header('Authorization');

        if (!authorization) {
            res.status(401).json({ error: 'No token provided' });
            return;
        }

        if (!authorization.startsWith('Bearer ')) {
            res.status(401).json({ error: 'Invalid Bearer token' });
            return;
        }

        const token = authorization.split(' ')[1] || '';

        if (!token) {
            res.status(401).json({ error: 'Token not found' });
            return;
        }

        try {

            const payload = await JwtAdapter.validateToken<{ id: number }>(token)

            if (!payload) {
                res.status(401).json({ error: 'Invalid token' });
                return;
            }

            const user = await prisma.user.findUnique({
                where: { id: payload.id },
            });

            if (!user) {
                res.status(401).json({ error: 'Invalid Token - user' });
                return;
            }
            req.body.user = UserEntity.fromObject(user);

            next();

        } catch (error) {

            console.error('Token validation error:', error);
            res.status(500).json({ error: 'Internal server error' });

        }

    }

}