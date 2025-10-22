import type { RecommendationsRepository } from "@/repositories/recommendations-repository";

interface CreateRecommendationsUseCaseRequest {
  name: string;
  price: number;
  image: string;
  link: string;
}

export class CreateRecommendationsUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private recommendationsRepository: RecommendationsRepository) { }

  async execute({
    name,
    price,
    image,
    link,
  }: CreateRecommendationsUseCaseRequest) {
    const recommendation = await this.recommendationsRepository.create({
      name,
      price,
      image,
      link,
    });

    return {
      recommendation,
    };
  }
}
