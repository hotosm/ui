/// <reference types="vitest" />

import { describe, it, expect, afterEach, vi } from 'vitest';

import '../../src/components/header/header.ts';
import { Header } from '../../src/components/header/header.component.ts';

describe('<hot-header>', () => {
    
  // Clean up the DOM after each test to prevent state bleeding between tests
  afterEach(() => {
    document.body.innerHTML = '';
  });

//Verifies that the component is correctly registered with the browser.
  it('is registered as a custom element with the correct constructor', () => {
    const ctor = customElements.get('hot-header');
    expect(ctor).toBe(Header);
  });

  //Verifies basic DOM attachment and Shadow DOM creation.
  it('can be created and attached to the DOM', async () => {
    const el = document.createElement('hot-header') as Header;
    el.title = 'Test title';

    document.body.appendChild(el);
    await (el as any).updateComplete; // wait for Lit to render

    expect(el.isConnected).toBe(true);
    expect(el.shadowRoot).not.toBeNull();
  });

//Verifies that clicking the login button emits the expected event and opens the internal modal.
  it('emits a "login" event and opens the login dialog when the login button is clicked', async () => {
    const el = document.createElement('hot-header') as Header;

    // Ensure login button / dialog are rendered
    el.showLogin = true;

    document.body.appendChild(el);
    await (el as any).updateComplete;

    const handler = vi.fn();
    el.addEventListener('login', handler);

    const sr = el.shadowRoot!;
    const loginButton = sr.querySelector('wa-button.login-button') as HTMLElement;
    expect(loginButton).not.toBeNull();

    // Click the login button
    loginButton.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );

    await (el as any).updateComplete;

    //  event should fire
    expect(handler).toHaveBeenCalledTimes(1);

    // dialog should be open 
    const dialog = sr.querySelector(
      'wa-dialog.login-modal'
    ) as HTMLElement & { open?: boolean };

    expect(dialog).not.toBeNull();

    const isOpen =
      (dialog && dialog.open === true) || dialog.hasAttribute('open');
    expect(isOpen).toBe(true);
  });

//Verifies that complex data (arrays) passed to properties renders correctly
   it('renders navigation tabs based on the tabs prop', async () => {
  const el = document.createElement('hot-header') as Header;
  
  // pass array data
  el.tabs = [
    { label: 'Map', clickEvent: () => {} },
    { label: 'Docs', clickEvent: () => {} }
  ];

  document.body.appendChild(el);
  await (el as any).updateComplete;

  // Find the tab group wrapper
  const tabGroup = el.shadowRoot?.querySelector('wa-tab-group');
  expect(tabGroup).not.toBeNull();

  const tabs = tabGroup?.querySelectorAll('wa-tab');
  expect(tabs?.length).toBe(2);

  // Check text content
  const labels = Array.from(tabs!).map(t => t.textContent?.trim());
  expect(labels).toEqual(['Map', 'Docs']);
});

// Verifies that elements are strictly removed from the DOM when disabled
it('does not render login button or dialog when showLogin is false', async () => {
  const el = document.createElement('hot-header') as Header;
  
  //  Explicitly disable login
  el.showLogin = false; 
  
  el.title = "No Login";

  document.body.appendChild(el);
  await (el as any).updateComplete; // Ensures the element renders before querying the shadow DOM.

  const sr = el.shadowRoot!;
  
// Try to find the elements
  const loginButton = sr.querySelector('.login-button');
  const loginDialog = sr.querySelector('.login-modal');

  expect(loginButton).toBeNull();
  expect(loginDialog).toBeNull();
});
});
