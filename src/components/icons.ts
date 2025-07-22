//
// Bundled icons hardcoded into hotosm/ui.
// They are a subset of used Bootstrap icons
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

function registerBundledIcons() {
  const tryRegister = () => {
    if (window.WebAwesome && window.WebAwesome.iconRegistry) {
      window.WebAwesome.iconRegistry.addIcon('hot-icons', 'list', hamburgerIcon);
    } else {
      setTimeout(tryRegister, 100);
    }
  };
  tryRegister();
}

export default registerBundledIcons;
