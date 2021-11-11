import {Server} from "socket.io"
import messagesEvent from "./messages/index.js"
import tokenEvent from "./token/index.js"

export default (server)=>{
    const io= new Server(server)

    io.on("connection",socket=>{
        socket.on("message",messagesEvent(io,socket))
        socket.on("changeToken",tokenEvent(io,socket))
    })
}