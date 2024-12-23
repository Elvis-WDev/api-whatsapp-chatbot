
import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

    PORT: get('PORT').required().asPortNumber(),

    POSTGRES_URL: get('POSTGRES_URL').required().asString(),
    POSTGRES_USER: get('POSTGRES_USER').required().asString(),
    POSTGRES_DB: get('POSTGRES_DB').required().asString(),
    POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),

    JWT_SEED: get('JWT_SEED').required().asString(),

    WHATSAPP_DATA_PATH: get('WHATSAPP_DATA_PATH').required().asString(),

    AI21_API_URL: get('AI21_API_URL').required().asString(),
    AI21_API_KEY: get('AI21_API_KEY').required().asString(),
}