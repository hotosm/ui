/** Build helpers for apps that use `@hotosm/ui`. */

/** Minimal chunk type that avoids depending on a specific bundler version. */
export interface EmittedChunk {
  type: "chunk";
  name: string;
  fileName: string;
  imports: readonly string[];
  dynamicImports?: readonly string[];
}

export type EmittedBundle = Record<string, { type: string } | EmittedChunk>;

/** Find cycles in static chunk imports. Dynamic imports are ignored. */
export function findChunkCycles(bundle: EmittedBundle): string[][] {
  const imports = new Map<string, string[]>();
  const name = new Map<string, string>();
  for (const [file, output] of Object.entries(bundle)) {
    if (output.type !== "chunk") continue;
    const chunk = output as EmittedChunk;
    name.set(file, chunk.name || file);
    imports.set(
      file,
      chunk.imports.filter((id) => bundle[id]?.type === "chunk"),
    );
  }

  const onStack = new Set<string>();
  const done = new Set<string>();
  const stack: string[] = [];
  const cycles = new Map<string, string[]>();

  const visit = (file: string): void => {
    onStack.add(file);
    stack.push(file);
    for (const next of imports.get(file) ?? []) {
      if (onStack.has(next)) {
        const cycle = [...stack.slice(stack.indexOf(next)), next].map((f) => name.get(f) ?? f);
        cycles.set(cycle.join(" -> "), cycle);
      } else if (!done.has(next)) {
        visit(next);
      }
    }
    stack.pop();
    onStack.delete(file);
    done.add(file);
  };

  for (const file of imports.keys()) if (!done.has(file)) visit(file);
  return [...cycles.values()];
}

export interface CircularChunkGuardOptions {
  /** Warn instead of failing the build. */
  warnOnly?: boolean;
}

/** Minimal plugin type that avoids depending on a specific bundler version. */
export interface ChunkGuardPlugin {
  name: string;
  apply: "build";
  enforce: "post";
  generateBundle(this: unknown, options: unknown, bundle: EmittedBundle): void;
}

/** Fail the build when output chunks import each other in a cycle. */
export function circularChunkGuard(options: CircularChunkGuardOptions = {}): ChunkGuardPlugin {
  return {
    name: "hotosm-circular-chunk-guard",
    apply: "build",
    enforce: "post",
    generateBundle(_options, bundle) {
      const cycles = findChunkCycles(bundle);
      if (cycles.length === 0) return;

      const message = [
        `Circular chunk import${cycles.length > 1 ? "s" : ""} in the build output:`,
        ...cycles.map((cycle) => `  ${cycle.join(" -> ")}`),
        "",
        "This can cause a blank page or an 'x is undefined' error at runtime.",
        "Check your manual chunk rules or remove them.",
      ].join("\n");

      if (options.warnOnly) {
        console.warn(`[hotosm-circular-chunk-guard] ${message}`);
        return;
      }
      throw new Error(message);
    },
  };
}

/** WebAwesome modules as a Rolldown code-splitting group. */
export const WEBAWESOME_CHUNK: { test: RegExp; name: string } = {
  test: /[\\/]@awesome\.me[\\/]webawesome[\\/]/,
  name: "webawesome",
};

/** Match WebAwesome modules in a Rollup `manualChunks` callback. */
export function matchWebawesome(id: string): string | undefined {
  return WEBAWESOME_CHUNK.test.test(id) ? WEBAWESOME_CHUNK.name : undefined;
}
