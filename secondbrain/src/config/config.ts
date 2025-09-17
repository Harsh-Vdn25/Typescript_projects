import dotenv from 'dotenv';
dotenv.config();

interface configType{
    port:string;
    MONGO_URL:string;
    JWT_SECRET:string;
}

export const Configs:configType={
    port:process.env['PORT']||'',
    MONGO_URL:process.env['MONGO_URL']||'',
    JWT_SECRET:process.env['JWT_SECRET']||''
}