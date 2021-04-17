import {Injectable, OnModuleInit} from '@nestjs/common';
import { AppRepository } from "./app.repository";
import {Plant} from "./models/plant.model";

@Injectable()
export class AppService implements OnModuleInit{
    constructor(private readonly appRepository: AppRepository) {}

    getOk(): string {
        return 'Ok';
    }

    async getPlant(plantName: string): Promise<Plant> {
        return this.appRepository.getPlant(plantName);
    }

    initDatabase(): void {
        this.appRepository.storePlant({
            id: 1,
            name: "Tulip"
        });
        this.appRepository.storePlant({
              id: 2,
              name: "Rose"
        });
    }

    onModuleInit(): any {
        this.initDatabase();
    }
}
