"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2600],{8481:(e,n,i)=>{i.d(n,{Ay:()=>s,RM:()=>c});var t=i(4848),o=i(8453);const c=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},4241:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(4848),o=i(8453),c=i(8481);const r={sidebar_position:37,title:"Verify Link"},s=void 0,d={id:"mock-apps/common/verify-link",title:"Verify Link",description:"Description",source:"@site/docs/mock-apps/common/verify-link.md",sourceDirName:"mock-apps/common",slug:"/mock-apps/common/verify-link",permalink:"/docs/mock-apps/common/verify-link",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/common/verify-link.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,title:"Verify Link"},sidebar:"tutorialSidebar",previous:{title:"Render Template",permalink:"/docs/mock-apps/common/render-template"},next:{title:"Default Verification Service Link",permalink:"/docs/mock-apps/common/default-verification-service-link"}},a={},l=[...c.RM,{value:"Description",id:"description",level:2},{value:"Structure",id:"structure",level:2},{value:"Components",id:"components",level:2},{value:"Encoded vs Decoded Query",id:"encoded-vs-decoded-query",level:2},{value:"Decoded (Human-readable) Example:",id:"decoded-human-readable-example",level:3},{value:"Encoded (URL-safe) Example:",id:"encoded-url-safe-example",level:3},{value:"Production Example:",id:"production-example",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Verify Link"})," is used to initiate the verification process for a verifiable credential, in the context of the Mock App system, a ",(0,t.jsx)(n.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalProductPassport",children:"Digital Product Passport (DPP)"}),", a ",(0,t.jsx)(n.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential",children:"Digital Conformity Credential"})," or ",(0,t.jsx)(n.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvents",children:"Digital Traceability Events"}),". It provides a standardised way to access, decrypt (if necessary), verify the authenticity and integrity of a credential, and render the credential on the ",(0,t.jsx)(n.a,{href:"/docs/mock-apps/verify-app",children:"verify page"})," of the Mock App system."]}),"\n",(0,t.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.p,{children:"The general structure of the verify link is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{verify_app_address}?q={payload:{uri:{uri_of_credential}, key:{decryption_key}, hash:{hash_of_credential}}}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{verify_app_address}"}),": The base URL of the verification application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"q"}),": Query parameter that contains the encoded payload."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payload"}),": An object containing the necessary information for verification."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"uri"}),": The URI where the credential can be accessed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"})," (optional): The decryption key, if the credential is encrypted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hash"}),": The hash of the credential for integrity verification."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"encoded-vs-decoded-query",children:"Encoded vs Decoded Query"}),"\n",(0,t.jsx)(n.h3,{id:"decoded-human-readable-example",children:"Decoded (Human-readable) Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://localhost:3001/verify?q={payload:{uri:http://localhost:3001/conformity-credentials/steel-mill-1-emissions.json}}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"encoded-url-safe-example",children:"Encoded (URL-safe) Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://localhost:3001/verify?q%3D%7Bpayload%3A%7Buri%3Ahttp%3A%2F%2Flocalhost%3A3001%2Fconformity-credentials%2Fsteel-mill-1-emissions.json%7D%7D\n"})}),"\n",(0,t.jsx)(n.h3,{id:"production-example",children:"Production Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://www.example.com/verify?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstorage.googleapis.com%2Fverifiable-credentials%2Fconformity-credentials%2Ftop-line-steel-dcc.json%22%7D%7D\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const o={},c=t.createContext(o);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);