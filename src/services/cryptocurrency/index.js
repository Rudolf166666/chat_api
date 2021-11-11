import Models from "../../models/index.js"

export default class CryptocurrencyService {
    static getCryptocurrencies= async ()=>Models.Cryptocurrency.findAll();
    static addOrUpdateCryptocurrencies=async ({cryptocurrencies})=>{
        Models.Cryptocurrency.bulkCreate(cryptocurrencies, { updateOnDuplicate: ["percentage"] })
    }
}