

import { prisma } from '../../data';
import { JwtAdapter, bcryptAdapter } from '../../config';
import { CustomError, LoginUserDto, UserEntity } from '../../domain';

export class AuthService {

    // DI
    constructor() { }

    public async loginUser(loginUserDto: LoginUserDto) {

        const user = await prisma.user.findUnique({
            where: {
                email: loginUserDto.email
            },
        })

        if (!user) throw CustomError.unauthorized('Email not found');

        // Comparar la contraseña
        const isMatching = bcryptAdapter.compare(loginUserDto.password, user.password);

        if (!isMatching) throw CustomError.unauthorized('Password incorrect');

        const token = await JwtAdapter.generateToken({ id: user.id, email: user.email });

        const { password, ...userEntity } = UserEntity.fromObject(user);

        if (!token) throw CustomError.internalServer('Error while creating JWT');

        return {
            success: true,
            user: userEntity,
            token: token,
            message: 'User logged in successfully'
        }

    }

}