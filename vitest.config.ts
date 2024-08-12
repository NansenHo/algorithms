import { defineConfig } from "vitest/config";

// 将 Vite 配置定义为一个函数
export default defineConfig((configEnv) =>
  defineConfig({
    test: {
      include: [
        "data_structures/**/*.spec.ts",
        "leetcode/**/*.spec.ts",
        "sort/**/*.spec.ts",
      ],
    },
  })
);
