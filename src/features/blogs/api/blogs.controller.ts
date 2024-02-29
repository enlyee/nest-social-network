import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BlogsInputModel } from './models/input/blogs.input.model';
import { BlogsService } from '../application/blogs.service';
import { BlogsQueryPipe } from '../../../common/pipes/blogs.query.pipes';
import { BlogsQueryFixedModel } from './models/input/blogs.query.input.model';
import { BlogsQueryRepository } from '../infrastructure/blogs.query.repository';

@Controller('blogs')
export class BlogsController {
  constructor(
    private readonly blogsService: BlogsService,
    private readonly blogsQueryRepository: BlogsQueryRepository,
  ) {}
  @Post()
  async create(@Body() createModel: BlogsInputModel) {
    const createdBlog = await this.blogsService.create(createModel);
    return createdBlog;
  }

  @Get()
  async get(@Query(BlogsQueryPipe) query: BlogsQueryFixedModel) {
    const blogs = await this.blogsQueryRepository.getBlogs(query);
    return blogs;
  }
}
