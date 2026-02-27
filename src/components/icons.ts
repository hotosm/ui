//
// Bundled icons hardcoded into hotosm/ui.
// Placeholder for registering custom icons with WebAwesome's icon registry.
//
// Usage: import and call registerBundledIcons() once custom icons are needed.
// Example:
//   window.WebAwesome.iconRegistry.addIcon('hot-icons', 'my-icon', svgString);
//

declare global {
  interface Window {
    WebAwesome?: {
      iconRegistry?: {
        addIcon: (library: string, name: string, svg: string) => void;
      };
    };
  }
}

// No-op until custom icons are added to the registry
function registerBundledIcons() {
  // Reserved for future custom icon registration
  // const tryRegister = () => {
  //   if (window.WebAwesome && window.WebAwesome.iconRegistry) {
  //   //   window.WebAwesome.iconRegistry.addIcon('hot-icons', 'list', hamburgerIcon);
  //   } else {
  //     setTimeout(tryRegister, 100);
  //   }
  // };
  // tryRegister();
}

export default registerBundledIcons;
