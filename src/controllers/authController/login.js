import UserService from "../../services/user/index.js";



 async function login(req,res){
     try {
        const {email} =req.body;
        console.log(email)
        const user = await UserService.authenticate(email)
        console.log(user)
        res.status(201).send(user) 
     } catch (error) {
        return res.status(404).send({
            message: 'This is an error!'
         });
     }


}

export default login