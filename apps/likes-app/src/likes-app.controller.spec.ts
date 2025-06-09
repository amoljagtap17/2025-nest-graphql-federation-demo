import { Test, TestingModule } from '@nestjs/testing';
import { LikesAppController } from './likes-app.controller';
import { LikesAppService } from './likes-app.service';

describe('LikesAppController', () => {
  let likesAppController: LikesAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LikesAppController],
      providers: [LikesAppService],
    }).compile();

    likesAppController = app.get<LikesAppController>(LikesAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(likesAppController.getHello()).toBe('Hello World!');
    });
  });
});
