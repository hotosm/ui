import type { Meta, StoryObj } from '@storybook/web-components';
import { button } from "./Button";

const meta: Meta = {
  component: 'button',
};
export default meta;

export const Template: StoryObj = (props) => {
  return button(props);
};