import messageModel from '../models/message.model';
import Imessage from '../interfaces/message.interface';

class messageClass {
    async sendText(data: Imessage) {
        return await messageModel.create(data);
    }

    async getAllTexts(data: Partial<Imessage>) {
        return await messageModel
            .find(data, { _id: 1, password: 0 })
            .sort({ $natural: -1 });
    }
}
export default new messageClass()