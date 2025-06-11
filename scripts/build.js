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
        ...(await globby('./src/react/**/*.ts'))
    ],
    chunkNames: 'chunks/[name].[hash]',
    bundle: true,
    splitting: true,
    external: undefined,
    minify: true,
    tsconfig: 'tsconfig.json',
    loader: {
        '.svg': 'dataurl',
        '.ts': 'ts',
    },
    packages: 'external',
    outdir
};

await Promise.all([...bundleDirectories.map(dir => deleteAsync(dir))]);
await fs.mkdir(outdir, { recursive: true });
execPromise(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`, { stdio: 'inherit' });
esbuild.build(config).catch(() => process.exit(1));

