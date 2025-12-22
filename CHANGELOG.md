# Changelog

## 0.4.0 (2025-12-22)

## 0.3.4-b3 (2025-10-29)

### Fix

- bump --> 0.3.4b3 after moved webawesome --> peerDeps, bump to WA v3

## 0.3.4b2 (2025-08-14)

### Feat

- package upgrade
- hanko URL as dev.login
- header full documentation

### Fix

- lint
- precommit lint

## 0.3.4b1 (2025-08-08)

## 0.3.4b0 (2025-08-08)

### Feat

- package version upgrade

### Fix

- docs.yml build for version upgrade
- docs.yml build for version upgrade
- update docs.yml
- updated node js version in cdn_deploy

## 0.3.3b9 (2025-08-08)

### Feat

- update node version in build yml

### Fix

- upgrade version

## 0.3.3b8 (2025-07-31)

### Feat

- dist added

## 0.3.3b7 (2025-07-31)

### Feat

- package upgrade
- tab integration for active & other

## 0.3.3b6 (2025-07-31)

### Feat

- changed hanko register URL

### Refactor

- remove react components from build script

## 0.3.3b5 (2025-07-30)

## 0.3.3b4 (2025-07-28)

### Feat

- package upgrade

### Fix

- version upgrade on webawesome and commented default.

## 0.3.3b3 (2025-07-28)

### Fix

- overriding css

## 0.3.3b2 (2025-07-28)

### Feat

- update version
- css parts integration
- merge fix
- upgrade storybook, tweak stories

### Refactor

- remove references to hot-button

## 0.3.3b1 (2025-07-24)

## 0.3.3b0 (2025-07-24)

## 0.3.2b9 (2025-07-21)

## 0.3.2b8 (2025-07-21)

## 0.3.2b7 (2025-07-18)

## 0.3.2b5 (2025-07-15)

### Feat

- fixing override for webcomponent
- add style override
- shadow dom testing
- version upgrade
- package version updated
- drawer and tab integration
- version change
- package upgrade

### Fix

- version upgraed
- icon removal
- hardcode color
- css implementation with package

## 0.3.2b4 (2025-07-12)

### Feat

- start adding hanko-auth to login popup
- add hanko auth component to login modal

## 0.3.2b3 (2025-07-10)

### Feat

- package.json version updated
- add custom button component to integrate in header with button story addition

## 0.3.2b2 (2025-07-09)

### Fix

- styling fix

## 0.3.2b1 (2025-07-09)

## 0.3.1b9 (2025-07-09)

### Feat

- fix styling for header button

### Fix

- add custom declaration for component types in React >19

## 0.3.1b8 (2025-07-08)

### Feat

- add css for neutral variable and build new
- dist build added for new update

### Fix

- add classes to root html tag for storybook webawesome

## 0.3.1b6 (2025-07-03)

### Fix

- update css to match new webawesome override conventions

## 0.3.1b5 (2025-07-03)

### Fix

- error on header if no tabs are set
- update exports and fix storybook component loading
- remove custom registration logic (not working)
- move customElement registration to main component import (allow header.component.js for no reg)

## 0.3.1b4 (2025-07-02)

### Fix

- replace deprecated wa-icon-button

## 0.3.1b3 (2025-07-02)

### Fix

- avoid double web component registration with check first

## 0.3.1b2 (2025-07-02)

### Fix

- replace webawesome cdn imports with es6 imports

## 0.3.1b1 (2025-06-30)

### Feat

- upgrade package version
- bundled package added
- osm oauth html to host and check webcomponent integration
- build script updated to single build command instead of multiple cross platform
- fix build script for single script and cross platform support for cp

## 0.3.0b9 (2025-06-30)

### Feat

- updated version
- add updated dist

### Fix

- deleted dist file for new dist

## 0.3.0b8 (2025-06-30)

### Feat

- package upgrade in package.json
- updated dist and changes to exclude shoelace in built file

### Fix

- update package.json version package

## 0.3.0b7 (2025-06-28)

### Fix

- pnpm lock file
- build fix

## 0.3.0b6 (2025-06-28)

### Fix

- build change to npm having issue with pnpm
- build issue
- build styles
- build fix

## 0.3.0b5 (2025-06-28)

### Feat

- updated version for package

## 0.3.0b4 (2025-06-28)

### Feat

- updated release tag

### Fix

- build issue

## 0.3.0b3 (2025-06-26)

### Feat

- remove import for toolbar
- remove toolbar and fix consent for webawesome
- tracking component changes
- consent component updated to webawesome
- toolbary style changes
- toolbar component migrated to webawesome
- build number changed

