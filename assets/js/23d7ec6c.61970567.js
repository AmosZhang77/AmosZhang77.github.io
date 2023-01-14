"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},l=void 0,o={unversionedId:"js/base/coding/coding",id:"js/base/coding/coding",title:"coding",description:"coding",source:"@site/docs/js/base/coding/coding.mdx",sourceDirName:"js/base/coding",slug:"/js/base/coding/",permalink:"/docs/js/base/coding/",draft:!1,tags:[],version:"current",lastUpdatedAt:1669064019,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"class",permalink:"/docs/js/base/class/"},next:{title:"data_type",permalink:"/docs/js/base/data_type/"}},s={},c=[{value:"coding",id:"coding",level:2},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:3},{value:"eslint\u5168\u5c40\u53d8\u91cf\u5ffd\u7565\u68c0\u67e5",id:"eslint\u5168\u5c40\u53d8\u91cf\u5ffd\u7565\u68c0\u67e5",level:3},{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",level:4},{value:"eslint\u5355\u6587\u4ef6\u5ffd\u7565\u68c0\u67e5",id:"eslint\u5355\u6587\u4ef6\u5ffd\u7565\u68c0\u67e5",level:3},{value:"script\u6807\u7b7e",id:"script\u6807\u7b7e",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"coding"},"coding"),(0,i.kt)("h3",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,i.kt)("p",null,"\u9ad8\u4eae\u6ce8\u91ca\uff0c\u4e5f\u53ef\u7279\u522b\u505a\u51fd\u6570\u6ce8\u91ca\uff0c\u5165\u53c2\u7c7b\u578b\u548c\u9ed8\u8ba4\u503c\u4e5f\u53ef\u4ee5\u6309\u7167\u8fd9\u6837\u89c4\u8303\u5199\u6ce8\u91ca\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @method \u8d85\u51fa\u884c\u663e\u793a\u7701\u7565\u53f7\n * @param {string} contextClass \u8d85\u51fa\u884c\u663e\u793a\u7701\u7565\u53f7\n * @param {number} [lineNum=2] \u7b2c\u51e0\u884c\u9700\u8981\u7701\u7565\u53f7\n * @param {number} [lineHeight=28] \u884c\u9ad8\n * @param {number} [safeNum=30] \u7528\u4e8e\u63d0\u9ad8dom\u64cd\u4f5c\u6027\u80fd\uff0c\u6bcf\u884c\u5b89\u5168\u7684\u5b57\u7b26\u6570\uff0c\u598230\uff0c2\u884c\uff0c\u4e0d\u4f1a\u68c0\u67e530*2\u4ee5\u5185\u7684\u5b57\u7b26\u662f\u5426\u9700\u8981\u586b\u5145\u2018...\u2019\n * @return null \u8fd4\u56de\u503c\u8bf4\u660e\n */\nconst dot = function (contextClass, lineNum, lineHeight, safeNum) {\n    lineNum = lineNum || 2\n    lineHeight = lineHeight || 28\n    safeNum = lineHeight || 30\n}\n")),(0,i.kt)("h3",{id:"eslint\u5168\u5c40\u53d8\u91cf\u5ffd\u7565\u68c0\u67e5"},"eslint\u5168\u5c40\u53d8\u91cf\u5ffd\u7565\u68c0\u67e5"),(0,i.kt)("h4",{id:"\u5168\u5c40\u53d8\u91cf"},"\u5168\u5c40\u53d8\u91cf"),(0,i.kt)("p",null,"Eslint \u5168\u5c40\u53d8\u91cf\u672a\u5b9a\u4e49\u62a5\u9519\uff0c\u5728\u7528\u7684\u65f6\u5019 \u524d\u9762\u52a0\u4e00\u4e2a\u6ce8\u89e3\u5c31\u4e0d\u62a5\u9519\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/* global $ */\n")),(0,i.kt)("h3",{id:"eslint\u5355\u6587\u4ef6\u5ffd\u7565\u68c0\u67e5"},"eslint\u5355\u6587\u4ef6\u5ffd\u7565\u68c0\u67e5"),(0,i.kt)("p",null,"\u6587\u4ef6\u6700\u524d\u9762\u589e\u52a0 /",(0,i.kt)("em",{parentName:"p"}," eslint-disable "),"/"),(0,i.kt)("h4",{id:"script\u6807\u7b7e"},"script\u6807\u7b7e"),(0,i.kt)("p",null,"Js\u5b57\u7b26\u4e32\u663e\u793a\uff0c\u76f4\u63a5\u5199 '<'/script'>' \u4f1a\u63d0\u524d\u7ed3\u675fscript\u6807\u7b7e\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u7f16\u8bd1\u7684\u65f6\u4f1a\u88ab\u6b63\u786e\u89e3\u6790\uff0c\u4f46eslint\u4f1a\u62a5\u6ca1\u6709\u5fc5\u8981\u8f6c\u4e49\nconst string = '\\<\\/script>'\n\n// \u7528\u2019<\u2019+\u2019/script>\u2019\u7f16\u8bd1\u7684\u65f6\u4f1a\u88ab\u6b63\u786e\u89e3\u6790\uff0ceslint\u4e5f\u4e0d\u4f1a\u62a5\u9519\nconst string = '<' + '/script>'\n")))}u.isMDXComponent=!0}}]);