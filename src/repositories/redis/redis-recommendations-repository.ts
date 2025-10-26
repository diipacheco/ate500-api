import { redis } from "@/lib/redis";

import { getRecommendationsFromScrapers } from "@/http/services/getRecommendationsFromScrapers";

import type {
  Recommendation,
  RecommendationsRepository,
} from "../recommendations-repository";

export class RedisRecommendationsRepository
  // eslint-disable-next-line prettier/prettier
  implements RecommendationsRepository {
  async findAll(): Promise<Recommendation[]> {
    const cacheKey = "recommendations";
    const cachedRecommendations = await redis.get(cacheKey);

    if (cachedRecommendations) {
      return JSON.parse(cachedRecommendations);
    }

    const scrappedRecommendations = await getRecommendationsFromScrapers();

    await redis.set(
      cacheKey,
      JSON.stringify(scrappedRecommendations),
      "EX",
      60 * 60 * 24,
    );

    return scrappedRecommendations;
  }
}
