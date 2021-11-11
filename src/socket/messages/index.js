import MessagesService from "../../services/messages/index.js"
import TokenService from "../../services/token/index.js"

export default function (io, socket) {
    return async function (req) {
        try {
            const { message, user } = req
            const tokenAssigned=await TokenService.checkAvailability();
           
            if(!tokenAssigned){
                 const token= await TokenService.updateAvailability(user.id)
                 io.emit("firstToken",token)
            }
            
            const body = {
                content: message,
                userId: user.id,
                date: new Date().toDateString()
            }
            const created_message = await MessagesService.createMessage(body)
            io.emit("message", created_message)
        }
        catch (error) {
            return res.status(404).send({
                message: 'This is an error!'
            });
        }
    }
}