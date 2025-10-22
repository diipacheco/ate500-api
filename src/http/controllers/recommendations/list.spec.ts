import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import request from "supertest";

import { app } from "@/app";
import * as getKabumRecommendations from "@/http/services/scrapers/kabum";

describe("List recommendations (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to list recommendations", async () => {
    vi.spyOn(getKabumRecommendations, "kabumScraper").mockResolvedValue([
      {
        name: "Product 1",
        price: "100",
        image: "http://image.com",
        link: "http://link.com",
      },
    ]);
    const response = await request(app.server).get("/recommendations");

    expect(response.statusCode).toBe(200);
  });
});
