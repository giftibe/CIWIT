import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'users' } })
export class userClass {
    @prop({ required: true, timestamp: true })
    wallet_address: string;

    @prop({ required: true })
    username: string;

    @prop({ required: true })
    avatar: string;
}

export const UserModel = getModelForClass(userClass);
