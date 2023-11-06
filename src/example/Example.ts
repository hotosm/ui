import React, { ReactElement, Component } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /** Description of prop "someProp". */
    someProp: string
}

/**
 * General component description.
 */
export default class MyComponent extends Component<ButtonProps, void> {
  declare props: ButtonProps;

  override render(): ReactElement | null {
    // ...
    return null; // Replace with your component rendering logic
  }
}
