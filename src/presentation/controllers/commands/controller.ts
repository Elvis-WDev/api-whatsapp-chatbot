import { Request, Response } from 'express';
import { handleError } from '../../../utils';
import { CommandService } from '../../services/command.service';
import { CommandDto } from '../../../domain/dtos/command/command.dto';

export class CommandController {

    constructor(

        public readonly commandService: CommandService

    ) { }

    getAll = (req: Request, res: Response) => {

        this.commandService.getCommands()
            .then((response) => res.json(response))
            .catch((error) => {
                console.error('Error en la conexión:', error);
                handleError(error, res);
            });

    }

    register = (req: Request, res: Response) => {

        const { userId, activator_command, message, status } = req.body;

        const [error, commandDto] = CommandDto.register({ userId, activator_command, message, status });

        this.commandService.registerCommand(commandDto!)
            .then((response) => (res.json(response)))
            .catch((error) => {
                console.error('Error en la conexión:', error);
                handleError(error, res);
            });
    }
    update = (req: Request, res: Response) => {

        const { id, userId, activator_command, message, status } = req.body;

        const [error, commandDto] = CommandDto.update({ id, userId, activator_command, message, status });

        this.commandService.updateCommand(commandDto!)
            .then((response) => (res.json(response)))
            .catch((error) => {
                console.error('Error en la conexión:', error);
                handleError(error, res);
            });
    }

    delete = (req: Request, res: Response) => {

        const { id } = req.body;

        const [error, commandDto] = CommandDto.delete({ id });

        this.commandService.deleteCommand(commandDto!)
            .then((response) => (res.json(response)))
            .catch((error) => {
                console.error('Error en la conexión:', error);
                handleError(error, res);
            });
    }





}
