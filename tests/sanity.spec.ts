// tests/sanity.spec.ts
/// <reference types="vitest" />

describe('vitest setup', () => {
  it('can manipulate the DOM', () => {
    document.body.innerHTML = `<div id="hello">Hi</div>`
    const el = document.getElementById('hello')
    expect(el).not.toBeNull()
    expect(el?.textContent).toBe('Hi')
  })
})
