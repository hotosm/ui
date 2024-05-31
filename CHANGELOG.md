# Changelog

## 0.2.0a10 (2024-05-31)

## 0.2.0a9 (2024-05-30)

## 0.2.0a8 (2024-05-30)

### Feat

- add a started Header component

### Fix

- storybook for Tracking component correct props
- do not import hot.css inside app templates

### Refactor

- update refs to cdn hot.css --> combined styles.css (shoelace)

## 0.2.0a7 (2024-05-30)

### Feat

- add index.ts files for importing all components at once
- add logo and icons to theme dir

### Fix

- update all examples with latest syntax

### Refactor

- rename HotElement --> Element for react

## 0.2.0a6 (2024-05-29)

### Fix

- do not run matomo tracking if domain does not match current host

## 0.2.0a5 (2024-05-29)

## 0.2.0a4 (2024-05-29)

### Fix

- fix react wrapper for demo toolbar

## 0.2.0a3 (2024-05-29)

### Feat

- add matomo tracking banner & standard button components

## 0.2.0a2 (2024-05-29)

## 0.2.0a1 (2024-05-28)

### Fix

- restructure components, fix storybook

## 0.2.0a0 (2024-05-27)

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
