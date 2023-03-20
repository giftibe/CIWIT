import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';


@modelOptions({ schemaOptions: { collection: 'users' } })
export class userClass {
    @prop({ required: true, lowercase: true, trim: true, unique: true })
    public email: string;

    @prop({ required: true, trim: true, unique: true })
    public username: string;

    @prop({ required: true, lowercase: true, trim: true })
    password: string;

    @prop({ default: false })
    public isDeleted: boolean;

    timestamp: true
}

// @pre<userClass>('remove', async function (next) {
//     this.isDeleted = true;
//     await this.save();
//     return next();
// })

const UserModel = getModelForClass(userClass);
export default UserModel;