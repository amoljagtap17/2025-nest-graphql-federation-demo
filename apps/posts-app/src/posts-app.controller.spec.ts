import { Test, TestingModule } from '@nestjs/testing';
import { PostsAppController } from './posts-app.controller';
import { PostsAppService } from './posts-app.service';

describe('PostsAppController', () => {
  let postsAppController: PostsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsAppController],
      providers: [PostsAppService],
    }).compile();

    postsAppController = app.get<PostsAppController>(PostsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(postsAppController.getHello()).toBe('Hello World!');
    });
  });
});
