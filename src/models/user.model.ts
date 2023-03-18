import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'users' } })
export class userClass {
    @prop({ required: true, lowercase: true, })
    email: string;

    @prop({ required: true })
    username: string;

    @prop({ required: true, lowercase: true })
    password: string;

    avatar: string;

    @prop({ default: false })
    isDeleted: boolean;

    timestamp: true

}

const UserModel = getModelForClass(userClass);
export default UserModel;