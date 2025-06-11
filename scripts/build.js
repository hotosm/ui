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
        ...(await globby('./src/react/**/*.ts')),
        ...(await globby('./src/react/**/*.js'))
    ],
    chunkNames: 'chunks/[name].[hash]',
    bundle: true,
    splitting: true,
    external: undefined,
    minify: true,
    tsconfig: 'tsconfig.json',
    loader: {
        '.svg': 'dataurl',
        '.png': 'dataurl',
        '.ts': 'ts',
        '.js': 'js',
    },
    packages: 'external',
    resolveExtensions: ['.ts', '.js', '.tsx', '.jsx'],
    outdir
};

await Promise.all([...bundleDirectories.map(dir => deleteAsync(dir))]);
await fs.mkdir(outdir, { recursive: true });

// First run esbuild
await esbuild.build(config);

// Then run TypeScript declaration generation
await execPromise(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`);

