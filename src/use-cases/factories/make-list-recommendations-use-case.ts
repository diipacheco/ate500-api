import { RedisRecommendationsRepository } from "@/repositories/redis/redis-recommendations-repository";

import { ListRecommendationsUseCase } from "../list-recommendations";

export function makeListRecommendationsUseCase() {
  const recommendationsRepository = new RedisRecommendationsRepository();
  const useCase = new ListRecommendationsUseCase(recommendationsRepository);

  return useCase;
}
