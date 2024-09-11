"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7408],{8481:(e,t,i)=>{i.d(t,{Ay:()=>c,RM:()=>o});var n=i(4848),s=i(8453);const o=[];function r(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},8991:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(4848),s=i(8453),o=i(8481);const r={sidebar_position:7,title:"Identity Resolver Service"},c=void 0,a={id:"mock-apps/dependent-services/identity-resolution-service",title:"Identity Resolver Service",description:"The Identity Resolver Service (IDR) is a critical component of the United Nations Transparency Protocol (UNTP) ecosystem. It serves as a bridge between the identifiers of things (e.g., products, entities, transactions) and additional information about those things. You can learn more about Identity Resolver Services here.",source:"@site/docs/mock-apps/dependent-services/identity-resolution-service.md",sourceDirName:"mock-apps/dependent-services",slug:"/mock-apps/dependent-services/identity-resolution-service",permalink:"/docs/mock-apps/dependent-services/identity-resolution-service",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/dependent-services/identity-resolution-service.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Identity Resolver Service"},sidebar:"tutorialSidebar",previous:{title:"Storage Service",permalink:"/docs/mock-apps/dependent-services/storage-service"},next:{title:"Configuration",permalink:"/docs/mock-apps/configuration/"}},d={},l=[...o.RM,{value:"Identity Resolver Service Documentation",id:"identity-resolver-service-documentation",level:3},{value:"Requirements",id:"requirements",level:3}];function p(e){const t={a:"a",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Ay,{}),"\n",(0,n.jsxs)(t.p,{children:["The Identity Resolver Service (IDR) is a critical component of the United Nations Transparency Protocol (UNTP) ecosystem. It serves as a bridge between the ",(0,n.jsx)(t.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/Identifiers",children:"identifiers of things (e.g., products, entities, transactions)"})," and additional information about those things. You can learn more about Identity Resolver Services ",(0,n.jsx)(t.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/IdentityResolver",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Key functions of the Identity Resolver Service include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Registering links of created credentials using the primary identifier of the product as the key."}),"\n",(0,n.jsx)(t.li,{children:"Enabling downstream value chain actors to discover more information about products they have purchased or are considering purchasing."}),"\n",(0,n.jsxs)(t.li,{children:["Facilitating the connection between unique identifiers and more information about the product (e.g. ",(0,n.jsx)(t.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalProductPassport",children:"Digital Product Passports"}),", ",(0,n.jsx)(t.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvents",children:"Traceability Events"})," and ",(0,n.jsx)(t.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential",children:"Conformity Credentials"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For the Mock Apps, we currently recommend and will be using the ",(0,n.jsx)(t.a,{href:"https://github.com/gs1/GS1_DigitalLink_Resolver_CE/tree/v2.6",children:"GS1 Digital Link Resolver v2.6"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"identity-resolver-service-documentation",children:"Identity Resolver Service Documentation"}),"\n",(0,n.jsxs)(t.p,{children:["Please go through the GS1 Digital Link Resolve documentation available ",(0,n.jsx)(t.a,{href:"https://github.com/gs1/GS1_DigitalLink_Resolver_CE/tree/v2.6#fast-start",children:"here"})," to understand how to set up and use the Identity Resolver Service."]}),"\n",(0,n.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.p,{children:"To use the Identity Resolver Service with the mock apps, you will need:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The Identity Resolver Service API running."}),"\n",(0,n.jsxs)(t.li,{children:["The address of the Identity Resolver Service API (e.g., ",(0,n.jsx)(t.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"The API key of the Identity Resolver Service API (if applicable)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Make sure you have the Identity Resolver Service API set up and running, and note its address and API key (if applicable) before proceeding with the mock app configuration."}),"\n",(0,n.jsx)(t.p,{children:"In the next section, we will explore the mock app configuration file and how to customise it for your specific use case."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);