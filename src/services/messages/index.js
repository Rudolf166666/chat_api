import Models from "../../models/index.js"

export default class MessagesService {
    static createMessage= async (body)=>Models.Message.create(body);
    static findAll= async (email)=>Models.MessagesService.findAll();
}