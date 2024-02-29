import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from '../domain/blogs.entity';
import { BlogsOutputModelMapper } from '../api/models/output/blogs.output.model';

@Injectable()
export class BlogsRepository {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}
  async create(blogData: Blog) {
    const blog: BlogDocument = await this.blogModel.create(blogData);
    return BlogsOutputModelMapper(blog);
  }
}
