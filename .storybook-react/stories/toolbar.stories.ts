import type { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '../../components/react/index';

const meta = {
  title: 'Toolbar',
  component: Toolbar,
  argTypes: {},
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {},
};

