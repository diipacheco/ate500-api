import { describe, expect, it, beforeEach } from "vitest";

import { makeRecommendation } from "@/tests/factories/make-recommendations-factory";

import { ImMemoryRecommendationsRepository } from "@/repositories/in-memory/in-memory-recommendations-repository";

import { ListRecommendationsUseCase } from "./list-recommendations";

describe("List recommendations use case", () => {
  let recommendationsRepository: ImMemoryRecommendationsRepository;
  let sut: ListRecommendationsUseCase;

  beforeEach(() => {
    recommendationsRepository = new ImMemoryRecommendationsRepository();
    sut = new ListRecommendationsUseCase(recommendationsRepository);
  });

  it("should be able to list recommendations", async () => {
    recommendationsRepository.recommendations.push(makeRecommendation());
    const recommendations = await sut.execute();

    expect(recommendations).toHaveLength(1);
  });
});
