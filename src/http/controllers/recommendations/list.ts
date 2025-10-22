import type { FastifyReply, FastifyRequest } from "fastify";

// import { getRecommendationsFromScrapers } from "@/http/services/getRecommendationsFromScrapers";
import { makeListRecommendationsUseCase } from "@/use-cases/factories/make-list-recommendations-use-case";

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const listRecommendationsUseCase = makeListRecommendationsUseCase();
  const recommendations = await listRecommendationsUseCase.execute();

  /**
   * Criar o produto no banco de dados caso não exista, e atualizar o cache do redis

    if (recommendations.length === 0) {
    const recommendationsFromScrapers = await getRecommendationsFromScrapers();
  }
  */

  return reply.status(200).send(recommendations);
}
