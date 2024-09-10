
import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '../../components/react/index';

const meta = {
  title: 'Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;

export const Template: StoryObj = {
  args: {},
  argTypes: {},
};


