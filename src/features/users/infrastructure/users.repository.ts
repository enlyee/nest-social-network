import { User, UserDocument } from '../domain/users.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserOutputModelMapper } from '../api/models/output/users.output.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(user: User) {
    const result: UserDocument = await this.userModel.create(user);
    return UserOutputModelMapper(result);
  }
  async delete(id: string) {
    const result = await this.userModel.deleteOne({ _id: id });
    return !!result.deletedCount;
  }
}
