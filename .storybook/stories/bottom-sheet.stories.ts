// Uses the default exported Shoelace button component

import type { Meta, StoryObj } from "@storybook/web-components";
// import "../../components/header/header.ts";
import { html } from "lit";

const meta: Meta = {
  title: "Bottom Sheet",
  component: "hot-button-sheet",
};
export default meta;

export const Template: StoryObj = {
  args: {
  },
  argTypes: {
  },
  parameters: {
  },
  // render: (args, { parameters }) => {
  //   return html`
  //     <h1>Bottom Sheet</h1>
  //     <hot-bottom-sheet
  //       body="text"
  //       @on-close=${() => {parameters.showToast()}}
  //     ></hot-bottom-sheet>
  //   `;
  // },
};
