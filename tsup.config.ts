import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  sourcemap: true,
  entry: ["components/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  target: "node16",
  splitting: true,
  outDir: "dist",
});
