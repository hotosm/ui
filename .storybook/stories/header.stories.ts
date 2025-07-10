import type { Meta, StoryObj } from "@storybook/web-components";
import { hrefTo } from '@storybook/addon-links';
import { html } from "lit";

import "../../src/hotosm-ui";

const defaultLogo = "";

const meta: Meta = {
  title: "Header",
  component: "hot-header",
};
export default meta;

const oneTab = [
  { label: 'ONE TAB ONLY', clickEvent: () => {} }
];
const twoTab = [
  {
    label: 'GO TO HEADER PAGE',
    clickEvent: async () => {}
  },
  {
    label: 'GO TO TRACKING PAGE',
    clickEvent: async () => {}
  }
];
const threeTab = Array.from({ length: 3 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {}
}));
const fourTab = Array.from({ length: 4 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {}
}));
const fiveTab = Array.from({ length: 5 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {}
}));

export const Header: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    selectedTab: 0,
    size: "small",
    title: "",
    logo: defaultLogo,
    drawer: true,
    tabs: twoTab,
    borderBottom: false,
    showLogin: false,
  },
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: {
        type: "select",
      },
    },
    title: {
      options: ["", "Tasking Manager", "FMTM", "Drone Tasking Manager"],
      control: {
        type: "select",
      },
    },
    logo: {
      options: [defaultLogo, "data:image/png;base64,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"],
      control: {
        type: "select",
      },
    },
    drawer: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    borderBottom: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    selectedTab: {
      options: [0,1,2,3,4,5],
      control: {
        type: "select",
      },
    },
    tabs: {
      options: [
        { label: '1 Tab', value: oneTab },
        { label: '2 Tabs', value: twoTab },
        { label: '3 Tabs', value: threeTab },
        { label: '4 Tabs', value: fourTab },
        { label: '5 Tabs', value: fiveTab },
      ],
      control: {
        type: "select",
      },
    },
    showLogin: {
      control: { type: "boolean" },
    },
  },
  render: (args) => {
    return html`
      <hot-header
        title=${args.title}
        logo=${args.logo}
        ?borderBottom=${args.borderBottom}
        size=${args.size}
        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        ?showLogin=${args.showLogin}
      >
      </hot-header>
    `;
  },
};

// Header with different button combinations
export const HeaderWithButtons: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    selectedTab: 0,
    size: "medium",
    title: "Tasking Manager",
    logo: defaultLogo,
    drawer: true,
    tabs: threeTab,
    borderBottom: true,
  },
  render: (args) => {
    return html`
      <hot-header
        title=${args.title}
        logo=${args.logo}
        ?borderBottom=${args.borderBottom}
        size=${args.size}
        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      </hot-header>
    `;
  },
};

// Header with icon buttons only
export const HeaderWithIconButtons: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    selectedTab: 0,
    size: "large",
    title: "FMTM",
    logo: defaultLogo,
    drawer: true,
    tabs: fourTab,
    borderBottom: true,
  },
  render: (args) => {
    return html`
      <hot-header
        title=${args.title}
        logo=${args.logo}
        ?borderBottom=${args.borderBottom}
        size=${args.size}
        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      >
      </hot-header>
    `;
  },
};

// Header with HOT color buttons
export const HeaderWithHotColorButtons: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    selectedTab: 0,
    size: "medium",
    title: "Drone Tasking Manager",
    logo: defaultLogo,
    drawer: true,
    tabs: twoTab,
    borderBottom: true,
  },
  render: (args) => {
    return html`
      <hot-header
        title=${args.title}
        logo=${args.logo}
        ?borderBottom=${args.borderBottom}
        size=${args.size}
        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      >
      </hot-header>
    `;
  },
};

// Header with login button (showing hot-red color)
export const HeaderWithLogin: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    selectedTab: 0,
    size: "medium",
    title: "Tasking Manager",
    logo: defaultLogo,
    drawer: true,
    tabs: twoTab,
    borderBottom: true,
    showLogin: true,
  },
  argTypes: {
    showLogin: {
      control: { type: "boolean" },
    },
  },
  render: (args) => {
    return html`
      <hot-header
        title=${args.title}
        logo=${args.logo}
        ?borderBottom=${args.borderBottom}
        size=${args.size}
        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        ?showLogin=${args.showLogin}
      >
      </hot-header>
    `;
  },
};
