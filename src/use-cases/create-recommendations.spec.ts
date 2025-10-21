import { beforeEach, describe, expect, it } from "vitest";

import { makeRecommendation } from "@/tests/factories/make-recommendations-factory";
import { ImMemoryRecommendationsRepository } from "@/repositories/in-memory/in-memory-recommendations-repository";

import { CreateRecommendationsUseCase } from "./create-recommendations";

describe("Create recommendations use case", () => {
  let recommendationsRepository: ImMemoryRecommendationsRepository;
  let sut: CreateRecommendationsUseCase;

  beforeEach(() => {
    recommendationsRepository = new ImMemoryRecommendationsRepository();
    sut = new CreateRecommendationsUseCase(recommendationsRepository);
  });

  it("should be able to create recommendations", async () => {
    const { recommendation } = await sut.execute(makeRecommendation());

    expect(recommendationsRepository.recommendations).toHaveLength(1);
    expect(recommendation.id).toEqual(expect.any(String));
  });
});
