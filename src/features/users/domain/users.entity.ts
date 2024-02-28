import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  login: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true })
  createdAt: Date;

  constructor(login: string, email: string, passwordHash: string) {
    this._id = crypto.randomUUID();
    this.login = login;
    this.email = email;
    this.passwordHash = passwordHash;
    this.createdAt = new Date();
  }
}
export const UserSchema = SchemaFactory.createForClass(User);
