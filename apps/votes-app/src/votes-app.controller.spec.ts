import { Test, TestingModule } from '@nestjs/testing';
import { VotesAppController } from './votes-app.controller';
import { VotesAppService } from './votes-app.service';

describe('VotesAppController', () => {
  let votesAppController: VotesAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VotesAppController],
      providers: [VotesAppService],
    }).compile();

    votesAppController = app.get<VotesAppController>(VotesAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(votesAppController.getHello()).toBe('Hello World!');
    });
  });
});
