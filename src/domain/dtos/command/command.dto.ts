

type CommandStatus = 'activate' | 'desactivate';

export class CommandDto {

    private constructor(
        public id: number | undefined,
        public userId: number,
        public activator_command: string,
        public message: string,
        public status: CommandStatus,

    ) { }

    static register(object: { [key: string]: any }): [string?, CommandDto?] {
        const {
            userId,
            activator_command,
            message,
            status
        } = object;

        const parsedUserId = Number(userId);

        if (isNaN(parsedUserId)) return ['Missing or invalid userId'];
        if (!activator_command) return ['Missing command'];
        if (!message) return ['Missing contact message'];
        if (!status) return ['Missing status'];

        return [undefined, new CommandDto(undefined, parsedUserId, activator_command, message, status)];

    }

    static update(object: { [key: string]: any }): [string?, CommandDto?] {
        const {
            id,
            userId,
            activator_command,
            message,
            status
        } = object;

        const parsedId = Number(id);
        const parsedUserId = Number(userId);

        if (isNaN(parsedId)) return ['Missing or invalid id'];
        if (isNaN(parsedUserId)) return ['Missing or invalid userId'];
        if (!activator_command) return ['Missing activator_command'];
        if (!message) return ['Missing message'];
        if (!status) return ['Missing status'];

        return [undefined, new CommandDto(parsedId, parsedUserId, activator_command, message, status)];
    }

    static delete(object: { [key: string]: any }): [string?, CommandDto?] {

        const { id } = object;

        const parsedId = Number(id);

        if (isNaN(parsedId)) return ['Missing or invalid id'];

        return [undefined, new CommandDto(parsedId, 0, "", "", "activate")];
    }



}