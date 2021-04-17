import { Injectable } from '@nestjs/common';
import {AppRepository} from "./app.repository";
import {Tree} from "./models/tree.model";

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  getOk(): string {
    return 'Ok';
  }

  async getTree(treeName: string): Promise<Tree> {
    return this.appRepository.getTree(treeName);
  }

  initDatabase(): void {
    this.appRepository.storeTree({
      id: 1,
      name: "Mahogany"
    });
    this.appRepository.storeTree({
      id: 2,
      name: "Thuja"
    });
  }

  onModuleInit(): any {
    this.initDatabase();
  }
}
