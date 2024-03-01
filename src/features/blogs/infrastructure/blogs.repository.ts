import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Blog, BlogDocument } from '../domain/blogs.entity';
import { BlogsOutputModelMapper } from '../api/models/output/blogs.output.model';
import { BlogsInputModel } from '../api/models/input/blogs.input.model';

@Injectable()
export class BlogsRepository {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}
  async create(blogData: Blog) {
    const blog: BlogDocument = await this.blogModel.create(blogData);
    return BlogsOutputModelMapper(blog);
  }

  async updateById(id: string, blogData: BlogsInputModel) {
    const updateStatus: UpdateWriteOpResult = await this.blogModel.updateOne(
      { _id: id },
      blogData,
    );
    return !!updateStatus.matchedCount;
  }

  async deleteById(id: string) {
    const deleteStatus = await this.blogModel.deleteOne({ _id: id });
    return !!deleteStatus.deletedCount;
  }
}
