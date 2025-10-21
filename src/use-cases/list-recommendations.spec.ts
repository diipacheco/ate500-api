import { describe, expect, it, beforeEach } from "vitest";

import { ImMemoryRecommendationsRepository } from "@/repositories/in-memory/in-memory-recommendations-repository";
import { makeRecommendation } from "@/tests/factories/make-recommendations-factory";

import { ListRecommendationsUseCase } from "./list-recommendations";

describe("List recommendations use case", () => {
  let recommendationsRepository: ImMemoryRecommendationsRepository;
  let sut: ListRecommendationsUseCase;

  beforeEach(() => {
    recommendationsRepository = new ImMemoryRecommendationsRepository();
    sut = new ListRecommendationsUseCase(recommendationsRepository);
  });

  it("should be able to list recommendations", async () => {
    await recommendationsRepository.create(makeRecommendation());

    const recommendations = await sut.execute();

    expect(recommendations).toHaveLength(1);
  });
});
