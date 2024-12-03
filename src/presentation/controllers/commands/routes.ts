
import { Router } from "express";
import { CommandService } from "../../services/command.service";
import { CommandController } from "./controller";

export class CommandRoutes {

    static get routes(): Router {

        const router = Router();

        const commandService = new CommandService();

        const commandController = new CommandController(commandService)

        router.get('/', commandController.getAll);
        router.post('/', commandController.register);
        router.put('/', commandController.update);
        router.delete('/', commandController.delete);

        return router;
    }


}