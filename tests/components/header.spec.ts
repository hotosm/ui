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

  it('renders both full and short link text spans for responsive display', async () => {
    const el = document.createElement('hot-header') as Header;
    el.size = 'medium';
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    const full = sr.querySelector('.header--top-link-full');
    const short = sr.querySelector('.header--top-link-short');
    expect(full).not.toBeNull();
    expect(short).not.toBeNull();
    expect(full!.textContent).toContain('Humanitarian OpenStreetMap Team Website');
    expect(short!.textContent).toContain('HOT Website');
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

  // ── Centre-align tabs ──

  it('applies centre-align class to nav when tabsCenterAlign is true', async () => {
    const el = document.createElement('hot-header') as Header;
    el.tabsCenterAlign = true;
    el.tabs = [{ label: 'A' }, { label: 'B' }];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const nav = el.shadowRoot!.querySelector('.header--nav');
    expect(nav).not.toBeNull();
    expect(nav!.classList.contains('header--nav-center')).toBe(true);
  });

  it('does not apply centre-align class by default', async () => {
    const el = document.createElement('hot-header') as Header;
    el.tabs = [{ label: 'A' }, { label: 'B' }];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const nav = el.shadowRoot!.querySelector('.header--nav');
    expect(nav).not.toBeNull();
    expect(nav!.classList.contains('header--nav-center')).toBe(false);
  });

  // ── Auth slot ──

  it('renders an auth slot in the right section', async () => {
    const el = document.createElement('hot-header') as Header;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const slot = el.shadowRoot!.querySelector('slot[name="auth"]');
    expect(slot).not.toBeNull();
  });

  it('projects slotted auth content into the right section', async () => {
    const el = document.createElement('hot-header') as Header;
    const authEl = document.createElement('button');
    authEl.slot = 'auth';
    authEl.textContent = 'Login';
    el.appendChild(authEl);
    document.body.appendChild(el);
    await (el as any).updateComplete;

    // The slotted element should be assigned to the auth slot
    const slot = el.shadowRoot!.querySelector('slot[name="auth"]') as HTMLSlotElement;
    expect(slot).not.toBeNull();
    expect(slot.assignedElements()).toContain(authEl);
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

  it('does not render drawer when drawer is false and no tabs exist', async () => {
    const el = document.createElement('hot-header') as Header;
    el.drawer = false;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector('#drawer-overview')).toBeNull();
  });

  it('auto-renders drawer when drawer is false but tabs exist (for mobile nav)', async () => {
    const el = document.createElement('hot-header') as Header;
    el.drawer = false;
    el.tabs = [{ label: 'Map' }, { label: 'Docs' }];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    // Drawer markup should be present for mobile users
    expect(sr.querySelector('#drawer-overview')).not.toBeNull();
    // The hamburger button should have the mobile-only class
    const btn = sr.querySelector('.header--drawer-mobile-only');
    expect(btn).not.toBeNull();
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

  // ── Active tab URL sync ──

  it('exposes a public syncActiveTab method', async () => {
    const el = document.createElement('hot-header') as Header;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(typeof el.syncActiveTab).toBe('function');
  });

  it('syncs active tab based on current URL path', async () => {
    // Simulate being on /manage
    history.replaceState(null, '', '/manage');

    const el = document.createElement('hot-header') as Header;
    el.tabs = [
      { label: 'Explore', href: '/explore' },
      { label: 'Manage', href: '/manage' },
      { label: 'About', href: '/about' },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.activeTabIndex).toBe(1);

    // Clean up URL
    history.replaceState(null, '', '/');
  });
});
