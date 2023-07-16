import { Redis } from "ioredis";
import { REDIS_URL } from "../constants";

const RedisClient = new Redis(REDIS_URL);

RedisClient.on("connect", () => {
  console.info(`🚀 [redis]: connected`);
});

RedisClient.on("error", (err: any) => {
  console.error(`❌ [redis]: unable to connect`);
  console.log(err);
});

export default RedisClient;
