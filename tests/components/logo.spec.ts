import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
// registers <hot-logo>
import '../../src/components/logo/logo'; 
import type { Logo } from '../../src/components/logo/logo.component';
describe('hot-logo', () => {
  let el: Logo;

  beforeEach(async () => {
    el = document.createElement('hot-logo') as Logo;
    document.body.appendChild(el);
    // Wait for the initial render
    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();
  });
// --- TESTS ---
  it('renders successfully', () => {
    expect(el).toBeInTheDocument();
  });

  it('renders both icon and text by default', () => {
    const images = el.shadowRoot?.querySelectorAll('img');
    
    // Default: iconOnly=false, textOnly=false -> Both images should exist
    expect(images?.length).toBe(2);
  });

  it('renders only the icon when iconOnly is true', async () => {
    el.iconOnly = true;
    await el.updateComplete;

    const images = el.shadowRoot?.querySelectorAll('img');
    expect(images?.length).toBe(1);
    
    // verify it is the icon (src check)
    const img = images?.[0];  
    expect(img?.getAttribute('src')).toBeTruthy();
  });

  it('renders only the text when textOnly is true', async () => {
    el.textOnly = true;  
    await el.updateComplete;  

    const images = el.shadowRoot?.querySelectorAll('img');
    expect(images?.length).toBe(1);
    expect(images?.[0].src).toContain('hot-logo-text');
  });
  
  it('renders nothing if both iconOnly and textOnly are true', async () => {
    el.iconOnly = true;
    el.textOnly = true;  
    await el.updateComplete;  
  
    const images = el.shadowRoot?.querySelectorAll('img');  
    expect(images?.length).toBe(0);  
  });  
});