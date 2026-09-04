import { deleteAsync } from "del";
import { exec } from "child_process";
import { globby } from "globby";
import esbuild from "esbuild";
import fs from "fs/promises";
import util from "util";
const outdir = "dist";
const execPromise = util.promisify(exec);
const bundleDirectories = [outdir];

const config = {
  format: "esm",
  target: "es2017",
  entryPoints: ["./src/hotosm-ui.ts", ...(await globby("./src/components/**/!(*.(style)).ts"))],
  chunkNames: "chunks/[name].[hash]",
  bundle: true,
  splitting: true,
  external: ["@awesome.me/webawesome", "@awesome.me/webawesome/*"],
  minify: true,
  tsconfig: "tsconfig.json",
  loader: {
    ".svg": "dataurl",
    ".png": "dataurl",
    ".ts": "ts",
    ".js": "js",
  },
  resolveExtensions: [".ts", ".js", ".tsx", ".jsx"],
  outdir,
};

await Promise.all([...bundleDirectories.map((dir) => deleteAsync(dir))]);
await fs.mkdir(outdir, { recursive: true });

execPromise(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`, {
  stdio: "inherit",
});
esbuild.build(config).catch(() => process.exit(1));

// Build the Vite helpers as a standalone Node module, separate from browser code.
esbuild
  .build({
    entryPoints: ["./src/vite.ts"],
    outfile: `${outdir}/vite.js`,
    format: "esm",
    platform: "node",
    target: "node18",
    bundle: true,
    splitting: false,
    minify: false,
    tsconfig: "tsconfig.json",
  })
  .catch(() => process.exit(1));

// Cross-platform copy for themes and style.css
async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = `${src}/${entry.name}`;
    const destPath = `${dest}/${entry.name}`;
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

await copyDir("src/themes", `${outdir}/themes`).catch(() => {});
await copyDir("src/assets", `${outdir}/assets`).catch(() => {});

// Generate webawesome-all.js: static imports of every WebAwesome component,
// pinned to the version in peerDependencies. Apps import this once so all
// wa-* elements are defined before first render, eliminating FOUCE without
// maintaining per-app import lists.
const waComponentsDir = "node_modules/@awesome.me/webawesome/dist/components";
const waComponents = (await fs.readdir(waComponentsDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const waImports = [];
for (const name of waComponents) {
  const entryFile = `${waComponentsDir}/${name}/${name}.js`;
  try {
    await fs.access(entryFile);
    waImports.push(`import "@awesome.me/webawesome/dist/components/${name}/${name}.js";`);
  } catch {
    // directory without a matching entry file (internal helpers)
  }
}
await fs.writeFile(`${outdir}/webawesome-all.js`, waImports.join("\n") + "\n");
await fs.writeFile(`${outdir}/webawesome-all.d.ts`, "export {};\n");

// Bundle CSS through esbuild so @import paths (including
// @awesome.me/webawesome) are resolved from node_modules and inlined.
// The Google Fonts @import URL is kept as-is (external URL).
//
// style.css       – fully self-contained (WebAwesome CSS inlined)
// style-core.css  – HOT-only styles; consumers load WebAwesome CSS
//                   separately from CDN for cross-tool cache sharing
await Promise.all([
  esbuild.build({
    entryPoints: ["./src/style.css"],
    bundle: true,
    minify: true,
    outfile: `${outdir}/style.css`,
  }),
  esbuild.build({
    entryPoints: ["./src/style-core.css"],
    bundle: true,
    minify: true,
    outfile: `${outdir}/style-core.css`,
  }),
]).catch(() => process.exit(1));
