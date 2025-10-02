import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{c as o}from"./createLucideIcon.DCnupLqN.js";import{r as d}from"./index.RH_Wq4ov.js";import{A as x,m}from"./proxy.CDpuPLUh.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],n=o("globe",h);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],c=o("house",u);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],j=o("menu",p);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],r=o("users",b);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N=o("x",y),a=({Icon:t,nameRoute:s,destinationRoute:l})=>e.jsxs("a",{href:l,className:"flex items-center space-x-3 md:space-x-2 hover:text-primary transition-all duration-300 hover:scale-105 hover:bg-gray-800 py-2 px-4 rounded-xl",children:[e.jsx(t,{className:"w-4 h-4"}),e.jsx("span",{className:"font-bold",children:s})]}),g=()=>e.jsxs("nav",{className:"hidden md:flex gap-10 space-x-6 lg:space-x-8",children:[e.jsx(a,{Icon:c,nameRoute:"Home",destinationRoute:"/"}),e.jsx(a,{Icon:n,nameRoute:"Blog",destinationRoute:"/blogs"}),e.jsx(a,{Icon:r,nameRoute:"About",destinationRoute:"/about"})]}),k=()=>e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"text-white p-2 rounded",children:e.jsx("img",{src:"images/logo1.png",alt:"",className:"w-8 h-8 sm:w-10 sm:h-10"})}),e.jsx("span",{className:"text-lg sm:text-xl font-bold text-white",children:"Ryper Lab"})]}),i=({Icon:t,setShow:s})=>e.jsx("button",{className:"md:hidden text-white",onClick:s,children:e.jsx(t,{className:"text-xl"})}),f=()=>e.jsxs("nav",{className:"space-y-6",children:[e.jsx(a,{Icon:c,nameRoute:"Home",destinationRoute:"/"}),e.jsx(a,{Icon:n,nameRoute:"Blog",destinationRoute:"/blogs"}),e.jsx(a,{Icon:r,nameRoute:"About",destinationRoute:"/about"})]}),v=({show:t,setShow:s})=>e.jsx(x,{children:t&&e.jsxs(m.section,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.3,ease:"easeInOut"},className:"fixed top-0 right-0 px-4 py-7 h-screen w-64 bg-gray-900/95 backdrop-blur-3xl md:hidden z-[999]",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(i,{Icon:N,setShow:s})}),e.jsx(f,{})]},"mobile-menu")}),_=()=>{const[t,s]=d.useState(!1);return e.jsxs("header",{className:"fixed w-full top-0 z-50 border-b-2 border-gray-100/20 backdrop-blur bg-transparent",children:[e.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-4",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(k,{}),e.jsx(g,{}),e.jsx(i,{Icon:j,setShow:()=>s(!0)})]})}),e.jsx(v,{show:t,setShow:()=>s(!1)})]})};export{_ as HeaderSection};
