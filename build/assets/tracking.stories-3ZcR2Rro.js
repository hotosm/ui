import"./tracking-DuAOtzZC.js";import"./chunk.XJILXOW4-CodlnP1p.js";import"./icons-oafdsS42.js";import{k as s}from"./lit-element-CPYlYYac.js";import"./chunk.NYIIDP5N-8SoPRANK.js";import"./directive-helpers-CHX3h6dV.js";const b={title:"Tracking",component:"hot-tracking"},t={args:{siteId:"1",domain:"localhost"},argTypes:{siteId:{options:["","1","2"],control:{type:"select"}},domain:{options:["localhost","anotherdomain"],control:{type:"select"}}},parameters:{showAgreeToast:()=>{const e=document.getElementById("agree-toast");e&&e.toast()},showDisagreeToast:()=>{const e=document.getElementById("disagree-toast");e&&e.toast()},addKeyLocalStorage:e=>{localStorage.setItem(`${e}-matomo-agree`,"true")},removeKeyLocalStorage:e=>{localStorage.removeItem(`${e}-matomo-agree`)}},render:(e,{parameters:a})=>s`
      <h1>Matomo Tracking Banner</h1>
      The banner is disabled if a local storage key is set.
      <br>
      Click the buttons below to enable/disable and refresh the page.
      <br>
      <br>

      <sl-button @click=${()=>{a.removeKeyLocalStorage(e.siteId)}}>Re-Enable Banner</sl-button>
      <sl-button @click=${()=>{a.addKeyLocalStorage(e.siteId)}}>Disable Banner</sl-button>

      <hot-tracking
        id="matomo-banner"
        site-id="${e.siteId}"
        domain="${e.domain}"
        @agree=${()=>{a.showAgreeToast()}}
        @disagree=${()=>{a.showDisagreeToast()}}
      ></hot-tracking>

      <sl-alert id="agree-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-toast" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    `};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    siteId: "1",
    domain: "localhost"
  },
  argTypes: {
    siteId: {
      options: ["", "1", "2"],
      control: {
        type: "select"
      }
    },
    domain: {
      options: ["localhost", "anotherdomain"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    showAgreeToast: () => {
      const agree = document.getElementById("agree-toast");
      if (agree) {
        agree.toast();
      }
    },
    showDisagreeToast: () => {
      const disagree = document.getElementById("disagree-toast");
      if (disagree) {
        disagree.toast();
      }
    },
    addKeyLocalStorage: (siteId: number) => {
      localStorage.setItem(\`\${siteId}-matomo-agree\`, 'true');
    },
    removeKeyLocalStorage: (siteId: number) => {
      localStorage.removeItem(\`\${siteId}-matomo-agree\`);
    }
  },
  render: (args, {
    parameters
  }) => {
    return html\`
      <h1>Matomo Tracking Banner</h1>
      The banner is disabled if a local storage key is set.
      <br>
      Click the buttons below to enable/disable and refresh the page.
      <br>
      <br>

      <sl-button @click=\${() => {
      parameters.removeKeyLocalStorage(args.siteId);
    }}>Re-Enable Banner</sl-button>
      <sl-button @click=\${() => {
      parameters.addKeyLocalStorage(args.siteId);
    }}>Disable Banner</sl-button>

      <hot-tracking
        id="matomo-banner"
        site-id="\${args.siteId}"
        domain="\${args.domain}"
        @agree=\${() => {
      parameters.showAgreeToast();
    }}
        @disagree=\${() => {
      parameters.showDisagreeToast();
    }}
      ></hot-tracking>

      <sl-alert id="agree-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-toast" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    \`;
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const h=["Template"];export{t as Template,h as __namedExportsOrder,b as default};
