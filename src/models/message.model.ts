import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { userClass } from './user.model';

@modelOptions({ schemaOptions: { collection: 'messages' } })
export class messageClass {
    @prop({ required: true, timestamp: true })
    message_text: string;

    @prop({ required: true })
    receiver_id: userClass;

    @prop({ required: true })
    sender_id: userClass;
}
const messageModel = getModelForClass(messageClass);

export default messageModel