"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?l.createElement(f,a(a({ref:t},p),{},{components:n})):l.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3453:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294);const r=()=>{const e=(0,l.useRef)(),[t,n]=((0,l.useRef)(),(0,l.useState)(!1)),[r,o]=(0,l.useState)(!1);let a;const u=()=>{console.log("startPlay"),e.current.play()},i=()=>{console.log("\u7528\u6237\u5df2\u7ecf\u548c\u7f51\u9875\u6709\u8fc7\u4ea4\u4e92\uff0cjs\u53ef\u4ee5\u64cd\u4f5c\u64ad\u653e\u4e86"),n(!0)};return(0,l.useEffect)((()=>(a=document.body.addEventListener("click",i),()=>{var e;null==(e=a)||e.removeEventListener("click",i)})),[]),(0,l.useEffect)((()=>{console.log("canAutoPlay",t),t&&setTimeout((()=>{u()}),2e3)}),[t]),(0,l.useEffect)((()=>{console.log("canAutoPlay",t),t&&r&&setTimeout((()=>{u()}),2e3)}),[t,r]),l.createElement("div",null,l.createElement("div",{className:"videoBox"},l.createElement("audio",{ref:e,src:"/audio/fairy_tales_town.mp3",controls:!0,autoPlay:"autoplay",preload:"auto",loop:"loop",onCanPlay:()=>{console.log("\u52a0\u8f7d\u97f3\u4e50\u5b8c\u6bd5\u4e86"),o(!0)}})))}},9121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(7462),r=(n(7294),n(3905)),o=n(3453);const a={slug:"introduce",title:"\u81ea\u6211\u4ecb\u7ecd(\u76f8\u4eb2\u4e13\u7528)",authors:["AmosZhang"],tags:["introduce","mp3"]},u=void 0,i={permalink:"/blog/introduce",source:"@site/blog/2022-1-1- selfintroduce/index.mdx",title:"\u81ea\u6211\u4ecb\u7ecd(\u76f8\u4eb2\u4e13\u7528)",description:"\uff08\u975e\u5c65\u5386\u6027\u81ea\u6211\u4ecb\u7ecd\uff0c\u770b\u6280\u672f\u6587\u6863\u7684\u5c0f\u4f19\u4f34\u4eec\u8bf7\u5ffd\u7565\u6b64\u9875\uff09",date:"2022-01-01T00:00:00.000Z",formattedDate:"2022\u5e741\u67081\u65e5",tags:[{label:"introduce",permalink:"/blog/tags/introduce"},{label:"mp3",permalink:"/blog/tags/mp-3"}],readingTime:7.035,hasTruncateMarker:!1,authors:[{name:"Amos Zhang",title:"frontend engineer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/22658529?v=4",key:"AmosZhang"}],frontMatter:{slug:"introduce",title:"\u81ea\u6211\u4ecb\u7ecd(\u76f8\u4eb2\u4e13\u7528)",authors:["AmosZhang"],tags:["introduce","mp3"]},prevItem:{title:"\u7167\u9a97",permalink:"/blog/pic"},nextItem:{title:"\u4e70\u4e00\u9001\u4e00",permalink:"/blog/buy one, get two"}},c={authorsImageUrls:[void 0]},p=[{value:"\uff08\u975e\u5c65\u5386\u6027\u81ea\u6211\u4ecb\u7ecd\uff0c\u770b\u6280\u672f\u6587\u6863\u7684\u5c0f\u4f19\u4f34\u4eec\u8bf7\u5ffd\u7565\u6b64\u9875\uff09",id:"\u975e\u5c65\u5386\u6027\u81ea\u6211\u4ecb\u7ecd\u770b\u6280\u672f\u6587\u6863\u7684\u5c0f\u4f19\u4f34\u4eec\u8bf7\u5ffd\u7565\u6b64\u9875",level:3},{value:"\u672c\u9875\u9762\u4ec5\u7528\u4e8e\u5bfb\u627e\u4e00\u4f4d\u50cf\u631a\u53cb\u822c\u7684\u4f34\u4fa3\u5171\u5ea6\u4f59\u751f",id:"\u672c\u9875\u9762\u4ec5\u7528\u4e8e\u5bfb\u627e\u4e00\u4f4d\u50cf\u631a\u53cb\u822c\u7684\u4f34\u4fa3\u5171\u5ea6\u4f59\u751f",level:3},{value:"\u4e2a\u4eba\u60c5\u51b5",id:"\u4e2a\u4eba\u60c5\u51b5",level:3},{value:"\u5a5a\u59fb\u7279\u6027\u66f2\u7ebf",id:"\u5a5a\u59fb\u7279\u6027\u66f2\u7ebf",level:3},{value:"\u4e2a\u4eba\u5a5a\u59fb\u89c2\u5ff5",id:"\u4e2a\u4eba\u5a5a\u59fb\u89c2\u5ff5",level:3},{value:"\u9700\u6c42\u6587\u6863",id:"\u9700\u6c42\u6587\u6863",level:3},{value:"\u8054\u7cfb\u65b9\u5f0f",id:"\u8054\u7cfb\u65b9\u5f0f",level:3}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u975e\u5c65\u5386\u6027\u81ea\u6211\u4ecb\u7ecd\u770b\u6280\u672f\u6587\u6863\u7684\u5c0f\u4f19\u4f34\u4eec\u8bf7\u5ffd\u7565\u6b64\u9875"},"\uff08\u975e\u5c65\u5386\u6027\u81ea\u6211\u4ecb\u7ecd\uff0c\u770b\u6280\u672f\u6587\u6863\u7684\u5c0f\u4f19\u4f34\u4eec\u8bf7\u5ffd\u7565\u6b64\u9875\uff09"),(0,r.kt)("p",null,"\uff08\u5982\u679c\u65b9\u4fbf\u53ef\u4ee5\u8003\u8651\u70b9\u51fb\u64ad\u653e\u80cc\u666f\u97f3\u4e50\uff09"),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"A"})),(0,r.kt)("h3",{id:"\u672c\u9875\u9762\u4ec5\u7528\u4e8e\u5bfb\u627e\u4e00\u4f4d\u50cf\u631a\u53cb\u822c\u7684\u4f34\u4fa3\u5171\u5ea6\u4f59\u751f"},"\u672c\u9875\u9762\u4ec5\u7528\u4e8e\u5bfb\u627e\u4e00\u4f4d\u50cf\u631a\u53cb\u822c\u7684\u4f34\u4fa3\u5171\u5ea6\u4f59\u751f"),(0,r.kt)("h3",{id:"\u4e2a\u4eba\u60c5\u51b5"},"\u4e2a\u4eba\u60c5\u51b5"),(0,r.kt)("p",null,"\u79bb\u5f02\uff0c\u4e00\u5b50\uff0c\u629a\u517b\u6743\u8ba9\u7ed9\u4e86\u5e74\u85aa40w\u7684\u524d\u59bb."),(0,r.kt)("p",null,"\u79bb\u5a5a\u539f\u56e0\uff1a\u672c\u4eba\u5bf9\u5bb6\u5ead\u6bd4\u8f83\u656c\u754f\uff0c\u4f46\u662f\u524d\u59bb\u4e0e\u672c\u4eba\u7684\u5bb6\u5ead\u89c2\u5ff5\u76f8\u5dee\u5de8\u5927\uff0c\u672c\u4eba\u56e0\u6b64\u5bf9\u5bb6\u5ead\u7684\u5e0c\u671b\u5d29\u584c\u4e86\u3002\u575a\u6301\u4e00\u5e74\u65f6\u95f4\u90fd\u65e0\u6cd5\u529d\u963b\u524d\u59bb\u9996\u6b21\u63a5\u89e6\u80a1\u7968+\u968f\u673a\u5c0f\u7ea2\u4e66\u4e3b\u64ad\u8ddf\u4e70+allin+\u501f\u8d37\u578b\u7092\u80a1\u3002(\u4e2a\u4eba\u5355\u65b9\u9762\u603b\u7ed3\uff0c\u80af\u5b9a\u4e0d\u516c\u5141)\u3002"),(0,r.kt)("p",null,"\u751f\u4ea7\u5e74\u4efd\uff1a87\uff0c\u5b66\u5386\uff1a\u7edf\u62db\u91ce\u9e21\u4e8c\u672c\uff0c\u8eab\u9ad8\uff1a168\uff08\u60a8\u5c06\u6765\u53ef\u80fd\u4f1a\u6709\u66f4\u591a\u7a7f\u8fd0\u52a8\u978b\u7684\u673a\u4f1a\uff09\uff0c\u4f53\u91cd\uff1a64\uff0c\u5f53\u524d\u804c\u4e1a\uff1a\u7801\u519c\uff0c\u4e0a\u6d77\u8bdd\u8f83\u4e3a\u6d41\u5229\uff08\u56fd\u9645\u4e3b\u4e49\uff0c\u65e0\u5730\u57df\u79cd\u65cf\u6b67\u89c6\uff09"),(0,r.kt)("p",null,"\u672c\u4eba\u7279\u5f81: \u6b63\u76f4\u3001\u5b85\u7537\u3002\u5e7d\u9ed8\uff0c\u53ef\u9017\u903c\u8bdd\u75e8\u3001\u4ea6\u53ef\u65af\u6587\u95f7\u9a9a\u3001\u4e25\u4e8e\u5f8b\u5df1\u5bbd\u4ee5\u5f85\u4eba\u3001\u6613\u5feb\u4e50\u4f53\u8d28\u3001\u7269\u6b32\u8f83\u4f4e\u3001\u6709\u65f6\u5019\u4f1a\u5527\u5527\u6b6a\u6b6a\u5570\u5570\u55e6\u55e6\u3002"),(0,r.kt)("p",null,"\u771f\u5b85\u7537\uff08\u5c01\u63a7\u5728\u5bb6\u5f853\u4e2a\u6708\u5982\u9c7c\u5f97\u6c34\uff09\u53ea\u57282077\u4e2d\u53bb\u8fc7\u9152\u5427\uff08\u53ea\u662f\u56e0\u4e3a\u6ca1\u4ec0\u4e48\u5174\u8da3\uff09"),(0,r.kt)("p",null,"\u4f46\u51fa\u95e8\u81f3\u5c11\u4e0d\u4f1a\u8ff7\u8def\uff0c\u53bb\u8fc7\u5317-\u54c8\u5c14\u6ee8\uff0c\u897f\u5317-\u94f6\u5ddd\uff0c\u9102\u5c14\u591a\u65af\uff0c\u897f-\u91cd\u5e86\uff0c\u897f\u5357-\u5927\u7406\uff0c\u5357-\u5e7f\u5dde\uff0c\u4e1c\u5357-\u53a6\u95e8\uff0c\u611f\u8c22\u67d0\u4f4d\u6211\u7279\u522b\u559c\u6b22\u7684\u524d\u8001\u677f\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7528\u6536\u5165\u6765\u8861\u91cf\u4e8b\u4e1a\u5fc3\uff0c\u786e\u5b9e\u662f\u4e2a\u6ca1\u6709\u4ec0\u4e48\u4e8b\u4e1a\u5fc3\u7684\u4eba\u3002\u7528\u52aa\u529b\u505a\u597d\u6765\u8861\u91cf\uff0c\u8fd8\u662f\u6709\u4e00\u70b9\u70b9\u4e8b\u4e1a\u5fc3\u7684\u3002\u80fd\u627e\u5230\u5e76\u4e14\u505a\u81ea\u5df1\u559c\u6b22\u7684\u5de5\u4f5c\u662f\u53ef\u9047\u4e0d\u53ef\u6c42\u7684\u4e8b\uff0c\u6240\u4ee5\u81ea\u5df1\u975e\u5e38\u6709\u5e78\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\u7a0b\u5e8f\u5458\u662f\u5f3a\u8111\u529b\u9752\u6625\u996d\u7684\u5de5\u4f5c\uff0c\u672c\u4eba\u4e3b\u89c2\u4e0a\u4f1a\u575a\u6301\uff0c\u5ba2\u89c2\u4e0a\u4e0d\u77e5\u9053\u54ea\u5929\u5f00\u59cb\u8d70\u4e0b\u5761\u8def\u3002"),(0,r.kt)("p",null,"\u4e0d\u5438\u70df\uff0c\u4e0d\u559d\u9152\uff0c\u4e0d\u8d4c\u535a\uff0c\u552f\u4e00\u7684\u4e0d\u826f\u55dc\u597d\u53ef\u80fd\u5c31\u662f\u6253\u6e38\u620f\uff08\u4e0d\u6c89\u8ff7\uff0c\u4e0d\u73a9\u624b\u673a\u6e38\u620f\uff09"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e5f\u80fd\u73a9\u4e00\u4e0b\u6e38\u620f\uff0c\u300a\u53cc\u4eba\u6210\u884c\u300b\u4e00\u8d77\u901a\u5173\u5c31\u53ef\u4ee5\u8003\u8651\u7ed3\u5a5a\u4e86\uff0c\u54c8\u54c8\u54c8\uff08\u624b\u52a8\u72d7\u5934\uff09"),(0,r.kt)("p",null,"\u901a\u5173\u8428\u5c14\u8fbe\u65f7\u91ce\u4e4b\u606f\u7684\u53ef\u4ee5\u8003\u8651\u539f\u5730\u7ed3\u5a5a\uff08\u624b\u52a8\u72d7\u5934\uff09"),(0,r.kt)("p",null,"\u4e4b\u524d\u6ca1\u6709\u9605\u8bfb\u4e60\u60ef\uff0c\u6700\u8fd1\u51e0\u4e2a\u6708\u7a81\u7136\u6765\u4e86\u70b9\u611f\u89c9\uff0c\u5927\u6982\u8bfb\u4e8610+\u672c\u3002"),(0,r.kt)("p",null,"\u8fd9\u6761\u6bd4\u8d77\u4e0a\u9762\u4e24\u6761\u624b\u52a8\u72d7\u5934\u7684\u8c03\u4f83\uff0c\u662f\u8ba4\u771f\u7684\uff0c\u53ef\u6267\u884c\u7684\uff01"),(0,r.kt)("p",null,"\u53ef\u4ee5\u8003\u8651\u5728\u76f8\u4e92\u4e86\u89e3\u671f\u95f4\u8ba8\u8bba\u300a\u7231\u7684\u516b\u6b21\u7ea6\u4f1a\u300b\u4e2d8\u4e2a\u5bf9\u5a5a\u59fb\u5bb6\u5ead\u6bd4\u8f83\u91cd\u8981\u7684\u4ef7\u503c\u89c2\uff0c\n\u5728\u4e92\u76f8\u4e86\u89e3\u5bf9\u65b9\u7684\u540c\u65f6\uff0c\u4fdd\u8bc1\u5e95\u5c42\u4ef7\u503c\u89c2\u7684\u4e92\u76f8\u5951\u5408\u548c\u6b23\u8d4f\uff0c\u4ece\u800c\u4f7f\u5f97\u7f8e\u597d\u5a5a\u59fb\u751f\u6d3b\u6c34\u5230\u6e20\u6210\u3002"),(0,r.kt)("h3",{id:"\u5a5a\u59fb\u7279\u6027\u66f2\u7ebf"},"\u5a5a\u59fb\u7279\u6027\u66f2\u7ebf"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u67d0\u7231\u7f51\u7b80\u5355\u7684\u5a5a\u59fb\u7279\u6027\u66f2\u7ebf\uff0c\u867d\u7136\u662f\u4e2a\u7b80\u5355\u6d4b\u8bd5\uff0c\u4f46\u5e94\u8be5\u8fd8\u662f\u6709\u70b9\u7528\u7684"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7961).Z,width:"1013",height:"1832"}),"\n",(0,r.kt)("img",{src:n(9641).Z,width:"1018",height:"1262"})),(0,r.kt)("h3",{id:"\u4e2a\u4eba\u5a5a\u59fb\u89c2\u5ff5"},"\u4e2a\u4eba\u5a5a\u59fb\u89c2\u5ff5"),(0,r.kt)("p",null,"\u201c\u53cb\u8c0a\u201d\u5728\u592b\u59bb\u95f4\u975e\u5e38\u91cd\u8981\u3002"),(0,r.kt)("p",null,"\u629b\u5f00\u592b\u59bb\u5173\u7cfb\uff0c\u4e24\u4e2a\u4eba\u80fd\u50cf\u631a\u53cb\u4e00\u6837\uff0c\u76f8\u4f34\u5ea6\u8fc7\u5927\u591a\u6570\u76f8\u5bf9\u5e73\u6de1\u7684\u65e5\u5e38\u751f\u6d3b\uff0c\u4ece\u8fc7\u7a0b\u4e2d\u83b7\u5f97\u4e00\u4e9b\u6de1\u6de1\u7684\u5feb\u4e50\u3002\u4e5f\u80fd\u591f\u4e00\u8d77\u7ecf\u5386\u9010\u68a6\uff0c\u60ca\u559c\uff0c\u5931\u843d\uff0c\u60b2\u4f24\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4eba\u90fd\u6709\u4e0d\u540c\u6210\u957f\u73af\u5883\uff0c\u5bb6\u5ead\u80cc\u666f\uff0c\u670b\u53cb\u5708\uff0c\u5174\u8da3\u7231\u597d\u7b49\u7b49\u7684\u5dee\u5f02\u6027\u4f1a\u7ed9\u4e24\u4e2a\u4eba\u7684\u65e5\u5e38\u4ea4\u6d41\u548c\u5c06\u6765\u7684\u751f\u6d3b\u5e26\u6765\u4e50\u8da3\u3002\n\u4f46\u662f\uff0c\u80fd\u627e\u5230\u4e00\u4e2a\u4e0e\u81ea\u5df1\u8212\u670d\u81ea\u7136\u804a\u5929\u7684\u4eba\u662f\u5f88\u4e0d\u5bb9\u6613\u7684\u3002\u804a\u5929\u7684\u8fc7\u7a0b\u4e2d\u5f88\u5bb9\u6613\u53d1\u73b0\u53cc\u65b9\u90fd\u4e0d\u592a\u613f\u610f\u503e\u542c\u5bf9\u65b9\u8bf4\u7684\uff0c\u81ea\u5df1\u8bf4\u7684\u5bf9\u65b9\u4e5fget\u4e0d\u5230\u70b9\uff0c\u6216\u6ca1\u6709\u610f\u613f\u53bbget\u3002\n\u5c06\u6765\u7684\u5a5a\u59fb\u4e2d\uff0c\u4e24\u4e2a\u4eba\u7684\u6c9f\u901a\u53ef\u80fd\u662f\u4e24\u4e2a\u4eba\u4e4b\u95f4\u6700\u91cd\u8981\u7684\u4e00\u4ef6\u4e8b\u60c5\u3002\u6240\u4ee5\u5e0c\u671b\u5728\u76f8\u4e92\u8ba4\u8bc6\u7684\u65f6\u5019\u591a\u81ea\u7136\u8212\u9002\u5730\u804a\u804a\u5929\u3002"),(0,r.kt)("p",null,"\u76f8\u4e92\u5954\u8d74\u7684\u7231\u60c5\u5a5a\u59fb\uff0c\u559c\u6b22\u548c\u7231\u662f\u66f4\u52a0\u53cc\u5411\u7684\uff0c\u800c\u4e0d\u603b\u662f\u5355\u5411\u7684\u3002\u611f\u60c5\u548c\u5bb6\u5ead\u90fd\u9700\u8981\u4e24\u4e2a\u4eba\u5171\u540c\u52aa\u529b\u5730\u53bb\u7ecf\u8425\u3002"),(0,r.kt)("p",null,"\u592b\u59bb\u95f4\uff0c\u5bf9\u65b9\u6c38\u8fdc\u6bd4\u5176\u4ed6\u4efb\u4f55\u90fd\u8981\u91cd\u8981\uff0c\u5305\u62ec\u5b69\u5b50\u7236\u6bcd\u3002\u7ed3\u5a5a\u540e\u4f1a\u8981\u4e2a\u5c0f\u5b69\u3002"),(0,r.kt)("p",null,"\u76f8\u4e92\u4e4b\u95f4\u53ef\u4ee5\u6709\u79d8\u5bc6\uff0c\u4f46\u662f\uff0c\u5bf9\u4e8e\u6240\u6709\u4eba\u800c\u8a00\uff0c\u5bf9ta\u7684\u79d8\u5bc6\u4e00\u5b9a\u662f\u6700\u5c11\u7684\u3002"),(0,r.kt)("p",null,"\u8fc7\u5206\u8ffd\u6c42\u4f34\u4fa3\u80fd\u591f\u8d70\u5230\u81ea\u5df1\u7075\u9b42\u6df1\u5904\uff0c\u5219\u4f1a\u5bf9\u4f34\u4fa3\u6709\u4e0d\u5408\u7406\u7684\u671f\u5f85\u3002\u4f46\u662f\u4e00\u4e9b\u5e95\u7ebf\u4ef7\u503c\u89c2\u76f8\u4f3c\u6bd4\u8f83\u91cd\u8981\uff0c\u5373\u4fbf\u6709\u5dee\u5f02\u4e5f\u9700\u8981\u80fd\u591f\u901a\u8fc7\u6c9f\u901a\u8fbe\u6210\u8f83\u4e3a\u4e00\u81f4\u3002"),(0,r.kt)("h3",{id:"\u9700\u6c42\u6587\u6863"},"\u9700\u6c42\u6587\u6863"),(0,r.kt)("p",null,"\u5fc5\u8981\u6280\u80fd\uff1a\u7edf\u62db\u672c\u79d1\u3001\u6b63\u76f4\u3001\u53cc\u6807\u5728\u53ef\u9884\u671f\u5185"),(0,r.kt)("p",null,"\u63a8\u8350\u751f\u4ea7\u5e74\u4efd\uff1a84 - 96"),(0,r.kt)("p",null,"\u4e24\u4e2a\u4eba\u80fd\u81ea\u7136\u8212\u670d\u5730\u4fdd\u6301\u826f\u597d\u7684\u6c9f\u901a"),(0,r.kt)("p",null,"\u80fd\u73a9\u6e38\u620f\u6709\u9644\u52a0\u5206\uff08\u624b\u673a\u6e38\u620f\u4e0d\u7b97\uff09"),(0,r.kt)("h3",{id:"\u8054\u7cfb\u65b9\u5f0f"},"\u8054\u7cfb\u65b9\u5f0f"),(0,r.kt)("p",null,"\u975e\u5e38\u611f\u8c22\u60a8\u80fd\u82b1\u8d39\u65f6\u95f4\u9605\u8bfb\u81f3\u6b64\u5904..."),(0,r.kt)("p",null,"\u5982\u679c\u5bf9\u6709\u5174\u8da3\u76f8\u4e92\u4e86\u89e3\u4e00\u4e0b\uff0c\u6b22\u8fce\u52a0\u6211\u5fae\u4fe1\uff1aamoszhang7"),(0,r.kt)("p",null,"\uff08\u4e0b\u65b9\u6709\u4e0a\u4e00\u9875\uff0c\u4e0b\u4e00\u9875\u6309\u94ae\uff09"),(0,r.kt)("p",null,"\uff08\u6b64\u9875\u9762\u8fd1\u671f\u53ef\u80fd\u5e73\u51e1\u66f4\u65b0\uff0c\u6b22\u8fce\u5e38\u5e38\u6765\u770b\u770b\uff0cctrl + f5\u80fd\u4fdd\u8bc1\u5237\u51fa\u6700\u65b0\u9875\u9762.\n\u5982\u679c\u6709\u4e00\u5929\u8fd9\u4e2a\u9875\u9762\u5237\u4e0d\u51fa\u6765\u4e86\uff0c\u53ef\u80fd\u662f\u672c\u4eba\u5df2\u7ecf\u8131\u5355\u3002\n\u5f53\u7136\u672c\u4eba\u7684\u7f8e\u597d\u613f\u671b\u662f\u6709\u4e00\u5929\u8fd9\u4e2a\u9875\u9762\u6c38\u4e45\u6027404\uff09"))}d.isMDXComponent=!0},7961:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/zhenaiquxian1-4552e094f21222f223ac91e95572f277.jpg"},9641:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/zhenaiquxian2-1aed6e954ec737c7abd77ec820e06aac.jpg"}}]);