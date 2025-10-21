import { type Recommendation, Prisma } from "generated/prisma";

export interface RecommendationsRepository {
  findAll(): Promise<Recommendation[]>;
  create(
    data: Prisma.RecommendationUncheckedCreateInput,
  ): Promise<Recommendation>;
}
