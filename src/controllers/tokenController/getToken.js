import TokenService from "../../services/token/index.js";



 async function getToken(req,res){
     try {
        const token = await TokenService.getToken()
        res.status(201).send(token) 
     } catch (error) {
        return res.status(404).send({
            message: 'This is an error!'
         });
     }


}

export default getToken