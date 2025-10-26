import type { FastifyReply, FastifyRequest } from "fastify";

import { makeListRecommendationsUseCase } from "@/use-cases/factories/make-list-recommendations-use-case";

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const listRecommendationsUseCase = makeListRecommendationsUseCase();
  const recommendations = await listRecommendationsUseCase.execute();

  return reply.status(200).send(recommendations);
}
