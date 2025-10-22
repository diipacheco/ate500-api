import type { Recommendation, Prisma } from "generated/prisma";

import { prisma } from "@/lib/prisma";

import type { RecommendationsRepository } from "../recommendations-repository";

export class PrismaRecommendationsRepository
  // eslint-disable-next-line prettier/prettier

  implements RecommendationsRepository {
  findAll(): Promise<Recommendation[]> {
    const recommendations = prisma.recommendation.findMany();

    return recommendations;
  }

  create(
    data: Prisma.RecommendationUncheckedCreateInput,
  ): Promise<Recommendation> {
    const recommendation = prisma.recommendation.create({
      data,
    });

    return recommendation;
  }
}
