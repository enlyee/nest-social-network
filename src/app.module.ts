import { Module, Provider } from '@nestjs/common';
import { UsersController } from './features/users/api/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './features/users/domain/users.entity';
import { UsersService } from './features/users/application/users.service';
import { UsersRepository } from './features/users/infrastructure/users.repository';
import { UsersQueryRepository } from './features/users/infrastructure/users.query-repository';

const usersProviders: Provider[] = [
  UsersService,
  UsersRepository,
  UsersQueryRepository,
];

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://enlyee:incpass@cluster0.rzs8jwh.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [...usersProviders],
})
export class AppModule {}
