import { UserDocument } from '../../../domain/users.entity';

export class UsersOutputModel {
  id: string;
  login: string;
  email: string;
  createdAt: string;
}

export class UsersOutputModelWithQuery {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: UsersOutputModel[];
}

export const UserOutputModelMapper = (user: UserDocument): UsersOutputModel => {
  const output = new UsersOutputModel();
  output.id = user._id;
  output.login = user.login;
  output.email = user.email;
  output.createdAt = user.createdAt.toISOString();
  return output;
};
