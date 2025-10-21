import type { Recommendation } from "generated/prisma";
import { randomUUID } from "node:crypto";

import type { RecommendationsRepository } from "../recommendations-repository";

export class ImMemoryRecommendationsRepository
  // eslint-disable-next-line prettier/prettier
  implements RecommendationsRepository {
  public recommendations: Recommendation[] = [];

  constructor() {
    this.recommendations = [];
  }

  async create(data: Recommendation): Promise<Recommendation> {
    const recommendation: Recommendation = {
      id: data.id ?? randomUUID(),
      name: data.name,
      price: data.price,
      image: data.image,
      createdAt: data.createdAt ?? new Date(),
    };

    this.recommendations.push(recommendation);

    return recommendation;
  }

  async findAll(): Promise<Recommendation[]> {
    return this.recommendations;
  }
}
