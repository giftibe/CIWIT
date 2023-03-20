import IUser from '../interfaces/user.interface';
import UserModel from '../models/user.model';

class userService {
    async createUser(data: IUser) {
        return await UserModel.create(data)
    }

    async deleteUser(data: Partial<IUser>) {
        return await UserModel.findOneAndUpdate(data);
    }

    async findByEmail(email: string) {
        
        return await UserModel.find({ email: email, isDeleted: false })
    }

    async findByusername(username: string) {
        return await UserModel.find({ username: username, isDeleted: false })
    }
}

export default new userService()


