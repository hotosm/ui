/// <reference types="vitest" />
import { describe, it, expect } from 'vitest'
import { within } from '@testing-library/dom'


import '../../src/components/header/header.ts'


describe('<hot-header>', () => {
  it('is registered as a custom element', () => {
    const ctor = customElements.get('hot-header')
    expect(ctor).toBeTruthy()
  })

  it('applies size="small" by adding the correct class on <header>', async () => {
    const el = document.createElement('hot-header') as HTMLElement & { shadowRoot: ShadowRoot, updateComplete?: Promise<unknown> }
    el.setAttribute('size', 'small')
    document.body.appendChild(el)

    // Lit renders asynchronously
    if (el.updateComplete) await el.updateComplete

    const sr = el.shadowRoot!
    // @testing-library types want an HTMLElement; cast is fine for ShadowRoot
    const q = within(sr as unknown as HTMLElement)

    // The CSS uses class-variance-authority with a `header` element and
    // a variant class like "header--size-small".
    const headerEl = sr.querySelector('header') as HTMLElement | null
    expect(headerEl).toBeTruthy()
    expect(headerEl!.className).toMatch(/\bheader--size-small\b/)
  })

  it('selectTab updates selectedTab and ignores invalid/same index', async () => {
    // Create the element and set up minimal state
    const el = document.createElement('hot-header') as HTMLElement & {
      shadowRoot: ShadowRoot
      updateComplete?: Promise<unknown>
      tabs?: unknown[]
      selectedTab?: number
      selectTab: (i: number) => void
    }
    document.body.appendChild(el)
    if (el.updateComplete) await el.updateComplete

    // Provide tabs so selectTab has bounds to check
    el.tabs = ['Overview', 'Data', 'Settings']
    el.selectedTab = 0

    // valid change
    el.selectTab(1)
    expect(el.selectedTab).toBe(1)

    // same index → ignored
    el.selectTab(1)
    expect(el.selectedTab).toBe(1)

    // out-of-range → ignored
    el.selectTab(-1)
    expect(el.selectedTab).toBe(1)
    el.selectTab(99)
    expect(el.selectedTab).toBe(1)
  })

it('dispatches "tab-change" with the right detail', () => {
  const el = document.createElement('hot-header') as any;
  document.body.appendChild(el);
  el.tabs = [
    { label: 'Overview', clickEvent: () => {} },
    { label: 'Data', clickEvent: () => {} }
  ];
  el.selectedTab = 0;

  const spy = vi.fn();
  el.addEventListener('tab-change', (e: any) => spy(e.detail));

  el.selectTab(1);

  expect(spy).toHaveBeenCalledWith(
    expect.objectContaining({
      selectedIndex: 1,
      previousIndex: 0,
      tab: expect.objectContaining({ label: 'Data' })
    })
  );
  expect(el.activeTabIndex).toBe(1);
});

it('opens the login dialog and emits "login" on click', async () => {
  document.body.innerHTML = `<hot-header title="Test" showLogin="true"></hot-header>`;
  const el = document.querySelector('hot-header') as any;
  if (el.updateComplete) await el.updateComplete;

  // listen for the public event
  const fired = vi.fn();
  el.addEventListener('login', fired);

  // trigger the same code path as a click on the login button
  el._handleLogin();                 // call the component method directly
  if (el.updateComplete) await el.updateComplete;

  // event fired
  expect(fired).toHaveBeenCalled();

  // dialog should now be open (property OR attribute depending on binding/stub)
  const sr = el.shadowRoot!;
  const dialog = sr.querySelector('wa-dialog.login-modal') as HTMLElement & { open?: boolean };
  const isOpen = (dialog?.open === true) || dialog?.hasAttribute('open');
  expect(isOpen).toBe(true);
});





})
