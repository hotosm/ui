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
      options: ["default", "primary", "success", "neutral", "warning", "danger", "text"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    outline: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    pill: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    caret: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    loading: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
  },
};


