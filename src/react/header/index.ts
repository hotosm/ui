import React from 'react';
import '../../components/header/header.ts';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  return React.createElement('hot-header', { ...props, ref });
});

Header.displayName = 'Header';

export default Header; 