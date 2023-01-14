"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"base",sidebar_position:1,description:"base"},i=void 0,o={unversionedId:"css/base/base",id:"css/base/base",title:"base",description:"base",source:"@site/docs/css/base/base.mdx",sourceDirName:"css/base",slug:"/css/base/",permalink:"/docs/css/base/",draft:!1,tags:[],version:"current",lastUpdatedAt:1666348072,formattedLastUpdatedAt:"2022\u5e7410\u670821\u65e5",sidebarPosition:1,frontMatter:{title:"base",sidebar_position:1,description:"base"},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/docs/category/css"},next:{title:"font",permalink:"/docs/css/font/"}},p={},c=[{value:"calc",id:"calc",level:3},{value:"\u591a\u5f20\u80cc\u666f\u56fe",id:"\u591a\u5f20\u80cc\u666f\u56fe",level:3},{value:"\u9009\u62e9\u5668",id:"\u9009\u62e9\u5668",level:3},{value:"z-index",id:"z-index",level:3},{value:"flex",id:"flex",level:3},{value:"sticky \u5c0f\u4e8e",id:"sticky-\u5c0f\u4e8e",level:3},{value:"\u5c3a\u5bf8",id:"\u5c3a\u5bf8",level:3},{value:"max-height",id:"max-height",level:4},{value:"\u76f8\u5bf9\u663e\u793a\u533a\u57df\u5c3a\u5bf8",id:"\u76f8\u5bf9\u663e\u793a\u533a\u57df\u5c3a\u5bf8",level:3}],s={toc:c};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"calc"},"calc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".a {\n  width: calc(100% - 50px);\n}\n.a {\n  width: calc (100% - 50px); // calc\u548c'('\u4e4b\u95f4\u4e00\u5b9a\u4e0d\u80fd\u52a0\u7a7a\u683c,\u52a0\u4e86\u6d4f\u89c8\u5668\u4e0d\u8ba4\uff01\n}\n")),(0,a.kt)("h3",{id:"\u591a\u5f20\u80cc\u666f\u56fe"},"\u591a\u5f20\u80cc\u666f\u56fe"),(0,a.kt)("p",null,"background\u652f\u6301\u591a\u5f20\u80cc\u666f\u56fe\uff0c\u9017\u53f7\u9694\u5f00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'.backgroundBox {\n  height: 200px;\n  background: url("./1.jpg") no-repeat 0 0,\n  url("./2.jpg") no-repeat 200px 0,\n  url("./3.jpg") no-repeat 600px 0;\n}\n')),(0,a.kt)("h3",{id:"\u9009\u62e9\u5668"},"\u9009\u62e9\u5668"),(0,a.kt)("p",null,"\u6b63\u5219\u9009\u62e9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'div[id*="demo"] { /*id\u5305\u542bdemo\u7684div\uff0c\u6ce8\u610f\uff0cdemo\u8981\u52a0\u5f15\u53f7*/\n  font-size: 30px;\n}\n\ndiv[herf^="http"] { /* herf\u4ee5http\u5f00\u5934\u7684div*/\n  color: red;\n}\n\ndiv[herf$=".pdf"] { /* herf\u5c5e\u6027\u4ee5.pdf\u7ed3\u5c3e\u7684div*/\n  color: blue;\n}\n')),(0,a.kt)("h3",{id:"z-index"},"z-index"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u53d1\u73b0A\u5143\u7d20\u63d0\u9ad8z-index\u65e0\u8bba\u600e\u4e48\u5f80\u5927\u8bbe\u7f6e\u90fd\u8986\u76d6\u4e0d\u4e86z-index\u4f4e\u7684B\u5143\u7d20\uff0c\u56e0\u4e3aA\u5143\u7d20\u6709\u4e00\u4e2a\u7236\u5143\u7d20\u7684z-index\u6bd4\u8f83\u4f4e\uff0c\u9700\u8981\u589e\u52a0\u7236\u5143\u7d20\u7684z-index"),(0,a.kt)("h3",{id:"flex"},"flex"),(0,a.kt)("p",null,"flex\u5bb9\u5668\u7684\u5b50\u5143\u7d20\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5bbd\u5ea6\uff0c\u5b50\u5143\u5143\u7d20\u4f1a\u88ab\u5b59\u5b50\u7b49\u5143\u7d20\u7684\u5185\u5bb9\u6491\u5f00\u3002\n\u53d1\u751fflex\u5bb9\u5668\u5bbd\u5ea6\u53d8\u5c0f\u4e86\uff0c\u4f46\u662f\u5b50\u5143\u7d20\u5bbd\u5ea6\u83ab\u540d\u5176\u5999\u4e0d\u7f29\u5c0f\u7684\u95ee\u9898\uff08\u5176\u5b9e\u662f\u88ab\u5b59\u5b50\u5143\u7d20\u7684\u5185\u5bb9\u6491\u5f00\u4e86\uff09\u3002"),(0,a.kt)("p",null,"\u5b50\u5143\u7d20\u52a0\u4e0aoverflow:hidden\u3002\u53ef\u89e3\u51b3\uff08\u597d\u4e00\u4e9b\uff09\u3002"),(0,a.kt)("p",null,"\u6216\u8005\u8bbe\u5b9a\u5b50\u5143\u7d20\u7684\u5bbd\u5ea6100%\u6216\u8005calc(100% - 100px)\u7b49\u90fd\u53ef\u4ee5\u3002\uff08\u5b9e\u9645\u6548\u679c\u662fflex\u5f39\u6027\u5e03\u5c40\u548c\u8bbe\u5b9a\u5bbd\u5ea6\u7684\u7ed3\u5408\uff0c\u89c4\u5219\u6bd4\u8f83\u590d\u6742\uff0c\u7528\u5230\u5b9e\u9645\u770b\uff09"),(0,a.kt)("h3",{id:"sticky-\u5c0f\u4e8e"},"sticky \u5c0f\u4e8e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".title{\n    position: sticky;\n    top: 50px;    \n}\n")),(0,a.kt)("p",null,"-webkit-input-placeholder \u4f2a\u5143\u7d20\u6d4f\u89c8\u5668\u67e5\u770b\u4e0d\u5230"),(0,a.kt)("p",null,"\u9700\u8981\u5728\u63a7\u5236\u53f0\u52fe\u9009 Show user agent shadow DOM"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3410).Z,width:"455",height:"309"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"input::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n    color: yellow;\n}\n")),(0,a.kt)("h3",{id:"\u5c3a\u5bf8"},"\u5c3a\u5bf8"),(0,a.kt)("h4",{id:"max-height"},"max-height"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u3002\u5b9a\u4e49\u5bf9\u5143\u7d20\u88ab\u5141\u8bb8\u7684\u6700\u5927\u9ad8\u5ea6\u6ca1\u6709\u9650\u5236\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"length")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49\u5143\u7d20\u7684\u6700\u5927\u9ad8\u5ea6\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"%")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49\u57fa\u4e8e\u5305\u542b\u5b83\u7684\u5757\u7ea7\u5bf9\u8c61\u7684\u767e\u5206\u6bd4\u6700\u5927\u9ad8\u5ea6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"inherit")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u89c4\u5b9a\u5e94\u8be5\u4ece\u7236\u5143\u7d20\u7ee7\u627f max-height \u5c5e\u6027\u7684\u503c\u3002")))),(0,a.kt)("h3",{id:"\u76f8\u5bf9\u663e\u793a\u533a\u57df\u5c3a\u5bf8"},"\u76f8\u5bf9\u663e\u793a\u533a\u57df\u5c3a\u5bf8"),(0,a.kt)("p",null,"vh and vw\uff1a\u76f8\u5bf9\u4e8e\u89c6\u53e3\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u5355\u4f4d"),(0,a.kt)("p",null,"1vw\u7b49\u4e8e\u89c6\u53e3\u5bbd\u5ea6\u76841%\u3002"),(0,a.kt)("p",null,"1vh\u7b49\u4e8e\u89c6\u53e3\u9ad8\u5ea6\u76841%\u3002"))}d.isMDXComponent=!0},3410:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shadowDom-6417d6b94298739c14cb43198acc1399.png"}}]);