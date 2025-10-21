import { app } from "./app";
import { env } from "./env";

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Ate500 Server Running at http://localhost:${env.PORT}🚀💸`);
  });
