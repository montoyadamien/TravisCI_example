import {Inject, Injectable, Logger} from "@nestjs/common";
import {Tree} from "./models/tree.model";

@Injectable()
export class AppRepository{
    readonly TREE_CONCAT = 'tree-';

    constructor(@Inject("redis") private readonly redisClient: any) { }

    public storeTree(tree: Tree): void {
        this.redisClient.set(this.TREE_CONCAT + tree.name, JSON.stringify(tree))
            .then((done) => {
                Logger.log("Tree " + tree.name + " - " + done);
            })
            .catch((err) => Logger.error(err));
    }

    public async getTree(plantName): Promise<Tree> {
        return JSON.parse(await this.redisClient.get(this.TREE_CONCAT + plantName));
    }
}
