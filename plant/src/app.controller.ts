import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {Plant} from "./models/plant.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getOk(): string {
    return this.appService.getOk();
  }

  @Get('/plant/:plantName')
  async getPlant(@Param('plantName') plantName: string): Promise<Plant> {
    return await this.appService.getPlant(plantName);
  }
}
