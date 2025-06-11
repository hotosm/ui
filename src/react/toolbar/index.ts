import React from 'react';
import '../../components/toolbar/toolbar.ts';

const Toolbar = React.forwardRef((props, ref) => {
  return React.createElement('hot-toolbar', { ...props, ref });
});

Toolbar.displayName = 'Toolbar';

export default Toolbar; 