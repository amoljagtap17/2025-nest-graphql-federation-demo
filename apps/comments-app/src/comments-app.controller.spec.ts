import { Test, TestingModule } from '@nestjs/testing';
import { CommentsAppController } from './comments-app.controller';
import { CommentsAppService } from './comments-app.service';

describe('CommentsAppController', () => {
  let commentsAppController: CommentsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommentsAppController],
      providers: [CommentsAppService],
    }).compile();

    commentsAppController = app.get<CommentsAppController>(CommentsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(commentsAppController.getHello()).toBe('Hello World!');
    });
  });
});
