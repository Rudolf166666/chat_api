import dotenv from 'dotenv'
dotenv.config()

const db = {
    database: process.env.APP_DATABASE_NAME,
    username: process.env.APP_DATABASE_USER,
    password: process.env.APP_DATABASE_PASSWORD,
    port: process.env.APP_DATABASE_PORT,
    host: process.env.APP_DATABASE_HOST,
    dialect: 'postgres',
    define: {
        timestamps: false
    }
}
const server = {
    port: process.env.APP_PORT
}

export default {server,db}