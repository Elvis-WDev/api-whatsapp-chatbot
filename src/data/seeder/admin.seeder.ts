import { Data } from "../data";
import { prisma } from "../postgreSQL/postgres-client";


export const AdminSeeder = async () => {

    await prisma.user.deleteMany();

    await prisma.$executeRaw`ALTER SEQUENCE users_id_seq RESTART WITH 1`;

    // 1. Crear usuarios
    const users = await prisma.user.createMany({
        data: Data.user,
    });

}