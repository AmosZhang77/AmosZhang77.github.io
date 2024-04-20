"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?l.createElement(g,a(a({ref:t},c),{},{components:n})):l.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<r;d++)a[d]=n[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var l=n(7462),o=(n(7294),n(3905));const r={},a=void 0,i={unversionedId:"js/dom/dom",id:"js/dom/dom",title:"dom",description:"\u4e0b\u9762api\u65e0\u6cd5\u62ff\u5230\u5916\u8054css",source:"@site/docs/js/dom/dom.mdx",sourceDirName:"js/dom",slug:"/js/dom/",permalink:"/docs/js/dom/",draft:!1,tags:[],version:"current",lastUpdatedAt:1706087011,formattedLastUpdatedAt:"2024\u5e741\u670824\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"code_style",permalink:"/docs/js/code_style/"},next:{title:"input",permalink:"/docs/js/dom/input/"}},s={},d=[{value:"\u83b7\u53d6\u5143\u7d20\u5f53\u524d\u6837\u5f0f",id:"\u83b7\u53d6\u5143\u7d20\u5f53\u524d\u6837\u5f0f",level:3},{value:"\u62ff\u5230\u67d0dom\u6240\u5c5e\u7684 #document",id:"\u62ff\u5230\u67d0dom\u6240\u5c5e\u7684-document",level:3},{value:"clientHeight",id:"clientheight",level:3},{value:"offsetHeight",id:"offsetheight",level:3},{value:"scrollHeight",id:"scrollheight",level:3},{value:"scrollTop",id:"scrolltop",level:3},{value:"addEventListener",id:"addeventlistener",level:3},{value:"\u6d4f\u89c8\u5668\u4e0d\u540c\u7a97\u53e3\u4e92\u53d1\u6d88\u606f window.postMessage",id:"\u6d4f\u89c8\u5668\u4e0d\u540c\u7a97\u53e3\u4e92\u53d1\u6d88\u606f-windowpostmessage",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0b\u9762api\u65e0\u6cd5\u62ff\u5230\u5916\u8054css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let width = dom.style.width;\n")),(0,o.kt)("h3",{id:"\u83b7\u53d6\u5143\u7d20\u5f53\u524d\u6837\u5f0f"},"\u83b7\u53d6\u5143\u7d20\u5f53\u524d\u6837\u5f0f"),(0,o.kt)("p",null,"\u53ef\u4ee5\u83b7\u53d6\u5230\u6700\u7ec8\u6837\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let style = window.getComputedStyle(element, [pseudoElt]);\n")),(0,o.kt)("p",null,"element:\u7528\u4e8e\u83b7\u53d6\u8ba1\u7b97\u6837\u5f0f\u7684Element\u3002 pseudoElt \u53ef\u9009:\u6307\u5b9a\u4e00\u4e2a\u8981\u5339\u914d\u7684\u4f2a\u5143\u7d20\u7684\u5b57\u7b26\u4e32\u3002\u5fc5\u987b\u5bf9\u666e\u901a\u5143\u7d20\u7701\u7565\uff08\u6216null\uff09\u3002\n\u8fd4\u56de\u7684style\uff08\u53ea\u8bfb\uff09\u662f\u4e00\u4e2a\u5b9e\u65f6\u7684 CSSStyleDeclaration\n\u5bf9\u8c61\uff0c\u5f53\u5143\u7d20\u7684\u6837\u5f0f\u66f4\u6539\u65f6\uff0c\u5b83\u4f1a\u81ea\u52a8\u66f4\u65b0\u672c\u8eab\u3002"),(0,o.kt)("h3",{id:"\u62ff\u5230\u67d0dom\u6240\u5c5e\u7684-document"},"\u62ff\u5230\u67d0dom\u6240\u5c5e\u7684 #document"),(0,o.kt)("p",null,"\u5728 HTML \u4e2d\uff0cHTML \u6587\u6863\u672c\u8eab\u59cb\u7ec8\u662f\u5143\u7d20\u7684 ownerDocument\u3002"),(0,o.kt)("p",null,"\u53ef\u7528\u4e8e\u4f5c\u4e3a\u5168\u5c40dom\uff0c\u7528\u4e8e\u6dfb\u52a0\u5168\u5c40\u4e8b\u4ef6\u3002\u6bd4\u5982\u70b9\u51fb\u7a7a\u767d\u5173\u95ed\u67d0\u4e2a\u5c0f\u6846"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'document.getElementById("demo").ownerDocument\n')),(0,o.kt)("h3",{id:"clientheight"},"clientHeight"),(0,o.kt)("p",null,"\u89c6\u7a97\u9ad8\u5ea6\uff0c\u5305\u62ecpadding\uff0c\u4e0d\u5305\u62ecborder"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3929).Z,width:"510",height:"305"}),"\n,"),(0,o.kt)("h3",{id:"offsetheight"},"offsetHeight"),(0,o.kt)("p",null,"\u9ad8\u5ea6\uff0c\u5305\u62ecpadding\uff0c\u5305\u62ecborder"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6584).Z,width:"501",height:"306"})),(0,o.kt)("h3",{id:"scrollheight"},"scrollHeight"),(0,o.kt)("p",null,"\u89c6\u7a97\u9ad8\u5ea6 + \u89c6\u7a97\u4e0a\u65b9\u88ab\u6eda\u51fa\u89c6\u7a97\u7684\u9ad8\u5ea6 + \u89c6\u7a97\u4e0b\u65b9\u7684\u9ad8\u5ea6"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7913).Z,width:"634",height:"500"})),(0,o.kt)("h3",{id:"scrolltop"},"scrollTop"),(0,o.kt)("p",null,"\u6574\u4e2a\u6587\u6863\u9876\u90e8\u79bb\u89c6\u7a97\u9876\u90e8\u7684\u9ad8\u5ea6"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5690).Z,width:"639",height:"508"})),(0,o.kt)("p",null,"1.ahook\u7684infiniteScroll\u5224\u65ad\u662f\u5426\u52a0\u8f7d\u66f4\u591a"),(0,o.kt)("p",null,"scrollHeight\u4e0b\u6cbf\u8d85\u51fa\u89c6\u7a97\u4e0b\u6cbfthreshold\u9ad8\u5ea6\u5c31\u5f00\u59cbloadMore\u3002"),(0,o.kt)("p",null,"\u8bbe\u7f6e\u5927\uff0c\u53ef\u4ee5\u66f4\u63d0\u524d\u5730\u52a0\u8f7d\u4e1c\u897f\uff0c\u786e\u4fdd\u66f4\u987a\u6ed1\u3002"),(0,o.kt)("p",null,"\u8bbe\u7f6e\u4e3a-1\uff0c\u903b\u8f91\u4e0a\u4f1a\u4f7f\u6574\u4e2a\u8ba1\u7b97\u5f0f\u6c38\u8fdc\u4e0d\u6210\u7acb\uff0c\u6c38\u8fdc\u4e0d\u6267\u884cloadMore"),(0,o.kt)("p",null,"\u6eda\u5230\u5e95\u7684\u65f6\u5019scrollHeight = clientHeight + scrollTop\uff0c\u6240\u4ee5threshold<0\u65f6\uff0c\u6761\u4ef6\u6c38\u8fdc\u4e0d\u4f1a\u6210\u7acb\u3002"),(0,o.kt)("p",null,"2.\u5982\u679c\u5143\u7d20\u5bb9\u5668target\u662f\u5728tabs\u5185\u90e8\uff0c\u4f1a\u51fa\u73b0display:none\u7684\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"ahook\u62ff\u4e0b\u9762\u5c3a\u5bf8\u7684\u65f6\u5019\u90fd\u53ea\u80fd\u62ff\u52300\uff08\u6ca1\u6709\u7c7b\u4f3c\u5148\u663e\u793a\uff0c\u62ff\u5230\u5c3a\u5bf8\uff0c\u518d\u9690\u85cf\u7684\u7279\u6b8a\u5904\u7406\uff09\uff0c"),(0,o.kt)("p",null,"\u5373\uff0cscrollHeight\u3001clientHeight\u3001scrollTop\u5747\u4e3a0\uff0c\u5f53threshold\u8bbe\u7f6e\u4e3a\u5927\u4e8e\u7b49\u4e8e0\u65f6\uff0c\u6761\u4ef6\u6c38\u8fdc\u6210\u7acb\uff0c\u7b2c\u4e00\u6b21\u5c31\u4f1a\u75af\u72c2\u52a0\u8f7d\u81f3\u5e95\u90e8\u3002"),(0,o.kt)("p",null,"\u5982\uff0c\u8bbe\u7f6e\u4e3a\u8d1f\u503c\uff0c\u7b49\u5f0f\u6c38\u8fdc\u4e0d\u6210\u7acb\uff0c\u6c38\u8fdc\u65e0\u6cd5loadMore\u3002"),(0,o.kt)("p",null,"\u6545target\u6709display:none\u7684\u60c5\u51b5\u65f6\uff0c\u65e0\u6cd5\u4f7f\u7528ahook\u91cc\u9762\u7684infiniteScroll"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (el.scrollHeight - el.scrollTop <= el.clientHeight + threshold) {\n  loadMore();\n}\n")),(0,o.kt)("h3",{id:"addeventlistener"},"addEventListener"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u53c23\uff1afalse \u5192\u6ce1\u9636\u6bb5\u89e6\u53d1\u3002\u5982\u8bbe\u7f6e\u4e3atrue\uff0c\u6355\u83b7\u9636\u6bb5\u89e6\u53d1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\ndom.addEventListener('notificationclose', function(e) {\n  console.log('Closed notification: ' + primaryKey)\n},false)\n")),(0,o.kt)("h3",{id:"\u6d4f\u89c8\u5668\u4e0d\u540c\u7a97\u53e3\u4e92\u53d1\u6d88\u606f-windowpostmessage"},"\u6d4f\u89c8\u5668\u4e0d\u540c\u7a97\u53e3\u4e92\u53d1\u6d88\u606f window.postMessage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// a \u7a97\u53e3\u4e2d\nwindow.postMessage('\u6d88\u606f\u540d','http://b\u7a97\u53e3\u5730\u5740')\n// b\u7a97\u53e3\u4e2d\nwindow.addEventListener('message',function (e){\n    console.log(e)\n})\n")))}p.isMDXComponent=!0},3929:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/clientHeight-0104b837f68d5e50d33826100d07200d.png"},6584:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/offsetHeight-da96b28e4c290dbfd6a5db72ad55d237.png"},7913:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/scrollHeight-21a20e95a504b4770107aef14d096e44.png"},5690:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/scrollTop-3b9d58ea23da972381cb7ad4f1acac50.png"}}]);