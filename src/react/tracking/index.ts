import React from 'react';
import '../../components/tracking/tracking.ts';

const Tracking = React.forwardRef((props, ref) => {
  return React.createElement('hot-tracking', { ...props, ref });
});

Tracking.displayName = 'Tracking';

export default Tracking; 