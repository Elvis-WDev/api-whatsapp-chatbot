

import { CustomError } from '../';

export class CommandEntity {
    constructor(
        public id: number,
        public userId: number,
        public activator_command: string,
        public message: string,
        public status: string,
    ) { }

    static fromObject(object: { [key: string]: any; }) {
        const {
            id,
            userId,
            activator_command,
            message,
            status,
        } = object;

        const parsedId = Number(id);
        const parsedUserId = Number(userId);

        if (!parsedId) {
            throw CustomError.badRequest('Missing id');
        }
        if (!parsedUserId) {
            throw CustomError.badRequest('Missing user id');
        }

        if (!activator_command) throw CustomError.badRequest('Missing address');
        if (!message) throw CustomError.badRequest('Missing opening hours');
        if (!status) throw CustomError.badRequest('Missing contact info');

        return new CommandEntity(parsedId, parsedUserId, activator_command, message, status);
    }
}