# HOT Shared UI Components

Shared UI components with theming for use across HOTOSM tools,
to reduce code duplication.

The components are currently written in **React**, using TypeScript.

## Install

Via NPM:

```bash
npm install @hotosm/ui

yarn install @hotosm/ui

pnpm install @hotosm/ui
```

## Usage

```js
import Button from '@hotosm/ui';

const HomePage = ({}) => {
  return (
    <div className="your-css-classes">
      <div
        ...
      >
        <Button />
      </div>
    </div>
  );
};

export default HomePage;
```
