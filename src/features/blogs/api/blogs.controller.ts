import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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

  @Get(':id')
  async getById(@Param('id') id: string) {
    const blog = await this.blogsQueryRepository.getBlogById(id);
    if (!blog) throw new NotFoundException();
    return blog;
  }

  @HttpCode(204)
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateModel: BlogsInputModel,
  ) {
    const blog = await this.blogsService.updateById(id, updateModel);
    if (!blog) throw new NotFoundException();
  }

  @HttpCode(204)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    const status = await this.blogsService.deleteById(id);
    if (!status) throw new NotFoundException();
  }
}
