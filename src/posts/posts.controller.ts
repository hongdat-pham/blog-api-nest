import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  findAll() {
    return [
      { id: 1, title: 'Bài viết đầu tiên', content: 'Nội dung 1' },
      { id: 2, title: 'Bài viết thứ hai', content: 'Nội dung 2' },
      { id: 3, title: 'Bài viết thứ ba', content: 'Nội dung 3' },
    ];
  }
}
