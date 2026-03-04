import { describe, it, expect, afterEach, vi } from 'vitest';

import '../../src/components/header/header.ts';
import { Header } from '../../src/components/header/header.component.ts';

describe('<hot-header>', () => {
    
  // Clean up the DOM after each test to prevent state bleeding between tests
  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── Registration & basic rendering ──

  it('is registered as a custom element with the correct constructor', () => {
    const ctor = customElements.get('hot-header');
    expect(ctor).toBe(Header);
  });

  it('can be created and attached to the DOM', async () => {
    const el = document.createElement('hot-header') as Header;
    el.title = 'Test title';

    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.isConnected).toBe(true);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('wraps the header in a header-container div', async () => {
    const el = document.createElement('hot-header') as Header;
    el.title = 'Wrapper test';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const container = el.shadowRoot!.querySelector('.header-container');
    expect(container).not.toBeNull();
    expect(container!.querySelector('header')).not.toBeNull();
  });

  // ── Size variants ──

  it('applies the correct size class for each variant', async () => {
    for (const size of ['small', 'medium', 'large'] as const) {
      const el = document.createElement('hot-header') as Header;
      el.size = size;
      el.title = 'Size test';
      document.body.appendChild(el);
      await (el as any).updateComplete;

      const header = el.shadowRoot!.querySelector('header');
      expect(header).not.toBeNull();
      expect(header!.classList.contains(`header--size-${size}`)).toBe(true);

      el.remove();
    }
  });

  // ── Top bar ──

  it('renders the top bar for medium and large sizes but not small', async () => {
    const elSmall = document.createElement('hot-header') as Header;
    elSmall.size = 'small';
    document.body.appendChild(elSmall);
    await (elSmall as any).updateComplete;
    expect(elSmall.shadowRoot!.querySelector('.header--top')).toBeNull();
    elSmall.remove();

    const elMedium = document.createElement('hot-header') as Header;
    elMedium.size = 'medium';
    document.body.appendChild(elMedium);
    await (elMedium as any).updateComplete;
    expect(elMedium.shadowRoot!.querySelector('.header--top')).not.toBeNull();
    elMedium.remove();

    const elLarge = document.createElement('hot-header') as Header;
    elLarge.size = 'large';
    document.body.appendChild(elLarge);
    await (elLarge as any).updateComplete;
    expect(elLarge.shadowRoot!.querySelector('.header--top')).not.toBeNull();
    elLarge.remove();
  });

  it('renders tagline and link in the top bar', async () => {
    const el = document.createElement('hot-header') as Header;
    el.size = 'medium';
    el.topTagline = 'My Tagline';
    el.topLinkLabel = 'Go to site';
    el.topLinkHref = 'https://example.com';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    const tagline = sr.querySelector('.header--top-tagline');
    expect(tagline).not.toBeNull();
    expect(tagline!.textContent!.trim()).toBe('My Tagline');

    const link = sr.querySelector('.header--top-link') as HTMLAnchorElement;
    expect(link).not.toBeNull();
    expect(link.href).toBe('https://example.com/');

    // External icon SVG should be present inside the link
    const icon = link.querySelector('.header--external-icon');
    expect(icon).not.toBeNull();
  });

  it('uses correct default tagline and link text', async () => {
    const el = document.createElement('hot-header') as Header;
    el.size = 'medium';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    expect(sr.querySelector('.header--top-tagline')!.textContent!.trim()).toBe('Mapping our world together');
    expect(sr.querySelector('.header--top-link')!.textContent!.trim()).toContain('Humanitarian OpenStreetMap Team Website');
  });

  // ── Title ──

  it('renders the title when provided', async () => {
    const el = document.createElement('hot-header') as Header;
    el.title = 'My App';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const title = el.shadowRoot!.querySelector('.header--title');
    expect(title).not.toBeNull();
    expect(title!.textContent!.trim()).toBe('My App');
  });

  it('does not render the title when empty', async () => {
    const el = document.createElement('hot-header') as Header;
    el.title = '';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector('.header--title')).toBeNull();
  });

  // ── Border bottom ──

  it('applies border-bottom class when borderBottom is true', async () => {
    const el = document.createElement('hot-header') as Header;
    el.borderBottom = true;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector('header')!.classList.contains('border-bottom')).toBe(true);
  });

  it('does not apply border-bottom class when borderBottom is false', async () => {
    const el = document.createElement('hot-header') as Header;
    el.borderBottom = false;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector('header')!.classList.contains('border-bottom')).toBe(false);
  });

  // ── Login button (logged-out state) ──

  it('emits a "login" event and opens the dialog when the login button is clicked', async () => {
    const el = document.createElement('hot-header') as Header;
    el.showLogin = true;
    el.loggedIn = false;

    document.body.appendChild(el);
    await (el as any).updateComplete;

    const handler = vi.fn();
    el.addEventListener('login', handler);

    const loginButton = el.shadowRoot!.querySelector('wa-button.login-button') as HTMLElement;
    expect(loginButton).not.toBeNull();

    loginButton.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await (el as any).updateComplete;

    expect(handler).toHaveBeenCalledTimes(1);

    const dialog = el.shadowRoot!.querySelector('wa-dialog.login-modal') as HTMLElement & { open?: boolean };
    expect(dialog).not.toBeNull();
    const isOpen = dialog.open === true || dialog.hasAttribute('open');
    expect(isOpen).toBe(true);
  });

  it('does not render login button or dialog when showLogin is false', async () => {
    const el = document.createElement('hot-header') as Header;
    el.showLogin = false;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    expect(sr.querySelector('.login-button')).toBeNull();
    expect(sr.querySelector('.login-modal')).toBeNull();
  });

  // ── Logged-in avatar & dropdown ──

  it('shows text-initial avatar instead of login button when loggedIn is true', async () => {
    const el = document.createElement('hot-header') as Header;
    el.showLogin = true;
    el.loggedIn = true;
    el.userName = 'Jane Doe';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;

    // Login button should NOT be present
    expect(sr.querySelector('.login-button')).toBeNull();

    // Avatar trigger should be present
    const trigger = sr.querySelector('.header--avatar-trigger');
    expect(trigger).not.toBeNull();

    // Text initial should show the first letter of the user's name
    const initial = sr.querySelector('.header--avatar-initial');
    expect(initial).not.toBeNull();
    expect(initial!.textContent).toBe('J');
  });

  it('shows fallback "U" initial when loggedIn but no userName', async () => {
    const el = document.createElement('hot-header') as Header;
    el.showLogin = true;
    el.loggedIn = true;
    el.userName = '';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    const initial = sr.querySelector('.header--avatar-initial');
    expect(initial).not.toBeNull();
    expect(initial!.textContent).toBe('U');
  });

  it('renders a dropdown with a Logout item when logged in', async () => {
    const el = document.createElement('hot-header') as Header;
    el.showLogin = true;
    el.loggedIn = true;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const dropdown = el.shadowRoot!.querySelector('.header--user-dropdown');
    expect(dropdown).not.toBeNull();

    const logoutItem = el.shadowRoot!.querySelector('wa-dropdown-item[value="logout"]');
    expect(logoutItem).not.toBeNull();
    expect(logoutItem!.textContent).toContain('Logout');
  });

  it('emits a "logout" event when Logout is selected from the dropdown', async () => {
    const el = document.createElement('hot-header') as Header;
    el.showLogin = true;
    el.loggedIn = true;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const handler = vi.fn();
    el.addEventListener('logout', handler);

    // Simulate wa-select on the dropdown
    const dropdown = el.shadowRoot!.querySelector('.header--user-dropdown') as HTMLElement;
    expect(dropdown).not.toBeNull();

    dropdown.dispatchEvent(new CustomEvent('wa-select', {
      detail: { item: { value: 'logout' } },
      bubbles: true,
      composed: true
    }));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  // ── Navigation tabs ──

  it('renders navigation tabs based on the tabs prop', async () => {
    const el = document.createElement('hot-header') as Header;
    el.tabs = [
      { label: 'Map', clickEvent: () => {} },
      { label: 'Docs', clickEvent: () => {} }
    ];

    document.body.appendChild(el);
    await (el as any).updateComplete;

    const tabGroup = el.shadowRoot?.querySelector('wa-tab-group');
    expect(tabGroup).not.toBeNull();

    const tabs = tabGroup?.querySelectorAll('wa-tab');
    expect(tabs?.length).toBe(2);

    const labels = Array.from(tabs!).map(t => t.textContent?.trim());
    expect(labels).toEqual(['Map', 'Docs']);
  });

  it('renders nav scroll arrows when tabs are provided', async () => {
    const el = document.createElement('hot-header') as Header;
    el.tabs = [
      { label: 'A', clickEvent: () => {} },
      { label: 'B', clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    expect(sr.querySelector('.header--nav-arrow-left')).not.toBeNull();
    expect(sr.querySelector('.header--nav-arrow-right')).not.toBeNull();
  });

  it('emits tab-change event with detail when a tab is selected', async () => {
    const el = document.createElement('hot-header') as Header;
    el.tabs = [
      { label: 'Tab A', clickEvent: () => {} },
      { label: 'Tab B', clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const handler = vi.fn();
    el.addEventListener('tab-change', handler);

    el.selectTab(1);
    await (el as any).updateComplete;

    expect(handler).toHaveBeenCalledTimes(1);
    const detail = handler.mock.calls[0][0].detail;
    expect(detail.selectedIndex).toBe(1);
    expect(detail.previousIndex).toBe(0);
    expect(detail.tab.label).toBe('Tab B');
  });

  it('syncs activeTabIndex when selectedTab changes', async () => {
    const el = document.createElement('hot-header') as Header;
    el.tabs = [
      { label: 'One', clickEvent: () => {} },
      { label: 'Two', clickEvent: () => {} },
      { label: 'Three', clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    el.selectedTab = 2;
    await (el as any).updateComplete;

    expect(el.activeTabIndex).toBe(2);
  });

  // ── Drawer ──

  it('renders drawer button when drawer prop is true', async () => {
    const el = document.createElement('hot-header') as Header;
    el.drawer = true;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    expect(sr.querySelector('#drawer-overview')).not.toBeNull();
    expect(sr.querySelector('wa-button[appearance="outlined"]')).not.toBeNull();
  });

  it('does not render drawer when drawer prop is false', async () => {
    const el = document.createElement('hot-header') as Header;
    el.drawer = false;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector('#drawer-overview')).toBeNull();
  });

  it('includes tab labels in the drawer nav when tabs and drawer are both set', async () => {
    const el = document.createElement('hot-header') as Header;
    el.drawer = true;
    el.tabs = [
      { label: 'Home', clickEvent: () => {} },
      { label: 'About', clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const drawerNavButtons = el.shadowRoot!.querySelectorAll('.drawer-nav-button');
    expect(drawerNavButtons.length).toBe(2);

    const labels = Array.from(drawerNavButtons).map(b => b.textContent?.trim());
    expect(labels).toEqual(['Home', 'About']);
  });

  it('renders drawer links', async () => {
    const el = document.createElement('hot-header') as Header;
    el.drawer = true;
    el.drawerLinks = [
      { label: 'Support', href: '/support' },
      { label: 'Docs', href: '/docs' },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const links = el.shadowRoot!.querySelectorAll('.drawer-link');
    expect(links.length).toBe(2);
    expect((links[0] as HTMLAnchorElement).textContent?.trim()).toBe('Support');
    expect((links[1] as HTMLAnchorElement).getAttribute('href')).toBe('/docs');
  });
});
