// HOT UI components
// import { setBasePath } from 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/webawesome.js';

import HotHeader from './components/header/header.component.js';
import HotLogo from './components/logo/logo.component.js';
import HotToolbar from './components/toolbar/toolbar.component.js';
import HotTracking from './components/tracking/tracking.component.js';
import HotConsent from './components/consent/consent.component.js';

declare global {
    interface HTMLElementTagNameMap {
        'hot-header': HotHeader;
        'hot-logo': HotLogo;
        'hot-toolbar': HotToolbar;
        'hot-tracking': HotTracking;
        'hot-consent': HotConsent;
    }
}

export {
    // HOT UI
    setBasePath,
    HotHeader as Header,
    HotLogo as Logo,
    HotToolbar as Toolbar,
    HotConsent as Consent,
    HotTracking as Tracking,
}


