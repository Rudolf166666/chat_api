import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import sequelize from './src/db/index.js'
import config from "./config/index.js"
import router from "./src/routes/index.js"
import io from "./src/socket/index.js"
import http from "http";
dotenv.config()


const app=express();
const server=http.createServer(app)
io(server)


app.use(cors())
app.use(express.json())
app.use("/api",router)

async function start(){
    try {
        sequelize.authenticate()
        sequelize.sync()
        server.listen(config.server.port,()=>console.log(`Server is running at PORT:${config.server.port}`))
    } catch (error) {
        console.log(error)
    }

}
start()