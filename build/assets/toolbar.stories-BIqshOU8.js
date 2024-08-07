import"./toolbar-CRZzs4xZ.js";import{k as i}from"./lit-element-CPYlYYac.js";import"./icons-oafdsS42.js";import"./directive-helpers-CHX3h6dV.js";import"./chunk.NYIIDP5N-8SoPRANK.js";const c={title:"Toolbar",component:"hot-toolbar"},o={args:{tooltipPosition:"top"},argTypes:{tooltipPosition:{options:["top","bottom","left","right"],control:{type:"select"}}},render:e=>i`
      <h1>Toolbar</h1>
      <br>
      <br>
      <hot-toolbar
        tooltip-position="${e.tooltipPosition}"
        @redo=${()=>{alert("Redo Clicked")}}
      ></hot-toolbar>
    `};var t,r,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    tooltipPosition: "top"
  },
  argTypes: {
    tooltipPosition: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return html\`
      <h1>Toolbar</h1>
      <br>
      <br>
      <hot-toolbar
        tooltip-position="\${args.tooltipPosition}"
        @redo=\${() => {
      alert("Redo Clicked");
    }}
      ></hot-toolbar>
    \`;
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const b=["Template"];export{o as Template,b as __namedExportsOrder,c as default};
