import type { FastifyInstance } from "fastify";

import { list } from "./list";

export function recommendationsRoutes(app: FastifyInstance) {
  app.get("/recommendations", list);
}
