import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    dir: "src",
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          dir: "src/use-cases",
        },
      },
    ],
    coverage: {
      exclude: [
        "prisma",
        "generated",
        "node_modules",
        "src/use-cases/factories/**",
      ],
      include: [
        "src/use-cases/**",
        "src/errors/**",
        "src/repositories/in-memory/**",
      ],
    },
  },

  plugins: [tsconfigPaths()],
});
