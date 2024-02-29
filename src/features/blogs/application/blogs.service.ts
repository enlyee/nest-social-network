import { Injectable } from '@nestjs/common';
import { BlogsInputModel } from '../api/models/input/blogs.input.model';
import { Blog } from '../domain/blogs.entity';
import { BlogsRepository } from '../infrastructure/blogs.repository';

@Injectable()
export class BlogsService {
  constructor(private readonly blogsRepository: BlogsRepository) {}
  async create(blogData: BlogsInputModel) {
    const blog = new Blog(
      blogData.name,
      blogData.description,
      blogData.websiteUrl,
    );
    const newBlog = await this.blogsRepository.create(blog);
    return newBlog;
  }
}
