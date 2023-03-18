import messageModel from '../models/message.model';
import Imessage from '../interfaces/message.interface';


export default class messageClass {
    async sendText(data: Partial<Imessage>) {
        return await messageModel.create(data)
    }
}

