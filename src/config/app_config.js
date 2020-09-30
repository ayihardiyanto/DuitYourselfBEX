import dotenv from 'dotenv';

export default function configure() {

    dotenv.config();

    if (!process.env.APP_NAME) {
        console.error('Environment file (.env) cannot be found in the root folder, copy .env.example file to .env');
        process.exit(1);
    }
}
