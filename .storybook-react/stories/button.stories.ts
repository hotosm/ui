import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components/react';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;


export const Template: StoryObj = {
  args: {
    innerHTML: "Click me",
    variant: "primary",
    disabled: false,
    onClick: () => console.log("Click!")
  },
  argTypes: {
    variant: {
      options: ["default", "primary", "success", "neutral", "warning", "danger"],
      control: {
        type: "select",
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
  },
};


