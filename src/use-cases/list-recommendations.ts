import type { RecommendationsRepository } from "@/repositories/recommendations-repository";

export class ListRecommendationsUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private recommendationsRepository: RecommendationsRepository) { }

  async execute() {
    const recommendations = await this.recommendationsRepository.findAll();

    return recommendations;
  }
}
