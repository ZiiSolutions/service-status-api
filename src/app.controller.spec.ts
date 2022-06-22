import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('/status', () => {
    it('should return the expected service mapping response', (done) => {
      const mockData = [{ name: 'News Now', isHealthy: true }];
      jest
        .spyOn(appService, 'getStatus')
        .mockReturnValue(Promise.resolve(mockData));

      appController.getStatus().then((res) => {
        expect(res).toEqual(mockData);
        done();
      });
    });
  });
});