## 0.3.0b2 (2025-06-11)

### Fix

- build changes

## 0.3.0b1 (2025-06-11)

### Fix

- import issue on build

## 0.2.0b9 (2025-06-11)

### Fix

- build

## 0.2.0b8 (2025-06-11)

### Fix

- build fix

## 0.2.0b7 (2025-06-10)

### Fix

- build deployment issue excluding react folder and add js png support for entrypoints

## 0.2.0b6 (2025-06-10)

### Feat

- added provider implementation for multiple oauth
- remove popup blocker and used only redirect
- style added for modal and header
- style added for modal and header
- add osm oauth implementation onto header component with props
- add osm oauth implementation onto header component with props
- osm-logo added on oauth modal
- added png,jpg support for file import
- add header-login oauth story
- removing react dependency from package.json
- removing react wrapper of existing component
- implementation on header for webawesome
- remove shoelace type and interface
- removed shoelace import and type reference and used only hotosm component
- react update for dependency issue

### Fix

- oauth parameter renamed to osm oauth
- revert back the import
- storybook dependency removal
- icon with webawesome component
- add type declaration for svg imports
- fixed typo in styles css CDN

## 0.2.0b5 (2024-09-23)

### Feat

- **exports**: export .d.ts files on build
- **docs-astro**: copy about page from docs -> new docs
- **docs/quick-start**: add react version info
- init docs astro

### Fix

- add setBasePath util function to allow changing icon import path
- **cva**: move to deps from devdeps

## 0.2.0b4 (2024-06-06)

### Feat

- export all shoelace components using hot- prefix
- add login event to header component
- update header component to use unocss classes
- add custom theme for shoelace colour override
- temp add config for using @ alias in components
- update stories + header story
- add simple header component with nav bar items

### Fix

- import ts modules for storybook hot-reload
- bundle missing shoelace icons with storybook

### Refactor

- remove demo button component, use sl-button directly
- update refs styles.css --> style.css
- replace custom button with standard shoelace button
- remove config for using @ alias as breaking upstream es module use

## 0.2.0b3 (2024-06-02)

### Refactor

- update logs and css for matomo tracking component

## 0.2.0b2 (2024-05-31)

### Fix

- minor fixes to matomo tracking component, add 'force' var

### Refactor

- rename all react events onHotXx --> onXx

## 0.2.0b1 (2024-05-31)

### Fix

- move bundled icons to components dir and update refs

## 0.2.0b0 (2024-05-31) Beta

### Feat

- add a started Header component
- add index.ts files for importing all components at once
- add logo and icons to theme dir
- add matomo tracking banner & standard button components

### Fix

- remove setbasepath in favour of bundles icons
- storybook for Tracking component correct props
- do not import hot.css inside app templates
- update all examples with latest syntax
- do not run matomo tracking if domain does not match current host
- restructure components, fix storybook

### Refactor

- remove bundled icons from storybook config
- update refs to cdn hot.css --> combined styles.css (shoelace)
- rename HotElement --> Element for react

## 0.2.0a0 (2024-05-27) Alpha

### Feat

- extend composite components from shoelace web components
- move react wrappers to own package
- pull out common props to hot-element parent class
- add examples for svelte and vue
- add click event to hot-button element
- **docs/button**: add intent property to component props
- add unocss, button story args
- update json2md to work with Props subheading
- add HOT themed css vars
- **button,package**: add class-variance-authority lib, convert button component to use it
- **button**: add disabled prop, styling
- **stories**: add controls and type exports for card
- **stories/Button**: add children argType - initial control branch commit
- use react-docgen and json2md script for components docs
- init logo
- Popup
- dropdown
- toggle, toggle story
- **components**: init card
- **components**: button

### Fix

- add pnpm build to example app dev commands
- **define**: fix defining the custom component
- update consistent css for button primary/secondary
- button clicking stop propagation of original event
- dummy content for xliff i18n file
- create language specific i18n file
- add empty translations file for weblate
- **ci**: add style vars
- ui build
- add dist files
- **ci**: publishing
- **ci**: publishing
- **ui**: build
- **docs/button**: intent pipe escaping in table
- **tsconfig,components/Dropdown**: make build pass
- **ladle/styles**: add relative position to container

### Refactor

- update all refs to src --> components
- rename src dir to components
- remove old components
- remove code no longer required
- rename repo shared-ui-components --> ui
- update to use @ alias for src
- add path aliases for src & ladle
- update to js modules
- update package.json with latest info
