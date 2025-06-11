import React from 'react';
import '../../components/logo/logo.ts';

const Logo = React.forwardRef((props, ref) => {
  return React.createElement('hot-logo', { ...props, ref });
});

Logo.displayName = 'Logo';

export default Logo; 