import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {Tree} from "./models/tree.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getOk(): string {
    return this.appService.getOk();
  }

  @Get('/tree/:treeName')
  async getTree(@Param('treeName') treeName: string): Promise<Tree> {
    return await this.appService.getTree(treeName);
  }
}
