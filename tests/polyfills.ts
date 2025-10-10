// ----- Robust ElementInternals polyfill for jsdom -----
declare global {
  // minimal typing so TS is happy
  interface ElementInternals {}
}

const makeInternals = () => {
  const states = new Set<string>();
  return {
    setValidity: (_? : any, __?: any, ___?: any) => {},
    setFormValue: (_?: any, __?: any) => {},
    reportValidity: () => true,
    checkValidity: () => true,
    // mimic the "states" tokenlist-ish API that some libs poke
    states: {
      add: (s: string) => { states.add(s); },
      delete: (s: string) => { states.delete(s); },
      has: (s: string) => states.has(s),
      clear: () => { states.clear(); },
      // iterable shape not required for our tests
    }
  } as any;
};

if (!(globalThis as any).ElementInternals) {
  (globalThis as any).ElementInternals = function ElementInternals() {} as any;
}

// Always provide attachInternals
(HTMLElement.prototype as any).attachInternals = function () {
  // cache per element
  if (!(this as any).__internals__) {
    (this as any).__internals__ = makeInternals();
  }
  return (this as any).__internals__;
};

// Some libs read/write `this.internals` directly.
// Provide a getter/setter that falls back to our stub.
if (!Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'internals')) {
  Object.defineProperty(HTMLElement.prototype, 'internals', {
    get() {
      return (this as any).__internals__ ?? ((this as any).__internals__ = makeInternals());
    },
    set(v) {
      (this as any).__internals__ = v ?? makeInternals();
    },
    configurable: true,
  });
}
// ----- end polyfill -----