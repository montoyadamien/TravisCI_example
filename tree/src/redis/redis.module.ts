import { Module } from '@nestjs/common';
import * as asyncRedis from 'async-redis';
import { REDIS_HOST } from '../env.variables';

const RedisProvider = {
    provide: "redis",
    useFactory: () => asyncRedis.createClient(`redis://${REDIS_HOST}`)
}

@Module({
    exports: ["redis"],
    providers: [RedisProvider]
})
export class RedisModule { }
