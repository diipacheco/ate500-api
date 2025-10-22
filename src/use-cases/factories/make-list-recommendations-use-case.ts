import { PrismaRecommendationsRepository } from "@/repositories/prisma/prisma-recommendations-repository";
import { ListRecommendationsUseCase } from "../list-recommendations";

export function makeListRecommendationsUseCase() {
  const recommendationsRepository = new PrismaRecommendationsRepository();
  const useCase = new ListRecommendationsUseCase(recommendationsRepository);

  return useCase;
}
