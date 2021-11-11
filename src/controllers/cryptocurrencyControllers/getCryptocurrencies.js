import CryptocurrencyService from "../../services/cryptocurrency/index.js";



 async function getCryptocurrencies(req,res){
     try {
         console.log("")
        const cryptocurrencies= await CryptocurrencyService.getCryptocurrencies()
        res.status(201).send(cryptocurrencies) 
     } catch (error) {
        return res.status(404).send({
            message: 'This is an error!'
         });
     }


}

export default getCryptocurrencies