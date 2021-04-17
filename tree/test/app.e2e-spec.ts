import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {AppRepository} from "../src/app.repository";

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
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

  it('/ (GET)', () => {
    return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Ok');
  });

  it('/tree/:treeName (GET)', () => {
    return request(app.getHttpServer())
        .get('/tree/Oak')
        .expect(200)
        .expect('{"id":1,"name":"Oak"}');
  });

  afterEach(async () => {
    await moduleFixture.close();
    await app.close();
  });
});
