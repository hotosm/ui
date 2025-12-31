import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import '../../src/components/consent/consent';
import type { Consent } from '../../src/components/consent/consent.component';

describe('<hot-consent>', () => {
  let el: Consent;

  // --- HELPERS ---
  const getOverlay = (node: Consent) =>
    node.shadowRoot?.querySelector('.consent-overlay');

  const getAcceptButton = (node: Consent) =>
    node.shadowRoot?.querySelector('.accept-button') as HTMLElement | null;

  const getDeclineButton = (node: Consent) =>
    node.shadowRoot?.querySelector('.decline-button') as HTMLElement | null;

  beforeEach(async () => {
    localStorage.clear();          //Clear localStorage before every test.

    el = document.createElement('hot-consent') as Consent;
    document.body.appendChild(el);

    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();              //Clean up the DOM after each test to prevent state bleeding between tests. 
  });

// --- TESTS ---

  it('renders (open by default)', () => {
    expect(el).toBeInTheDocument();
    expect(el.shadowRoot).toBeTruthy();
    expect(getOverlay(el)).toBeTruthy();
    expect(el.isOpen).toBe(true);
  });

  it('does not render anything when isOpen = false', async () => {
    el.isOpen = false;
    await el.updateComplete;

    expect(getOverlay(el)).toBeNull();
  });

  it('clicking accept: closes, writes localStorage=true, and emits "agree"', async () => {
    const agreeSpy = vi.fn();
    el.addEventListener('agree', agreeSpy);

    const btn = getAcceptButton(el);
    expect(btn).toBeTruthy();

    btn!.click();
    await el.updateComplete;

    expect(agreeSpy).toHaveBeenCalledOnce();
    expect(el.isOpen).toBe(false);
    expect(getOverlay(el)).toBeNull();
    //Default key is "-consent-agree" because consentId is empty
    expect(localStorage.getItem('-consent-agree')).toBe('true'); // default consentId = ""
  });

  it('clicking decline: closes, writes localStorage=false, and emits "disagree"', async () => {
    const disagreeSpy = vi.fn();
    el.addEventListener('disagree', disagreeSpy);

    const btn = getDeclineButton(el);
    expect(btn).toBeTruthy();

    btn!.click();
    await el.updateComplete;

    expect(disagreeSpy).toHaveBeenCalledOnce();
    expect(el.isOpen).toBe(false);
    expect(getOverlay(el)).toBeNull();
    expect(localStorage.getItem('-consent-agree')).toBe('false'); // default consentId = ""
  });

  it('reads previous consent=true on connect and starts closed', async () => {
    //// Simulate returning user with prior consent=true
    localStorage.setItem('-consent-agree', 'true');

    const returning = document.createElement('hot-consent') as Consent;
    document.body.appendChild(returning);
    await returning.updateComplete;

    expect(returning.isOpen).toBe(false);
    expect(getOverlay(returning)).toBeNull();

    returning.remove();       
  });

  it('reads previous consent=false on connect and starts closed', async () => {
    localStorage.setItem('-consent-agree', 'false');         

    const returning = document.createElement('hot-consent') as Consent;
    document.body.appendChild(returning);      
    await returning.updateComplete;
           
    expect(returning.isOpen).toBe(false);           
    expect(getOverlay(returning)).toBeNull();           

    returning.remove();     
  }); 

  it('renders custom title and button labels', async () => {
    el.title = 'We value your privacy';
    el.agreeLabel = 'Totally Agree';
    el.notAgreeLabel = 'No way';
    await el.updateComplete;

    const header = el.shadowRoot?.querySelector('.consent-header');
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent('We value your privacy');

    expect(getAcceptButton(el)).toHaveTextContent('Totally Agree');
    expect(getDeclineButton(el)).toHaveTextContent('No way');
  });

  it('uses consentId as the localStorage key prefix', async () => {
    el.consentId = 'map-app';
    await el.updateComplete;

    const btn = getAcceptButton(el);
    expect(btn).toBeTruthy();

    btn!.click();
    await el.updateComplete;
    // Verify localStorage uses the custom consentId prefix
    expect(localStorage.getItem('map-app-consent-agree')).toBe('true');
  });
});
