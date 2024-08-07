import{G as W}from"./index-J3w2Phx6.js";import"./header-B__pQKRq.js";import{k as v}from"./lit-element-CPYlYYac.js";import"./icons-oafdsS42.js";import"./directive-helpers-CHX3h6dV.js";import"./chunk.XJILXOW4-CodlnP1p.js";const{global:B}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:y,addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:F,SELECT_STORY:U}=__STORYBOOK_MODULE_CORE_EVENTS__;var w="links",{document:i,HTMLElement:h}=B;function k(e){let t={},o=(e[0]==="?"?e.substring(1):e).split("&").filter(Boolean);for(let a=0;a<o.length;a++){let r=o[a].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||"")}return t}var I=e=>p.getChannel().emit(U,e),l=(e,t)=>new Promise(o=>{let{location:a}=i,r=k(a.search).id,g=e||r.split("--",2)[0],E=`/story/${W(g,t)}`,u=a.pathname.replace(/iframe\.html$/,""),O=`${a.origin+u}?${Object.entries({path:E}).map(s=>`${s[0]}=${s[1]}`).join("&")}`;o(O)}),d=e=>{let{target:t}=e;if(!(t instanceof h))return;let o=t,{sbKind:a,sbStory:r}=o.dataset;(a||r)&&(e.preventDefault(),I({kind:a,story:r}))},A=!1,K=()=>{A||(A=!0,i.addEventListener("click",d))},Q=()=>{A&&(A=!1,i.removeEventListener("click",d))};y({name:"withLinks",parameterName:w,wrapper:(e,t)=>(K(),p.getChannel().once(F,Q),e(t))});const m=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAB9CAMAAAAvBq6hAAAAbFBMVEX////XPz/ke3vura3++vr32dn76+vYRET65eX10ND88PDxurrkfX3cVlb99PTkf3/zxMThb2/tqKjvsbHfZWXlhIT439/cWVnyv7/rn5/idHT0ysrplpbaTU3qnJzZSEjni4veYWHgaWnokpKZE/dBAAAOHElEQVR4nO1cabuqvA6lMsggCCgzKOD//483SQvitiDoOfe4n7frw2YDHVfTJE2LmqagoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKDwhEu0+wzJW9Wmu0Mg/q127Uc9iHcVXlxj5n21iz8qfwKHfYronWorxlzxb8HYRz3w2U3TjNqfI+vG/I/KnyL9mK13ZMth+4Es/cPOXPqcypt7n/eXj8p/QPUxW2805g+SRUj/oPgswvuYrdPmOp/Ici2aRobl0o2mmbmDD+ywGpSb5eSVTf8F8N6qQn5jgLYyQua7VKBh5rkpijI0M7ToPWVy8tDUhjdwZ77BFWmNDxFurRLIGjjgZHV7KiO9XqHPfpOWUGpmaQe4NKTA6QljJfCkJXsnxpsj0pDAWEX0Dkq8XPEfH0fP2Rc5/O9WpCeMlpJ0WJa3P9F06tN32Go/ZmvrKE10jEdkNSzHG5MUP/b40F5ZV7KybRhDQdoz/1YAdxmk2rGGdS2wd4CbksVaEbH9DqhLgMDi5jNWoXqBnA0zPFZCqjNjbQFFYlkn5rOmhbTNnFFYRPkpWVdrK1msjzgy6n/GpZOTlRH79p4xmIquj9M8Ymd8X9Eb6KcONzF1/Yj/W8R4RRk0rUdhgio6yzBBco+YdI8thLJi0js7rGu/fUYQuk/ZyrYN0oPHIiGLbEbEWrwkeHeJTNHQEJ9wf+WK3BBZJicrutHzEIXJEfJOZHkR16s1luWxK92gTL4Dt/mUrX4rWSePI3kmy+c3B+bh5cZqkStITw3OsEQ88fFmQhbBsKoDSo4jKCGy+Bs771mBZPHGtnjzDuxPyRqbtJKsUWfl1M8fZNFs2nEzeyM5C+Iyo3qIrHiGrLA9UyIiK5uS5R07ekNklYKsd337z135+nUlU7IeXQdBVirIMn+SZaLoZ0evWyRrB4mufdw+keUiU010OnKyog/JeuVuXRvAchL9A7KIhHmyjIZFTjCkmyML1PjJoq78JCthfo4V1n+ILC2eI6Fr9coODMMIbMero/0sW+uNyxxZFT1/JgvknnuaezlZjigkFiwcHskyGC8ePIg3yJLarouUqfin62Z5uzm2VrtbT2RFfInZsescWZQ+YdwaPksWavOMa2zzSWcZYiBPpCy2khVn0RNKCQc8/PGE9CYXr9XulnOPOnCyoBttrjdsj88bruDLgaxaM8BDrdKwhzo85If3kkzjjvtZrLzh3IhNp4ZE50HYsPwdubFe6gDVrL2Tlay0htZ1di5NEDmzBdhyr3+tuzUJ0cTcxCeUP2zw+Z6TFXFOEozBOFxf5he0ZKXoJU0ungqzp8K5PsBQ2FDFVZQP1Fgdvbnk7GrAwHT05rA2BBC8dqz2y+tjp5NlWuluuVU10GqFfEicy00PNHruhLRwxGUwIKUVs3u6tScXlswVvuBraCd0x1RhjLo9rNsCprCTW5oryrX48jmv2xhyVbkxPBEFr4E9r6dFt1+WJBWuTe7Wr8ELx2pNp6X2c4u79Xuw6Fi17xexwd36RZh1rNaHiqVsvbeW/3bMxrHWb0JIA4fvxSC/HTNxrC1BMZmDujW69UvQScmad6+eYcg8to3RrV8Cqbu1bW8rlNG9Lbr1WyBxt/YbxaKXsfVfcbfEGsAwjIfrffVt3IG3pnQq/0fcLb5HZfkNTcewaVq82nXvZwfagimbAT5p8rOUrTWbiYHlvk70DMP6ZxbEe5yJYgJZQvEAlxiEzUUi3BaZ6DlbJJHhlbvlFjiBu3rtAm1sbwk2JUsGK7Q2ewrTwCrLcrReTlkuin94Pjzh2D6SJYIy1p5HqnOij05E9D4j1768Ng3kQdGiETZmlpnL7laOZpRM6TaXf3R3SF1Y0TpbYkUYaUCNUQ6PdkxEvGbgZvJuTXAVmumRLHBffYd7sbghHgQdcBEEwY/2/yhqabJAuZnnGm4YsU3RXfCCizRwnSMXXf3e+UWcaJ7gmA/2C32eF863XL9MMNT9SFbJe4QyxOWlH3QbYm7dtOBuWXxGI5ItLj90USjDHQX3vJV2l7YSgazG51vf+OT6iqzAf0HWEA97JGvHJ4s7knUW+oowexBnfoq0k2MvHTXatjUj18ORX+fkiXMcNghzqIdkC+zxNBcFW92ClaDtjRQ679mY185FSo3f8HMlbsx62wWyunoYpJINe7VBdTrxoJgGVQWQZ8z/Io7l3cna8QEQZMX8oYwsa7a0uWEHAblrqhDndsCyCjWYz+1CSAojwvh/yhIHG31FkQpGFWc4oLLJ1jRQgo7SnQ7nP/i8Do5syEbpfKC6MYetDxblnKyCM9Iipyyigc8Gul7EsQZj8SRZC2QZ82HXGXtjYs8GBHsYooA6me94C4C/KI47UnspzJf9reYHIHDStmOUVbv0zE8KaGTDfB+WtKAdbnrLqzUytr/oCbW87lkD6VAud3we5iw0iawLFKjHXM+40Ia97kX31uWLZA3qA3i5dlnW+SvI0hbshtzUeex6V3laB5MfFl50doPmJ+hGYnmH3QGt3AE7RkeDH6C/0ZSFGNSQFmc5aUALlGdja8MxhxvLXM67jY9wnkBRkJbEPWKgPSKa1yTLLQbm3SvtLkG956FtC3GsB7IGvCarWyhQ6m6dHk7qRUBNMGhuPO3hDY3dwwRNRZ2xMD4xr+3s8YJ2nCziXmwLgbQkSDhvYXvf/kKyDLKHBkxeemYnLaWy0Y9wxcGaYCL4t/8nWVJT90hWj2TR+SENq4phrh1tE2D7MEFToWW80X6a+hEnfjEhK+MdZhVmS2MQE5jpJt1ckJORLBeaXmGOAvIO1jCw8yOOjyuqghbdFyCHVWT1DqBYQ9aiiZW5W/l9k5Wyx0CWcIBu7DZ13ArUWYY28iJg4B6ieSeLuj21ytObZkKWBa5ZgsJsD2TlR958IqvhxR+nW4rSSAFhmDXAC81tZwVZ7rKFlZy6tqZBMxtvguFcDSfrfCS0sKpJBY3EixOPgprh9PpB1p5nS5IadFWT4P+HJCkeyLKwJpRsThbuOPrlSSedNQj8A1nGrCwM3vQWayiPO9whcbf6iefd4ngGg5eLR8wOU6f+gayejkYKVhN8eLiTZU4PeFeDlBAmZEHbLRPJOPH5yU4uvSLJEgWcRxeKuJjbkh4if08ePE5iQ07Wy/POk/kzdmVsjkMmExQ8d26uUEM8rNrKMn0kS5x35E0ofpAFzePuuRcVyD4X3jiKhzNZqThTekn4NUIxaClVQZK1590LHpTMvDQMa8snyYr4jTATD2QtGQyO9omtZBBiYBrXuOA6UNUtXiyxkqixlgeywCfz+ecnLXWc201BFn5NYWmDCjmyLOAE1UM6ThZ6U502kkUjmVLPwXWgWbD7uRCShoPZyMEjWchSd2nvZD6Q9ehmSWX2+QgG8O+3xa2DgrFPIFmsOaFTimOrgzTmYKFQngdreKIGoU/dJbfdnss6SGiJ+onPdFjMXYs8vpKahJ43cV6Q5hbpbG5ye+7+0eIaaGidCg+TgBlxMfjj5dEPweINkkFoC4uNZB20+67ZVfgf3aS8H0J6c80nOJLTODrXm1e+GgWRwRYLudF0ovyq80EPeHtpuB1+6J11NOMMvAMqOtHqyWl5zeZmjD6p4ulcTtaJX0ini4NWpdmAbXPZlRqRPW/Z1FKyspGsafBP0ztsfDIw5E/I+rH92Kw+i+/oRTx8QAFkBYEe54PlDPI4zumd4YgTHo4oOPXiWB+7U51CLXBGG2nqsT7eOJMbTKc5jkEl0kOrokvKE6WOjWRqrh5L/eijlC0+tEbFv9ewwuG7jTR07r6Rk48LtOfY3ztfLgT7L9ibdZ/n3x1Sd+s8m1yO5wODzRuR9W8haz5gKXe3tp1VCCQeabe9ncG2vd2/g0XJkrtbzXx6CaRLp+1fbAad/9Z3R38UQZYthcKl7taWLemZgE/7Wau/FFJ3y3udT2D2y4w3v/T4ckjdrbXqY36NuYHw3wSpu7XOMhndLFffoK//BqTu1pquuktcvedufT+k7tbrswrmi221d9yt74dc87Qvjh7NrC0neMPd+gWQR7eyfCGLGb3kamGTNezPgL7HS//ej478O8xEtyL5pzvSr1F8WWy5ncn/sME0+/sV34q5zcTIC54TV4kk5U2znzFnJqyqchynYTX8rf79mnArZjVQczxNzZqdt/It1f2cFM4jY9vzfAfk0S0Ov0/qoijqtlw6s7TZsfInnqvlxad7UMqLdfryFETQwBAVkmqf5IGmfwJ5dGsD9lvP8E3I4kqs5CdluO1oPHqu03cJBy76vUQp/BvMbyauRLOxK3eyavo2M6PYedCwLs5xkz6lrxFZGYM56VkU31AzfgmM1+cCX2CjYzWSZYr4bI9k3ESMKMPtAJ0vyQVNf+QXkf4Q1n3fuoR1ZxYHjGS1rKWri7teYcvVPv1Egc6ZE5+l2htjbX8Vr7aWX6PdUt1IVsdqEw9WVMOC0rCrwkeZEls6Id9HMb+JrNnNxPXYEscayZost2DV4NbZWJb4vY+vJGvFgu8VNsSxJmQlNaG4pJrdMHYt6+rw9WQtulvrsN7dGsnKppl68Stg7feTpcmWMtuwOo41kpUIy2CfI0MbIo/ZLyBLWxNOWMTqONbUdaDwWU9Hp/jT+vt1lvYn3K2132Y2o4IDP2qnx9nwu2tFeOrAG03QKaVDLvx3o8SvqHwVrFcfFrzEylXJZLlTkIvXoeoy+OGO3EF/XueH175WssAF1D/EZR1ZoXdfTTr14SB+I8iNj+UNaPNOhmZ7pPotj9bQrrcUj1RQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ+Gf4H5j7yuOYiAtqAAAAAElFTkSuQmCC",import.meta.url).href,R={title:"Header",component:"hot-header"},M=[{label:"ONE TAB ONLY",clickEvent:()=>{}}],c=[{label:"GO TO HEADER PAGE",clickEvent:async()=>{const e=await l("Button","Template");window.location.href=e}},{label:"GO TO TRACKING PAGE",clickEvent:async()=>{const e=await l("Tracking","Template");window.location.href=e}}],Y=Array.from({length:3},(e,t)=>({label:`TAB Number ${t+1}`,clickEvent:()=>{}})),G=Array.from({length:4},(e,t)=>({label:`TAB Number ${t+1}`,clickEvent:()=>{}})),P=Array.from({length:5},(e,t)=>({label:`TAB Number ${t+1}`,clickEvent:()=>{}})),n={args:{size:"large",title:"",logo:m,drawer:!0,tabs:c},argTypes:{size:{options:["large","small"],control:{type:"select"}},title:{options:["","Tasking Manager","FMTM","Drone Tasking Manager"],control:{type:"select"}},logo:{options:[m,"data:image/png;base64,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"],control:{type:"select"}},drawer:{options:[!0,!1],control:{type:"radio"}},tabs:{options:{"1 Tab":M,"2 Tabs":c,"3 Tabs":Y,"4 Tabs":G,"5 Tabs":P},control:{type:"select"}}},render:e=>v`
      <hot-header
        title=${e.title}
        logo=${e.logo}
        size=${e.size}
        ?drawer=${e.drawer}
        .tabs=${e.tabs}
      ></hot-header>

      <h1>Page Content</h1>
      <br>
      <p>Text on the page</p>
    `};var T,b,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "large",
    title: "",
    logo: defaultLogo,
    drawer: true,
    tabs: twoTab
  },
  argTypes: {
    size: {
      options: ["large", "small"],
      control: {
        type: "select"
      }
    },
    title: {
      options: ["", "Tasking Manager", "FMTM", "Drone Tasking Manager"],
      control: {
        type: "select"
      }
    },
    logo: {
      options: [defaultLogo, "data:image/png;base64,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"],
      control: {
        type: "select"
      }
    },
    drawer: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    tabs: {
      options: {
        '1 Tab': oneTab,
        '2 Tabs': twoTab,
        '3 Tabs': threeTab,
        '4 Tabs': fourTab,
        '5 Tabs': fiveTab
      },
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return html\`
      <hot-header
        title=\${args.title}
        logo=\${args.logo}
        size=\${args.size}
        ?drawer=\${args.drawer}
        .tabs=\${args.tabs}
      ></hot-header>

      <h1>Page Content</h1>
      <br>
      <p>Text on the page</p>
    \`;
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const H=["Template"];export{n as Template,H as __namedExportsOrder,R as default};
