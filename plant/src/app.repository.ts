import {Inject, Injectable, Logger} from "@nestjs/common";
import {Plant} from "./models/plant.model";

@Injectable()
export class AppRepository{
    readonly PLANT_CONCAT = 'plant-';

    constructor(@Inject("redis") private readonly redisClient: any) { }

    public storePlant(plant: Plant): void {
        this.redisClient.set(this.PLANT_CONCAT + plant.name, JSON.stringify(plant))
            .then((done) => {
                Logger.log("Plant " + plant.name + " - " + done);
            })
            .catch((err) => Logger.error(err));
    }

    public async getPlant(plantName): Promise<Plant> {
        return JSON.parse(await this.redisClient.get(this.PLANT_CONCAT + plantName));
    }
}
