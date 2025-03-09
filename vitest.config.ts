import { defineConfig } from "vitest/config";

export default defineConfig((configEnv) =>
  defineConfig({
    test: {
      include: [
        "interview/**/*.spec.ts",
        "data_structures/**/*.spec.ts",
        "leetcode/**/*.spec.ts",
        "sort/**/*.spec.ts",
      ],
    },
  })
);
