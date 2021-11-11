import Models from "../../models/index.js"

export default class TokenService {
    static getToken= async()=>await Models.Token.findOne();
    static checkAvailability = async(io)=>{
        const token= await Models.Token.findOne();
        if(!token.userId){
            return false
        }
        return true
    };
    static updateAvailability = async(userId)=>{
        const token= await Models.Token.findOne();
        token["userId"]=userId
        await token.save()
        return token
    };
}