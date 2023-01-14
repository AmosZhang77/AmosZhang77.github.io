"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5478],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},l=void 0,c={unversionedId:"js/code_style/code_style",id:"js/code_style/code_style",title:"code_style",description:"\u5206\u53f7",source:"@site/docs/js/code_style/code_style.mdx",sourceDirName:"js/code_style",slug:"/js/code_style/",permalink:"/docs/js/code_style/",draft:!1,tags:[],version:"current",lastUpdatedAt:1669064019,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"string",permalink:"/docs/js/base/string/"},next:{title:"dom",permalink:"/docs/js/dom/"}},i={},s=[{value:"\u5206\u53f7",id:"\u5206\u53f7",level:3},{value:"\u65ad\u53e5",id:"\u65ad\u53e5",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5206\u53f7"},"\u5206\u53f7"),(0,o.kt)("p",null,"\u5728\u4e0d\u4f7f\u7528\u5c3e\u5206\u53f7\u7684standard\u4e2d"),(0,o.kt)("p",null,"\u4e0d\u8981\u4f7f\u7528 (, [, or ` \u7b49\u4f5c\u4e3a\u4e00\u884c\u7684\u5f00\u59cb\u3002\u5728\u6ca1\u6709\u5206\u53f7\u7684\u60c5\u51b5\u4e0b\u4ee3\u7801\u538b\u7f29\u540e\u4f1a\u5bfc\u81f4\u62a5\u9519\uff0c\u800c\u575a\u6301\u8fd9\u4e00\u89c4\u8303\u5219\u53ef\u907f\u514d\u51fa\u9519\u3002"),(0,o.kt)("p",null,"eslint: no-unexpected-multiline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u2713 ok\n;(function () {\n  window.alert('ok')\n}())\n\n// \u2717 avoid\n(function () {\n  window.alert('ok')\n}())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u2713 ok\n;[1, 2, 3].forEach(bar)\n\n// \u2717 avoid\n[1, 2, 3].forEach(bar)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u2713 ok\n;[1, 2, 3].forEach(bar)\n\n// \u2717 avoid\n[1, 2, 3].forEach(bar)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u2713 ok ;`hello`.indexOf('o')\n\n// \u2717 avoid\n`hello`.indexOf('o')\n")),(0,o.kt)("p",null,"\u5907\u6ce8\uff1a\u4e0a\u9762\u7684\u5199\u6cd5\u53ea\u80fd\u8bf4\u806a\u660e\u8fc7\u5934\u4e86\u3002"),(0,o.kt)("p",null,"\u5efa\u8bae\u5982\u4e0b\uff0c\u5199\u66f4\u53ef\u8bfb\u6613\u61c2\u7684\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u90a3\u4e9b\u770b\u4f3c\u6295\u5de7\u7684\u5199\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u8b6c\u5982\uff1a\n;[1, 2, 3].forEach(bar)\n\n// \u5efa\u8bae\u7684\u5199\u6cd5\u662f\uff1a\nvar nums = [1, 2, 3]\nnums.forEach(bar)\n")),(0,o.kt)("h3",{id:"\u65ad\u53e5"},"\u65ad\u53e5"),(0,o.kt)("p",null,"JS \u600e\u6837\u65ad\u53e5"),(0,o.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c \\n \u8868\u793a\u8bed\u53e5\u7ed3\u675f\uff0c\u9664\u975e\uff1a"),(0,o.kt)("p",null,"\u8be5\u8bed\u53e5\u6709\u672a\u95ed\u5408\u7684\u62ec\u53f7\uff0c \u6570\u7ec4\u5b57\u9762\u91cf\uff0c \u5bf9\u8c61\u5b57\u9762\u91cf \u6216\u8005\u5176\u4ed6\u4e0d\u80fd\u6b63\u5e38\u7ed3\u675f\u4e00\u6761\u8bed\u53e5\u7684\u60c5\u51b5\uff08\u8b6c\u5982\uff0c\u4ee5 . \u6216 , \u7ed3\u5c3e\uff09\n\u8be5\u8bed\u53e5\u662f -- \u6216\u8005 ++ \uff08\u5b83\u4f1a\u5c06\u540e\u9762\u7684\u5185\u5bb9\u8fdb\u884c\u81ea\u589e\u6216\u51cf\uff09\n\u8be5\u8bed\u53e5\u662f for()\uff0cwhile()\uff0cdo\uff0cif() \u6216\u8005 else \u5e76\u4e14\u6ca1\u6709 {\n\u4e0b\u4e00\u884c\u4ee5 [\uff0c(\uff0c+\uff0c*\uff0c/\uff0c-\uff0c,\uff0c. \u6216\u8005\u5176\u4ed6\u53ea\u4f1a\u5355\u72ec\u51fa\u73b0\u5728\u4e24\u5757\u5185\u5bb9\u95f4\u7684\u4e8c\u5143\u64cd\u4f5c\u7b26\u3002\n\u7b2c\u4e00\u6761\u5f88\u5bb9\u6613\u7406\u89e3\u3002\u5373\u4f7f\u5728 JSLint \u4e2d\uff0c\u4e5f\u5141\u8bb8 JSON\uff0c\u6784\u9020\u5668\u7684\u62ec\u53f7\u4e2d\uff0c\u4ee5\u53ca\u4f7f\u7528 var \u914d\u5408 , \u7ed3\u5c3e\u6765\u58f0\u660e\u591a\u4e2a\u53d8\u91cf\u7b49\u8fd9\u4e9b\u60c5\u4e2d\u5305\u542b \\n\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e8c\u6761\u6709\u70b9\u5947\u8469\u3002 \u6211\u8fd8\u60f3\u4e0d\u51fa\u8c01\u4f1a\uff08\u9664\u4e86\u8fd9\u91cc\u7528\u4f5c\u8ba8\u8bba\u5916\uff09\u5199\u51fa i\\n++\\nj \u8fd9\u6837\u7684\u4ee3\u7801\u6765\uff0c\u4e0d\u8fc7\uff0c\u987a\u4fbf\u8bf4\u4e00\u4e0b\uff0c\u8fd9\u79cd\u5199\u6cd5\u6700\u540e\u89e3\u6790\u7684\u7ed3\u679c\u662f i; ++j\uff0c\u800c\u4e0d\u662f i++; j\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e09\u6761\u4e5f\u5bb9\u6613\u7406\u89e3\u3002 if (x)\\ny() \u7b49\u4ef7\u4e8e if (x) { y() }\u3002\u89e3\u91ca\u5668\u4f1a\u5411\u4e0b\u5bfb\u627e\u5230\u4ee3\u7801\u5757\u6216\u4e00\u6761\u8bed\u53e5\u4e3a\u6b62\u3002"),(0,o.kt)("p",null,"; \u662f\u6761\u5408\u6cd5\u7684 JavaScript \u8bed\u53e5\u3002\u6240\u4ee5 if(x); \u7b49\u4ef7\u4e8e if(x){}\uff0c\u8868\u793a \u201c\u5982\u679c x \u4e3a\u771f\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u505a\u3002\u201d \u8fd9\u79cd\u5199\u6cd5\u5728\u5faa\u73af\u91cc\u9762\u53ef\u4ee5\u770b\u5230\uff0c\u5c31\u662f\u5f53\u6761\u4ef6\u5224\u65ad\u4e0e\u6761\u4ef6\u66f4\u65b0\u662f\u540c\u4e00\u4e2a\u65b9\u6cd5\u7684\u65f6\u5019\u3002 \u4e0d\u5e38\u89c1\uff0c\u4f46\u4e5f\u4e0d\u81f3\u4e8e\u6ca1\u542c\u8bf4\u8fc7\u5427\u3002"),(0,o.kt)("p",null,"\u7b2c\u56db\u6761\u5c31\u662f\u5e38\u89c1\u7684 \u201c\u770b\uff0c\u8bf4\u8fc7\u8981\u52a0\u5206\u53f7\uff01\u201d \u7684\u60c5\u5f62\u3002\u4f46\u8fd9\u4e9b\u60c5\u51b5\u53ef\u4ee5\u901a\u8fc7\u5728\u8bed\u53e5\u524d\u9762\u52a0\u4e0a\u5206\u53f7\u6765\u89e3\u51b3\uff0c\u5982\u679c\u4f60\u786e\u5b9a\u8be5\u8bed\u53e5\u8ddf\u524d\u9762\u7684\u6ca1\u5173\u7cfb\u7684\u8bdd\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5047\u5982\u4f60\u60f3\u8fd9\u6837\uff1a"),(0,o.kt)("p",null,"foo();\n","[1,2,3]",".forEach(bar);\n\u90a3\u4e48\u5b8c\u5168\u53ef\u4ee5\u8fd9\u6837\u6765\u5199\uff1a"),(0,o.kt)("p",null,"foo()\n;","[1,2,3]",".forEach(bar)\n\u540e\u8005\u7684\u597d\u5904\u662f\u5206\u53f7\u6bd4\u8f83\u77a9\u76ee\uff0c\u4e00\u65e6\u4e60\u60ef\u540e\u4fbf\u518d\u4e5f\u4e0d\u4f1a\u770b\u5230\u4ee5 ( \u548c [ \u5f00\u5934\u53c8\u4e0d\u5e26\u5206\u53f7\u7684\u8bed\u53e5\u4e86\u3002"))}u.isMDXComponent=!0}}]);