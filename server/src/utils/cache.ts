import { RedisClient } from "../connections";

export async function setCache(key: any, value: any, time_in_seconds: number) {
  try {
    const keyString: string = JSON.stringify(key);
    await RedisClient.setex(keyString, time_in_seconds, JSON.stringify(value));
  } catch (err: any) {
    console.error(err);
  }
}

export async function getCache(key: any) {
  try {
    const keyString: string = JSON.stringify(key);
    let cache = await RedisClient.get(keyString);
    if (!cache) return null;
    cache = JSON.parse(cache);
    return cache;
  } catch (err: any) {
    console.error(err);
    return null;
  }
}

export async function deleteCache(key: any) {
  try {
    const keyString: string = JSON.stringify(key);
    RedisClient.del(keyString);
  } catch (err: any) {
    console.error(err);
  }
}