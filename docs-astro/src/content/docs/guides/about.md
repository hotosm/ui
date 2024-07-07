---
title: About
---


# About hotosm/ui

HOT maintains many web based tools that require a UI.

Typically these interfaces were developed using React, due to existing
experience and to avoid fragmentation.

Going forward HOT requires a more flexible approach that can be used in
multiple different frameworks (including directly in HTML & also HTMX).

The solution to this is Web Components, which are framework agnostic.

## Web Components

- We can probably all agree that as of 2024, the state of the JS framework
  ecosystem is quite messy: it's just too fragmented to make an informed
  "future proof" decision.
- Web Components are a web standard, so should be supported for the long term,
  but adoption has been slow for
  [various reasons](https://daverupert.com/2023/07/why-not-webcomponents/)
  (web standards are complex and very slow to update)
- Web Components sound like the most sustainable solution, but they historicaly
  also had some problems (shadow DOM styling, styling framework integration,
  performance, component versioning).
- A few of these issues are addressed by frameworks such as Lit.
  Although we should be aware, this is yet another framework.

### What are they?

Web Components are built upon four existing technologies:

- Custom Elements
  - Allows developers to define their own HTML elements with custom
    behavior and properties.
- Shadow DOM
  - Provides encapsulation by creating a scoped DOM subtree for a component,
    isolating its styles and structure from the rest of the document.
- HTML Templates
  - Enables the creation of template elements that can be cloned
    and inserted into the DOM.
  - Represented by the `<template>` and `<slot>` elements
- ~~HTML Imports~~
  - This fourth technology related to Web Components was since abandoned.
  - This is no longer required, e.g. **ES6 module imports** can be used instead.

### Advantages

- Reusability
  - Components can be easily reused across different projects,
    promoting code modularity and reducing redundancy.
- Encapsulation
  - Shadow DOM enables encapsulation, preventing style and structure
    conflicts between components and the rest of the page.
- Interoperability:
  - Web Components can be used with any modern web framework or library,
    enhancing interoperability and flexibility.
- Maintainability
  - Components provide a cleaner and more maintainable code structure by
    breaking down the application into manageable, isolated units.
- Consistency
  - Web Components promote consistency in design and functionality
    by encouraging the use of standardized, reusable elements.

### Challenges

- Integration with Frameworks
  - Almost all frameworks support using Web Components,
    [except React](https://custom-elements-everywhere.com/) where it has been
    a work in progress since 2017.
  - This is not an issue, as Lit provides
    [React wrappers](https://lit.dev/docs/frameworks/react/) to solve this.
- Standardization Challenges
  - Although Web Components are a W3C standard, the lack of universal adoption
    and variations in implementation can create challenges for consistent
    behavior across different environments.
- ~~Browser Support~~
  - This is
    [no longer a major issue](https://caniuse.com/?search=web%20components).
- ~~Performance Concerns~~
  - The use of Shadow DOM and other features may introduce performance overhead.
  - This is partly solved by Lit's use of `DOM Diffing` and other performance
    enhancements.

**Most of the limitations are addressed by using a framework like Lit**.

### Web Component Example

A vanilla Web Component:

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    div.textContent = "Hello, World!";
    shadow.appendChild(div);
  }
}

customElements.define("my-element", MyElement);
```

The component can be used directly in HTML:

```html
<div>
  <!-- other html -->
  <my-element></my-element>
</div>
```

## Class Variance Authority

- In UI design we need to consider **variants** of components.
- This may be changes to size, colour, functionality, icons, etc.
- Class Variance Authority (CVA) makes this easy by allowing us to define
  all of the possible variants and the associated CSS.
- We can even have component variants made from multiple variants.
- The result is a component that includes type-safe props that can be used
  to style our components is various different ways.

### CVA Example

With React:

```js
// components/button.tsx

import { cva } from "class-variance-authority";

const buttonStyles = cva("font-semibold rounded border", {
  variants: {
    intent: {
      primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-4",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

// regular button props
type ButtonProps = {
  label: string;
  onClick?: (onClickProps: any) => void;
  icon?: IconType; // defined elsewhere, pretend this is JSX
}

// merging button props and CVA variant props with TS utility types
type buttonVariantsProps = VariantProps<typeof buttonStyles>;
interface Props
  extends ButtonProps,
    // making intent variant required
    Omit<buttonVariantsProps, "intent">,
    Required<Pick<buttonVariantsProps, "intent">> {}

// actual button componenent
const Button = ({label, onClick, icon, intent, size}: Props) => {
  return (
    <button
      className={buttonStyles({intent, size})}
      onClick={onClick}
    >
      {icon && <Icon/>}
      {label}
    </button>
  )
}
```
