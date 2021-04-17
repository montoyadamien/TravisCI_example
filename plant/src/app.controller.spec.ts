import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from "./app.repository";
import { RedisModule } from "./redis/redis.module";

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [RedisModule],
      controllers: [AppController],
      providers: [AppRepository, AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    const repository = app.get<AppRepository>(AppRepository);
    repository.storePlant({
      id: 1,
      name: "Sunflower"
    });
    repository.storePlant({
      id: 2,
      name: "Poppy"
    });
  });

  describe('root', () => {
    it('should return "Ok"', (done) => {
      expect(appController.getOk()).toBe('Ok');
      done();
    });
  });

  describe('getPlant', () => {
    it('should return "Sunflower" plant', async (done) => {
      const plant = await appController.getPlant('Sunflower');
      expect(plant.name).toBe('Sunflower');
      done();
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
