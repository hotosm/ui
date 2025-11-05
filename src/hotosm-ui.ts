import HotHeader from './components/header/header.js';
import HotLogo from './components/logo/logo.js';
import HotTracking from './components/tracking/tracking.js';
import HotConsent from './components/consent/consent.js';
import HotFileInputDropzone from './components/file-input-dropzone/file-input-dropzone.js';

// Export CSS injection utilities
export { 
    setupAutoInjection, 
    injectHOTThemeIntoButtons, 
    injectHOTThemeIntoAllComponents,
    injectCSSIntoShadowDOM 
} from './utils/shadow-dom-css.js';

export {
    HotHeader as Header,
    HotLogo as Logo,
    HotConsent as Consent,
    HotTracking as Tracking,
    HotFileInputDropzone as FileInputDropzone,
}
