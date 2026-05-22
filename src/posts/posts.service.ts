import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll() {
    return [
      { id: 1, title: 'Bài viết đầu tiên', content: 'Nội dung 1' },
      { id: 2, title: 'Bài viết thứ hai', content: 'Nội dung 2' },
      { id: 3, title: 'Bài viết thứ ba', content: 'Nội dung 3' },
    ];
  }
}
