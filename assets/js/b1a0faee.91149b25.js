"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={},l=void 0,o={unversionedId:"js/base/string/string",id:"js/base/string/string",title:"string",description:"\u5b57\u7b26\u4e32",source:"@site/docs/js/base/string/string.mdx",sourceDirName:"js/base/string",slug:"/js/base/string/",permalink:"/docs/js/base/string/",draft:!1,tags:[],version:"current",lastUpdatedAt:1676617871,formattedLastUpdatedAt:"2023\u5e742\u670817\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/docs/js/base/set/"},next:{title:"code_style",permalink:"/docs/js/code_style/"}},i={},c=[{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:2},{value:"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32",level:3},{value:"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570",id:"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570",level:3},{value:"\u6570\u5b57\u62fc\u63a5",id:"\u6570\u5b57\u62fc\u63a5",level:3},{value:"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32",id:"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,a.kt)("h3",{id:"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"String.prototype.includes()"),(0,a.kt)("p",null,"includes() \u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32searchString\u662f\u5426\u5305\u542b\u5728\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32str\u4e2d\uff0c\u6839\u636e\u60c5\u51b5\u8fd4\u56de true \u6216 false\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5"),(0,a.kt)("p",null,"str.includes(searchString","[, position]",")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u53c2\u6570\n searchString searchArray\n \u8981\u5224\u65ad\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5176\u4ed6\u5b57\u7b26\u4e32\u3002\n \u5728\u6570\u7ec4\u4e2d\u627e\u662f\u5426\u5305\u542b\u5143\u67d0\u4e00\u4e2a\u5143\u7d20\u3002\n \u8fd4\u56detrue \u6216\u8005false\n\n position \u53ef\u9009\n \u4ece\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u54ea\u4e2a\u7d22\u5f15\u4f4d\u7f6e\u5f00\u59cb\u641c\u5bfb\u5b50\u5b57\u7b26\u4e32\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002\n */\nconst str = abcd\nstr.includes('c', position) // true\n['a','b','c'].includes('c', position) // true\n")),(0,a.kt)("p",null,"\u533a\u5206\u5927\u5c0f\u5199 includes() \u65b9\u6cd5\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u4f1a\u8fd4\u56de false \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'Blue Whale'.includes('blue'); // returns false\n")),(0,a.kt)("p",null,"\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var str = 'To be, or not to be, that is the question.';\n\nconsole.log(str.includes('To be'));       // true\nconsole.log(str.includes('question'));    // true\nconsole.log(str.includes('nonexistent')); // false\nconsole.log(str.includes('To be', 1));    // false\nconsole.log(str.includes('TO BE'));       // false\n")),(0,a.kt)("h3",{id:"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570"},"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u8f93\u5165\u6570\u5b57\uff0c\u8f93\u51fa\u5b57\u7b26\u4e32\nvar num = 2.446242342;\nnum = num.toFixed(2);  // \u8f93\u51fa\u7ed3\u679c\u4e3a 2.45\n\n// \u8f93\u5165\u6570\u5b57\uff0c\u8f93\u51fa\u6570\u5b57\nMath.floor(15.7784514000 * 100) / 100   // \b\u8f93\u51fa\u7ed3\u679c\u4e3a 15.77\n")),(0,a.kt)("h3",{id:"\u6570\u5b57\u62fc\u63a5"},"\u6570\u5b57\u62fc\u63a5"),(0,a.kt)("p",null,"\u60f3\u8981\u62fc\u63a5\u4fe9\u4e2a\u6570\u5b57\uff0c\u800c\u4e0d\u662f\u4fe9\u4e2a\u6570\u5b57\u76f8\u52a0\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a = 123\nconst b = 456\nconst c = String(a) + String(b) // '123456'\nconst d = `${a}${b}` // '123456' \u6a21\u677f\u5b57\u7b26\u4e32\u66f4\u65b9\u4fbf\n")),(0,a.kt)("h3",{id:"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32"},"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function numToStr (num){\n  return  Number(12345678.22).toLocaleString()\n}\nnumToStr(12345678.22) //12,345,678.22\n")))}p.isMDXComponent=!0}}]);