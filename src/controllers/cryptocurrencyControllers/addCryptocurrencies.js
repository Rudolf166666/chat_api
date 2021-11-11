import CryptocurrencyService from "../../services/cryptocurrency/index.js";



 async function addOrUpdate(req,res){
     try {
        const {cryptocurrencies}=req.body
        CryptocurrencyService.addOrUpdateCryptocurrencies({cryptocurrencies})
        console.log(cryptocurrencies)
     } catch (error) {
        return res.status(404).send({
            message: 'This is an error!'
         });
     }


}

export default addOrUpdate