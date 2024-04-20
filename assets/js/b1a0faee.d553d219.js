"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8214],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),s=(t(7294),t(3905));const l={},a=void 0,o={unversionedId:"js/base/string/string",id:"js/base/string/string",title:"string",description:"\u5b57\u7b26\u4e32",source:"@site/docs/js/base/string/string.mdx",sourceDirName:"js/base/string",slug:"/js/base/string/",permalink:"/docs/js/base/string/",draft:!1,tags:[],version:"current",lastUpdatedAt:1692350718,formattedLastUpdatedAt:"2023\u5e748\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/docs/js/base/set/"},next:{title:"this",permalink:"/docs/js/base/this/"}},i={},c=[{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:2},{value:"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32",level:3},{value:"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570",id:"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570",level:3},{value:"\u6570\u5b57\u62fc\u63a5",id:"\u6570\u5b57\u62fc\u63a5",level:3},{value:"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32",id:"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32",level:3},{value:"\u5b57\u7b26\u4e32\u5207\u5272\u6210\u6570\u7ec4",id:"\u5b57\u7b26\u4e32\u5207\u5272\u6210\u6570\u7ec4",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,s.kt)("h3",{id:"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5b57\u7b26\u4e32"),(0,s.kt)("p",null,"String.prototype.includes()"),(0,s.kt)("p",null,"includes() \u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32searchString\u662f\u5426\u5305\u542b\u5728\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32str\u4e2d\uff0c\u6839\u636e\u60c5\u51b5\u8fd4\u56de true \u6216 false\u3002"),(0,s.kt)("p",null,"\u8bed\u6cd5"),(0,s.kt)("p",null,"str.includes(searchString","[, position]",")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u53c2\u6570\n searchString searchArray\n \u8981\u5224\u65ad\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u5176\u4ed6\u5b57\u7b26\u4e32\u3002\n \u5728\u6570\u7ec4\u4e2d\u627e\u662f\u5426\u5305\u542b\u5143\u67d0\u4e00\u4e2a\u5143\u7d20\u3002\n \u8fd4\u56detrue \u6216\u8005false\n\n position \u53ef\u9009\n \u4ece\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u54ea\u4e2a\u7d22\u5f15\u4f4d\u7f6e\u5f00\u59cb\u641c\u5bfb\u5b50\u5b57\u7b26\u4e32\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002\n */\nconst str = abcd\nstr.includes('c', position) // true\n['a','b','c'].includes('c', position) // true\n")),(0,s.kt)("p",null,"\u533a\u5206\u5927\u5c0f\u5199 includes() \u65b9\u6cd5\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u4f1a\u8fd4\u56de false \uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"'Blue Whale'.includes('blue'); // returns false\n")),(0,s.kt)("p",null,"\u5b9e\u4f8b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var str = 'To be, or not to be, that is the question.';\n\nconsole.log(str.includes('To be'));       // true\nconsole.log(str.includes('question'));    // true\nconsole.log(str.includes('nonexistent')); // false\nconsole.log(str.includes('To be', 1));    // false\nconsole.log(str.includes('TO BE'));       // false\n")),(0,s.kt)("h3",{id:"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570"},"\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u8f93\u5165\u6570\u5b57\uff0c\u8f93\u51fa\u5b57\u7b26\u4e32\nvar num = 2.446242342;\nnum = num.toFixed(2);  // \u8f93\u51fa\u7ed3\u679c\u4e3a 2.45\n\n// \u8f93\u5165\u6570\u5b57\uff0c\u8f93\u51fa\u6570\u5b57\nMath.floor(15.7784514000 * 100) / 100   // \b\u8f93\u51fa\u7ed3\u679c\u4e3a 15.77\n")),(0,s.kt)("h3",{id:"\u6570\u5b57\u62fc\u63a5"},"\u6570\u5b57\u62fc\u63a5"),(0,s.kt)("p",null,"\u60f3\u8981\u62fc\u63a5\u4fe9\u4e2a\u6570\u5b57\uff0c\u800c\u4e0d\u662f\u4fe9\u4e2a\u6570\u5b57\u76f8\u52a0\u7684\u60c5\u51b5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const a = 123\nconst b = 456\nconst c = String(a) + String(b) // '123456'\nconst d = `${a}${b}` // '123456' \u6a21\u677f\u5b57\u7b26\u4e32\u66f4\u65b9\u4fbf\n")),(0,s.kt)("h3",{id:"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32"},"\u6570\u5b57\u52a0\u9017\u53f7\u8f6c\u5b57\u7b26\u4e32"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function numToStr (num){\n  return  Number(12345678.22).toLocaleString()\n}\nnumToStr(12345678.22) //12,345,678.22\n")),(0,s.kt)("h3",{id:"\u5b57\u7b26\u4e32\u5207\u5272\u6210\u6570\u7ec4"},"\u5b57\u7b26\u4e32\u5207\u5272\u6210\u6570\u7ec4"),(0,s.kt)("p",null,"split"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u4ee5\u9017\u53f7\u5207\u5272\nlet s  ='12,34,56'\ns.split(',') // ['12','34'.'56']\n\n// \u540c\u65f6\u4ee5\u4e2d\u82f1\u6587\u9017\u53f7\u5207\u5272\n// split\nlet s2  ='12,34\uff0c56'\ns.split('') // ['12','34'.'56']\nfunction splitByComma(str) {\n    // \u521b\u5efa\u4e00\u4e2a\u7a7a\u6570\u7ec4\u6765\u5b58\u50a8\u5206\u5272\u540e\u7684\u7ed3\u679c\n    let result = [];\n    let currentWord = '';\n    let isInWord = false; // \u6807\u8bb0\u5f53\u524d\u662f\u5426\u5728\u5904\u7406\u4e00\u4e2a\u5355\u8bcd\n\n    // \u904d\u5386\u5b57\u7b26\u4e32\u7684\u6bcf\u4e2a\u5b57\u7b26\n    for (let i = 0; i < str.length; i++) {\n        const char = str[i];\n\n        // \u68c0\u67e5\u5b57\u7b26\u662f\u5426\u662f\u9017\u53f7\uff08\u4e2d\u6587\u6216\u82f1\u6587\uff09\n        if (char === '\uff0c' || char === ',') {\n            if (isInWord) {\n                // \u5982\u679c\u5f53\u524d\u5728\u5904\u7406\u4e00\u4e2a\u5355\u8bcd\uff0c\u5219\u5c06\u5355\u8bcd\u6dfb\u52a0\u5230\u7ed3\u679c\u6570\u7ec4\uff0c\u5e76\u91cd\u7f6e\u5f53\u524d\u5355\u8bcd\u548c\u72b6\u6001\n                result.push(currentWord);\n                currentWord = '';\n                isInWord = false;\n            }\n        } else {\n            // \u5982\u679c\u4e0d\u662f\u9017\u53f7\uff0c\u5219\u5c06\u5b57\u7b26\u6dfb\u52a0\u5230\u5f53\u524d\u5355\u8bcd\n            currentWord += char;\n            isInWord = true;\n        }\n    }\n\n    // \u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u5355\u8bcd\u7ed3\u5c3e\uff0c\u5219\u5c06\u6700\u540e\u4e00\u4e2a\u5355\u8bcd\u6dfb\u52a0\u5230\u7ed3\u679c\u6570\u7ec4\n    if (isInWord) {\n        result.push(currentWord);\n    }\n\n    return result;\n}\n\n\n// \u6b63\u5219\u8868\u8fbe\u5f0f\u65b9\u6cd5\uff0c\u6027\u80fd\u7a0d\u5dee\u4e00\u70b9\nconst str = \"apple,banana\uff0ccherry\";\nconst array = str.split(/[,\uff0c]/); // \u4f7f\u7528\u82f1\u6587\u9017\u53f7\u548c\u4e2d\u6587\u9017\u53f7\u4f5c\u4e3a\u5206\u9694\u7b26\nconsole.log(array); // \u8f93\u51fa: [\"apple\", \"banana\", \"cherry\"]\n\n")))}p.isMDXComponent=!0}}]);