import Models from "../../models/index.js"

export default class UserService {
    static authenticate= async (email)=>Models.User.findOne({ where: { email } });
}