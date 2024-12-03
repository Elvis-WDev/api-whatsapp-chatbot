import { prisma } from '../../data';
import { CustomError } from '../../domain';
import { CommandDto } from '../../domain/dtos/command/command.dto';

export class CommandService {

    // DI
    constructor() { }

    public async getCommands() {

        const commands = await prisma.commands.findMany();

        return {
            success: true,
            data: { command: commands },
            message: 'Command data retrieved successfully'
        };

    }

    public async registerCommand(commandDto: CommandDto) {

        const commandExist = await prisma.commands.findUnique({
            where: {
                activator_command: commandDto.activator_command
            }
        })

        if (commandExist) throw CustomError.unauthorized('Command exist');

        const command = await prisma.commands.create({
            data: {
                userId: commandDto.userId,
                activator_command: commandDto.activator_command,
                message: commandDto.message,
                status: commandDto.status,
            }
        })

        return {
            success: true,
            data: { command: command },
            message: 'Command registered successfully'
        }

    }

    public async updateCommand(commandDto: CommandDto) {

        const commandExist = await prisma.commands.findUnique({
            where: {
                id: commandDto.id
            }
        })

        if (!commandExist) throw CustomError.unauthorized('Command not exist');

        const command = await prisma.commands.update({
            where: {
                id: commandDto.id
            },
            data: {
                userId: commandDto.userId,
                activator_command: commandDto.activator_command,
                message: commandDto.message,
                status: commandDto.status,
            }
        })

        return {
            success: true,
            data: { command: command },
            message: 'Command updated successfully'
        }

    }

    public async deleteCommand(commandDto: CommandDto) {

        const commandExist = await prisma.commands.findUnique({
            where: {
                id: commandDto.id
            }
        })

        if (!commandExist) throw CustomError.unauthorized('Command not exist');

        await prisma.commands.delete({
            where: {
                id: commandDto.id
            }
        })

        return {
            success: true,
            data: { command: [] },
            message: 'Command deleted successfully'
        }

    }

}