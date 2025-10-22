import Fastify from "fastify";
import { ZodError, z } from "zod";

import { env } from "./env";
import { recommendationsRoutes } from "./http/controllers/recommendations/routes";

export const app = Fastify();

app.register(recommendationsRoutes);

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: z.treeifyError(error) });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return reply.status(500).send({ message: "Internal server error." });
});
