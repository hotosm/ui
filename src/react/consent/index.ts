import React from 'react';
import '../../components/consent/consent.ts';

const Consent = React.forwardRef((props, ref) => {
  return React.createElement('hot-consent', { ...props, ref });
});

Consent.displayName = 'Consent';

export default Consent; 