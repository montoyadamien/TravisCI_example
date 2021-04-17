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
    repository.storeTree({
      id: 1,
      name: "Oak"
    });
    repository.storeTree({
      id: 2,
      name: "Baobab"
    });
  });

  describe('root', () => {
    it('should return "Ok"', (done) => {
      expect(appController.getOk()).toBe('Ok');
      done();
    });
  });

  describe('getTree', () => {
    it('should return "Oak" tree', async (done) => {
      const plant = await appController.getTree('Oak');
      expect(plant.name).toBe('Oak');
      done();
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
