import { deleteAsync } from 'del';
import { exec } from 'child_process';
import { globby } from 'globby';
import esbuild from 'esbuild';
import fs from 'fs/promises';
import util from 'util';
const outdir = 'dist';
const execPromise = util.promisify(exec);
const bundleDirectories = [outdir];

const config = {
  format: 'esm',
  target: 'es2017',
  entryPoints: [
    './src/hotosm-ui.ts',
    ...(await globby('./src/components/**/!(*.(style)).ts')),
  ],
  chunkNames: 'chunks/[name].[hash]',
  bundle: true,
  splitting: true,
  external: ['@awesome.me/webawesome', '@awesome.me/webawesome/*'],
  minify: true,
  tsconfig: 'tsconfig.json',
  loader: {
    '.svg': 'dataurl',
    '.png': 'dataurl',
    '.ts': 'ts',
    '.js': 'js',
  },
  resolveExtensions: ['.ts', '.js', '.tsx', '.jsx'],
  outdir,
};

await Promise.all([...bundleDirectories.map((dir) => deleteAsync(dir))]);
await fs.mkdir(outdir, { recursive: true });

execPromise(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`, {
  stdio: 'inherit',
});
esbuild.build(config).catch(() => process.exit(1));

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

await copyDir('src/themes', `${outdir}/themes`).catch(() => {});
await fs.copyFile('src/style.css', `${outdir}/style.css`).catch(() => {});
await copyDir('src/assets', `${outdir}/assets`).catch(() => {});
