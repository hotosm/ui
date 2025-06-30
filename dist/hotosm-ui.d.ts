import HotHeader from './components/header/header.component.js';
import HotLogo from './components/logo/logo.component.js';
import HotTracking from './components/tracking/tracking.component.js';
import HotConsent from './components/consent/consent.component.js';
declare global {
    interface HTMLElementTagNameMap {
        'hot-header': HotHeader;
        'hot-logo': HotLogo;
        'hot-tracking': HotTracking;
        'hot-consent': HotConsent;
    }
}
export { HotHeader as Header, HotLogo as Logo, HotConsent as Consent, HotTracking as Tracking, };
