import { faker } from "@faker-js/faker";
import { randomUUID } from "node:crypto";

export function makeRecommendation() {
  return {
    id: randomUUID(),
    name: faker.commerce.productName(),
    price: faker.number.float(),
    image: faker.image.url(),
    createdAt: faker.date.recent(),
  };
}
