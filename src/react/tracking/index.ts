import React from 'react';
import '../../components/tracking/tracking.ts';

interface TrackingProps {
  siteId?: string;
  domain?: string;
  matomoURL?: string;
  showConsent?: boolean;
  consentMessage?: string;
}

const Tracking = React.forwardRef<HTMLElement, TrackingProps>((props, ref) => {
  return React.createElement('hot-tracking', { ...props, ref });
});

Tracking.displayName = 'Tracking';

export default Tracking; 