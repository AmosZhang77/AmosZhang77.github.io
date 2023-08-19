"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=r(7462),o=r(7294),a=r(3905);const l=()=>{const e=(0,o.useRef)(),[t,r]=(0,o.useState)(!1);let n;const[a,l]=(0,o.useState)(!1),c=()=>{e.current.play()},i=()=>{console.log("\u7528\u6237\u5df2\u7ecf\u548c\u7f51\u9875\u6709\u8fc7\u4ea4\u4e92\uff0cjs\u53ef\u4ee5\u64cd\u4f5c\u64ad\u653e\u4e86"),r(!0)};return(0,o.useEffect)((()=>(n=document.body.addEventListener("click",i),()=>{var e;null==(e=n)||e.removeEventListener("click",i)})),[]),(0,o.useEffect)((()=>{console.log("canAutoPlay",t),t&&setTimeout((()=>{c()}),2e3)}),[t]),(0,o.useEffect)((()=>{console.log("canAutoPlay",t),t&&a&&setTimeout((()=>{c()}),2e3)}),[t,a]),o.createElement("div",null,o.createElement("div",{className:"videoBox"},o.createElement("audio",{ref:e,src:"/audio/20220605_2_wait_a_minute_amos.mp3",controls:!0,autoPlay:"autoplay",preload:"auto",loop:"loop",onCanPlay:()=>{console.log("\u52a0\u8f7d\u97f3\u4e50\u5b8c\u6bd5\u4e86"),l(!0)}})),o.createElement("div",{className:"btnBar"},o.createElement("button",{onClick:c},"\u64ad\u653e"),o.createElement("button",{onClick:()=>{e.current.pause()}},"\u6682\u505c"),o.createElement("button",{onClick:()=>{e.current.muted=!e.current.muted}},"\u9759\u97f3"),o.createElement("button",{onClick:()=>{e.current.volume+.1<1?e.current.volume+=.1:e.current.volume=1}},"\u58f0\u97f3+"),o.createElement("button",{onClick:()=>{try{e.current.volume-=.1}catch(t){e.current.volume=0}}},"\u58f0\u97f3-")))},c={sidebar_position:1},i=void 0,u={unversionedId:"intro",id:"intro",title:"intro",description:"\u5bfc\u8bfb",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",lastUpdatedAt:1676617871,formattedLastUpdatedAt:"2023\u5e742\u670817\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"html",permalink:"/docs/html/"}},s={},p=[{value:"\u5bfc\u8bfb",id:"\u5bfc\u8bfb",level:2},{value:"\u672c\u6587\u6863\u57fa\u672c\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a",id:"\u672c\u6587\u6863\u57fa\u672c\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219",level:3},{value:"\u7ad9\u957f\u5531\u6b4c\u5566!",id:"\u7ad9\u957f\u5531\u6b4c\u5566",level:3}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5bfc\u8bfb"},"\u5bfc\u8bfb"),(0,a.kt)("h3",{id:"\u672c\u6587\u6863\u57fa\u672c\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219"},"\u672c\u6587\u6863\u57fa\u672c\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"[]"))," \u4e2d\u7684\u53c2\u6570\u8868\u793a\u53ef\u9009\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"<",">"))," \u4e2d\u7684\u53c2\u6570\u8868\u793a\u5fc5\u9009\u53c2\u6570"),(0,a.kt)("h3",{id:"\u7ad9\u957f\u5531\u6b4c\u5566"},"\u7ad9\u957f\u5531\u6b4c\u5566!"),(0,a.kt)("p",null,"\u70b9\u51fb\u64ad\u653e\uff0c\u606d\u559c\u60a8\u83b7\u5f97\u8fa3\u8033\u6735\u6b4c\u66f2\u514d\u8d39\u6b23\u8d4f"),(0,a.kt)("div",null,(0,a.kt)(l,{mdxType:"V"})))}d.isMDXComponent=!0}}]);