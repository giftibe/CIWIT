import { prop, getModelForClass } from '@typegoose/typegoose';
import { userClass } from './user.model';

export class messageClass {
    @prop({ required: true, timestamp: true })
    message_text: string;

    @prop({ required: true })
    username: string;

    @prop({ required: true })
    user_id: userClass;
}
export const messageModel = getModelForClass(messageClass);
