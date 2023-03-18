import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { userClass } from './user.model';

@modelOptions({ schemaOptions: { collection: 'messages' } })
export class messageClass {
    @prop({ required: true, timestamp: true })
    message_text: string;

    @prop({ required: true })
    user_id: userClass;
}
const messageModel = getModelForClass(messageClass);

export default messageModel