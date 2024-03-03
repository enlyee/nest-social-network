import { Module, Provider } from '@nestjs/common';
import { UsersController } from './features/users/api/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './features/users/domain/users.entity';
import { UsersService } from './features/users/application/users.service';
import { UsersRepository } from './features/users/infrastructure/users.repository';
import { UsersQueryRepository } from './features/users/infrastructure/users.query-repository';
import { BlogsController } from './features/blogs/api/blogs.controller';
import { BlogsService } from './features/blogs/application/blogs.service';
import { BlogsRepository } from './features/blogs/infrastructure/blogs.repository';
import { Blog, BlogSchema } from './features/blogs/domain/blogs.entity';
import { BlogsQueryRepository } from './features/blogs/infrastructure/blogs.query.repository';
import { PostsService } from './features/posts/application/posts.service';
import { PostsRepository } from './features/posts/infrastructure/posts.repository';
import { PostsQueryRepository } from './features/posts/infrastructure/posts.query.repository';
import { PostsController } from './features/posts/api/posts.controller';
import { Post, PostSchema } from './features/posts/domain/posts.entity';
import { CommentsQueryRepository } from './features/comments/infrastructure/comments.query.repository';
import {
  Comment,
  CommentSchema,
} from './features/comments/domain/comments.entity';
import { CommentsController } from './features/comments/api/comments.controller';
import { TestingGodController } from './features/testing/testing.god.controller';

const usersProviders: Provider[] = [
  UsersService,
  UsersRepository,
  UsersQueryRepository,
];

const blogsProviders: Provider[] = [
  BlogsService,
  BlogsRepository,
  BlogsQueryRepository,
];

const postsProviders: Provider[] = [
  PostsService,
  PostsRepository,
  PostsQueryRepository,
];

const commentsProviders: Provider[] = [CommentsQueryRepository];

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://enlyee:incpass@cluster0.rzs8jwh.mongodb.net/nest2?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [
    UsersController,
    BlogsController,
    PostsController,
    CommentsController,
    TestingGodController,
  ],
  providers: [
    ...usersProviders,
    ...blogsProviders,
    ...postsProviders,
    ...commentsProviders,
  ],
})
export class AppModule {}
