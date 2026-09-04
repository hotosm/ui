/// <reference types="vitest" />
import { describe, it, expect, vi } from "vitest";
import {
  findChunkCycles,
  circularChunkGuard,
  matchWebawesome,
  WEBAWESOME_CHUNK,
  type EmittedBundle,
} from "../src/vite.js";

/** Bundle fixture: chunk name -> statically imported chunk names. */
function bundleOf(
  graph: Record<string, string[]>,
  dynamic: Record<string, string[]> = {},
): EmittedBundle {
  const bundle: EmittedBundle = {};
  for (const [name, imports] of Object.entries(graph)) {
    bundle[`${name}.js`] = {
      type: "chunk",
      name,
      fileName: `${name}.js`,
      imports: imports.map((dep) => `${dep}.js`),
      dynamicImports: (dynamic[name] ?? []).map((dep) => `${dep}.js`),
    };
  }
  return bundle;
}

const runGuard = (bundle: EmittedBundle, warnOnly = false) => {
  const plugin = circularChunkGuard(warnOnly ? { warnOnly: true } : {});
  plugin.generateBundle.call(null, {}, bundle);
};

describe("findChunkCycles", () => {
  it("accepts an acyclic graph", () => {
    const bundle = bundleOf({
      index: ["vendor-react", "vendor-redux", "webawesome"],
      "vendor-redux": ["vendor-react"],
      webawesome: ["vendor-react"],
      "vendor-react": [],
    });
    expect(findChunkCycles(bundle)).toEqual([]);
  });

  it("finds a two-chunk cycle", () => {
    const bundle = bundleOf({
      index: ["vendor-react"],
      "vendor-react": ["vendor-webawesome"],
      "vendor-webawesome": ["vendor-react"],
    });
    const cycles = findChunkCycles(bundle);
    expect(cycles).toHaveLength(1);
    expect(cycles[0]).toEqual(["vendor-react", "vendor-webawesome", "vendor-react"]);
  });

  it("finds a longer cycle", () => {
    const cycles = findChunkCycles(bundleOf({ a: ["b"], b: ["c"], c: ["a"] }));
    expect(cycles).toHaveLength(1);
    expect(cycles[0]).toHaveLength(4);
    expect(cycles[0][0]).toBe(cycles[0][cycles[0].length - 1]);
  });

  it("reports each distinct cycle once", () => {
    const bundle = bundleOf({
      index: ["a", "x"],
      a: ["b"],
      b: ["a"],
      x: ["y"],
      y: ["x"],
    });
    expect(findChunkCycles(bundle)).toHaveLength(2);
  });

  it("ignores dynamic imports", () => {
    const bundle = bundleOf({ index: ["route"], route: [] }, { route: ["index"] });
    expect(findChunkCycles(bundle)).toEqual([]);
  });

  it("ignores ids that are not chunks", () => {
    const bundle = bundleOf({ index: [] });
    (bundle["index.js"] as { imports: string[] }).imports = ["react", "some-cdn-url"];
    bundle["style.css"] = { type: "asset" };
    expect(findChunkCycles(bundle)).toEqual([]);
  });

  it("handles a self-importing chunk", () => {
    expect(findChunkCycles(bundleOf({ a: ["a"] }))).toEqual([["a", "a"]]);
  });

  it("handles an empty bundle", () => {
    expect(findChunkCycles({})).toEqual([]);
  });
});

describe("circularChunkGuard", () => {
  it("passes an acyclic build through", () => {
    expect(() => runGuard(bundleOf({ index: ["vendor"], vendor: [] }))).not.toThrow();
  });

  it("fails the build and names the cycle", () => {
    const bundle = bundleOf({ a: ["b"], b: ["a"] });
    expect(() => runGuard(bundle)).toThrow(/a -> b -> a/);
    expect(() => runGuard(bundle)).toThrow(/Circular chunk import in the build output/);
  });

  it("pluralises when there is more than one cycle", () => {
    const bundle = bundleOf({ a: ["b"], b: ["a"], x: ["y"], y: ["x"] });
    expect(() => runGuard(bundle)).toThrow(/Circular chunk imports in the build output/);
  });

  it("warns instead of throwing under warnOnly", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    expect(() => runGuard(bundleOf({ a: ["b"], b: ["a"] }), true)).not.toThrow();
    expect(warn).toHaveBeenCalledOnce();
    expect(warn.mock.calls[0][0]).toMatch(/a -> b -> a/);
    warn.mockRestore();
  });

  it("is a build-only, post-enforced plugin", () => {
    const plugin = circularChunkGuard();
    expect(plugin.name).toBe("hotosm-circular-chunk-guard");
    expect(plugin.apply).toBe("build");
    expect(plugin.enforce).toBe("post");
  });
});

describe("WebAwesome chunk matcher", () => {
  it("matches WebAwesome modules, including pnpm's nested paths", () => {
    expect(matchWebawesome("/app/node_modules/@awesome.me/webawesome/dist/components/x.js")).toBe(
      "webawesome",
    );
    expect(
      matchWebawesome(
        "/app/node_modules/.pnpm/@awesome.me+webawesome@3.11.0/node_modules/@awesome.me/webawesome/dist/index.js",
      ),
    ).toBe("webawesome");
  });

  it("does not match what a substring rule would catch", () => {
    expect(matchWebawesome("/app/node_modules/@lit/react/index.js")).toBeUndefined();
    expect(
      matchWebawesome("/app/node_modules/@floating-ui/react-dom/dist/index.js"),
    ).toBeUndefined();
    expect(matchWebawesome("/app/node_modules/webawesome-lookalike/index.js")).toBeUndefined();
    expect(matchWebawesome("/app/src/main.tsx")).toBeUndefined();
  });

  it("exposes the same rule in Rolldown's group shape", () => {
    expect(WEBAWESOME_CHUNK.name).toBe("webawesome");
    expect(WEBAWESOME_CHUNK.test.test("/app/node_modules/@awesome.me/webawesome/dist/a.js")).toBe(
      true,
    );
  });
});
