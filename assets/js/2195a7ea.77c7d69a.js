"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8219],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7255:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={},i=void 0,l={unversionedId:"other_library/axios/echart",id:"other_library/axios/echart",title:"echart",description:"\u83b7\u53d6\u539f\u751f ajax \u7684\u8fdb\u5ea6\u4e8b\u4ef6",source:"@site/docs/other_library/axios/echart.mdx",sourceDirName:"other_library/axios",slug:"/other_library/axios/echart",permalink:"/docs/other_library/axios/echart",draft:!1,tags:[],version:"current",lastUpdatedAt:1684045996,formattedLastUpdatedAt:"2023\u5e745\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jquery",permalink:"/docs/other_library/jquery/"},next:{title:"echart",permalink:"/docs/other_library/flutter/echart"}},c={},s=[{value:"\u83b7\u53d6\u539f\u751f ajax \u7684\u8fdb\u5ea6\u4e8b\u4ef6",id:"\u83b7\u53d6\u539f\u751f-ajax-\u7684\u8fdb\u5ea6\u4e8b\u4ef6",level:3},{value:"\u539f\u751f\u652f\u6301\u7684\u6682\u505c ajax \u8bf7\u6c42\u518d axios \u4e2d\u4f7f\u7528",id:"\u539f\u751f\u652f\u6301\u7684\u6682\u505c-ajax-\u8bf7\u6c42\u518d-axios-\u4e2d\u4f7f\u7528",level:3}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u83b7\u53d6\u539f\u751f-ajax-\u7684\u8fdb\u5ea6\u4e8b\u4ef6"},"\u83b7\u53d6\u539f\u751f ajax \u7684\u8fdb\u5ea6\u4e8b\u4ef6"),(0,o.kt)("p",null,"\u7528\u4e8e\u5c55\u793a\u4e0a\u4f20\u8fdb\u5ea6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import axios from "axios";\n\nconst config = {\n  signal: this.controller.signal,\n  // `onUploadProgress` \u5141\u8bb8\u4e3a\u4e0a\u4f20\u5904\u7406\u8fdb\u5ea6\u4e8b\u4ef6\n  // \u6d4f\u89c8\u5668\u4e13\u5c5e\n  onUploadProgress: function (evt) {\n    // \u5904\u7406\u539f\u751f\u8fdb\u5ea6\u4e8b\u4ef6\n    if (evt.lengthComputable) {\n      console.log("\u8fdb\u5ea6\u5c55\u793a\u53ef\u7528", evt.total, evt.loaded);\n    }\n  },\n  // `onDownloadProgress` \u5141\u8bb8\u4e3a\u4e0b\u8f7d\u5904\u7406\u8fdb\u5ea6\u4e8b\u4ef6\n  // \u6d4f\u89c8\u5668\u4e13\u5c5e\n  onDownloadProgress: function (progressEvent) {\n    // \u5904\u7406\u539f\u751f\u8fdb\u5ea6\u4e8b\u4ef6\n  },\n};\nconst res = await axios("url", {\n  method: "POST",\n  data: formData,\n  requestType: "form",\n  ...config,\n});\n')),(0,o.kt)("h3",{id:"\u539f\u751f\u652f\u6301\u7684\u6682\u505c-ajax-\u8bf7\u6c42\u518d-axios-\u4e2d\u4f7f\u7528"},"\u539f\u751f\u652f\u6301\u7684\u6682\u505c ajax \u8bf7\u6c42\u518d axios \u4e2d\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'class MyUploadAdapter {\n  constructor() {\n    // \u539f\u751f\u53d6\u6d88\u8bf7\u6c42api\n    const controller = new AbortController();\n    this.controller = controller;\n  }\n\n  async upload() {\n    const config = {\n      // \u7ed9axios\u4f20\u5165\u539f\u751f\u53d6\u6d88\u8bf7\u6c42\u5bf9\u8c61\n      signal: this.controller.signal,\n    };\n    const res = await axios("url", {\n      method: "POST",\n      data: formData,\n      requestType: "form",\n      ...config,\n    });\n  }\n\n  // Aborts the upload process.\n  abort() {\n    // \u8c03\u7528\u539f\u751f\u53d6\u6d88\u8bf7\u6c42\u65b9\u6cd5\n    this.controller.abort();\n  }\n}\n')))}u.isMDXComponent=!0}}]);