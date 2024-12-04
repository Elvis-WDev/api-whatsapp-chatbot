import path from 'path';
import express, { Router } from 'express';
import cors from 'cors';
import fs from 'fs';
import { envs } from '../config';

interface Options {
    port: number;
    routes: Router;
    public_path?: string;
}

export class Server {

    public readonly app = express();
    private serverListener?: any;
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes, public_path = 'public_html' } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }

    async start() {

        //* Habilitar CORS
        this.app.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
        }));

        //* Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        //* Public Folder
        this.app.use(express.static(this.publicPath));

        //* Routes
        this.app.use(this.routes);

        //* SPA
        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        });

        this.InitiWhatsappClient();

        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });


    }

    public async InitiWhatsappClient() {
        if (fs.existsSync(`${envs.WHATSAPP_DATA_PATH}`)) {
            fs.rmSync(`${envs.WHATSAPP_DATA_PATH}`, { recursive: true, force: true });
        }
    }

    public close() {
        this.serverListener?.close();
    }


}




