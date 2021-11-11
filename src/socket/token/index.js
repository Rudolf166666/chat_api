import TokenService from "../../services/token/index.js"

export default function (io,socket){
    return async function (id){
        const token=await TokenService.updateAvailability(id);
        io.emit("changeToken",token)
    }
}