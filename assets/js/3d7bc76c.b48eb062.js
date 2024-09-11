"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7606],{8481:(e,n,i)=>{i.d(n,{Ay:()=>s,RM:()=>a});var t=i(4848),r=i(8453);const a=[];function o(e){const n={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function s(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2192:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var t=i(4848),r=i(8453),a=i(8481);const o={sidebar_position:41,title:"Verify App"},s=void 0,p={id:"mock-apps/verify-app",title:"Verify App",description:"Description",source:"@site/docs/mock-apps/verify-app.md",sourceDirName:"mock-apps",slug:"/mock-apps/verify-app",permalink:"/docs/mock-apps/verify-app",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/verify-app.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,title:"Verify App"},sidebar:"tutorialSidebar",previous:{title:"Scanning App",permalink:"/docs/mock-apps/scanning-app"},next:{title:"Conformity Credential",permalink:"/docs/mock-apps/conformity-credential"}},c={},d=[...a.RM,{value:"Description",id:"description",level:2},{value:"Overall Flow Diagram",id:"overall-flow-diagram",level:2}];function l(e){const n={a:"a",h2:"h2",mermaid:"mermaid",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The Verify App is a crucial component of the ",(0,t.jsx)(n.a,{href:"/docs/mock-apps/scanning-app",children:"Scanning App"}),", responsible for verifying UNTP credentials and displaying the verified credentials. It handles the decryption of encrypted Verifiable Credentials (VCs), verification through a dedicated service, and presentation of the results to the user. The main entrypoints into the Verify App are through the ",(0,t.jsx)(n.a,{href:"/docs/mock-apps/scanning-app",children:"Scanning App"})," or by a ",(0,t.jsx)(n.a,{href:"/docs/mock-apps/common/verify-link",children:"Verify Link"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"overall-flow-diagram",children:"Overall Flow Diagram"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant U as User\n    participant V as Verify App\n    participant SS as Storage Service\n    participant VS as Verification Service\n    U->>V: Access Verify App\n    V->>SS: Fetch VC\n    SS--\x3e>V: Return VC\n    V->>V: Decrypt VC (if required)\n    V->>V: Compute Hash (if required)\n    V->>VS: Send VC for Verification\n    VS--\x3e>V: Return Verification Result\n    V->>V: Render Verified Credential\n    V->>U: Display Verification Result and Credential"})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(6540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);