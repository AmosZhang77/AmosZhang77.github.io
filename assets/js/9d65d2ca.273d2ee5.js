"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||s;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={},a=void 0,i={unversionedId:"css/less/base",id:"css/less/base",title:"base",description:"less",source:"@site/docs/css/less/base.mdx",sourceDirName:"css/less",slug:"/css/less/base",permalink:"/docs/css/less/base",draft:!1,tags:[],version:"current",lastUpdatedAt:1666348072,formattedLastUpdatedAt:"2022\u5e7410\u670821\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS \u529f\u80fd\u5b9e\u73b0",permalink:"/docs/css/css_fn/"},next:{title:"other",permalink:"/docs/css/less/other/"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"less"),(0,o.kt)("h1",{id:"mixin"},"mixin"),(0,o.kt)("p",null,"\u666e\u901a\u7b80\u5355mixin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-less"},".mixin1 {\n  width: 30px;\n}\n//.mixin1() { // \u52a0\u4e86\u62ec\u53f7\u6700\u540e\u7f16\u8bd1\u8fd9\u4e2aclass\u4e0d\u4f1a\u8f93\u51fa\n//  width: 30px;\n//}\n.blue {\n  color: blue;\n  .mixin1; // .mixin1() \u8fd9\u91cc\u52a0\u4e0d\u52a0\u62ec\u53f7\u90fd\u53ef\u4ee5\n}\n\n.red {\n  color: red;\n  .mixin1;\n}\n")))}u.isMDXComponent=!0}}]);