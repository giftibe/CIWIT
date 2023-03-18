import IUser from '../interfaces/user.interface';
import UserModel from '../models/user.model';

export default class userService {
    async createUser(data: IUser) {
        return await UserModel.create(data)
    }

    async deleteUser(data: Partial<IUser>) {
        return await UserModel.findOneAndUpdate();
    }
}


