/// <reference types="vitest" />
import { describe, it, expect, afterEach } from "vitest";
import "../dist/style.css";

// Brand must be mapped in @layer wa-color-variant; an earlier layer silently
// loses to WA's own default and turns every variant="brand" control blue.

const HOT_RED = "#d43f3f";
const WA_BLUE = "#344f7b";

afterEach(() => {
  document.documentElement.className = "";
});

function fill(variant: string, classes = ""): string {
  document.documentElement.className = classes;
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--wa-color-${variant}-fill-loud`)
    .trim();
}

describe("semantic variants", () => {
  it("gives brand the HOT red with only the palette class", () => {
    expect(fill("brand", "wa-theme-default wa-palette-hotosm")).toBe(HOT_RED);
  });

  it("gives brand the HOT red even when an app forgets the classes", () => {
    expect(fill("brand")).toBe(HOT_RED);
  });

  it("still lets an app choose another hue with WA's own class", () => {
    expect(fill("brand", "wa-theme-default wa-palette-hotosm wa-brand-blue")).toBe(WA_BLUE);
  });

  it.each([
    ["danger", "#d43f3f"],
    ["warning", "#fed82e"],
    ["neutral", "#c4c3c5"],
  ])("leaves %s on the HOT palette", (variant, expected) => {
    expect(fill(variant, "wa-theme-default wa-palette-hotosm")).toBe(expected);
  });

  it("leaves success on WA's green unless an app opts in to the HOT teal", () => {
    const base = "wa-theme-default wa-palette-hotosm";
    expect(fill("success", base)).toBe("#00883c");
    expect(fill("success", `${base} wa-success-cyan`)).toBe("#50c1cb");
  });
});
