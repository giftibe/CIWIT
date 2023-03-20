import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { userClass } from './user.model';

@modelOptions({ schemaOptions: { collection: 'messages' } })
export class messageClass {
    @prop({ required: true, timestamp: true, trim:true })
    chat: string;

    @prop({ required: true })
    receiver: string;

    @prop({ required: true })
    sender: string;

    
}
const messageModel = getModelForClass(messageClass);

export default messageModel
