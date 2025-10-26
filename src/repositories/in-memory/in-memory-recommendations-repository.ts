import type {
  Recommendation,
  RecommendationsRepository,
} from "../recommendations-repository";

export class ImMemoryRecommendationsRepository
  // eslint-disable-next-line prettier/prettier
  implements RecommendationsRepository {
  public recommendations: Recommendation[] = [];

  constructor() {
    this.recommendations = [];
  }

  async findAll(): Promise<Recommendation[]> {
    return this.recommendations;
  }
}
