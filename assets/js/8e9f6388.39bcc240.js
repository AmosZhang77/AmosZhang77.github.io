"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3246],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,k=u["".concat(m,".").concat(d)]||u[d]||c[d]||a;return t?r.createElement(k,p(p({ref:n},i),{},{components:t})):r.createElement(k,p({ref:n},i))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,p=new Array(a);p[0]=u;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const a={},p=void 0,o={unversionedId:"engineering/npm/npm",id:"engineering/npm/npm",title:"npm",description:"\u66f4\u6362\u6362\u6dd8\u5b9d\u6e90",source:"@site/docs/engineering/npm/npm.mdx",sourceDirName:"engineering/npm",slug:"/engineering/npm/",permalink:"/docs/engineering/npm/",draft:!1,tags:[],version:"current",lastUpdatedAt:1681089352,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git_fn",permalink:"/docs/engineering/git/git_fn/"},next:{title:"webpack",permalink:"/docs/engineering/webpack/"}},m={},s=[{value:"\u66f4\u6362\u6362\u6dd8\u5b9d\u6e90",id:"\u66f4\u6362\u6362\u6dd8\u5b9d\u6e90",level:3},{value:"\u67e5\u8be2\u6e90",id:"\u67e5\u8be2\u6e90",level:3},{value:"npm cache clean \u6e05\u7f13\u5b58",id:"npm-cache-clean-\u6e05\u7f13\u5b58",level:3},{value:"nvm",id:"nvm",level:3},{value:"npm\u5207\u6362\u6e90\u5de5\u5177: nrm",id:"npm\u5207\u6362\u6e90\u5de5\u5177-nrm",level:3},{value:"yarn\u5207\u6362\u6e90\u5de5\u5177: yrm",id:"yarn\u5207\u6362\u6e90\u5de5\u5177-yrm",level:3},{value:"\u5207\u6362 sass\u6e90",id:"\u5207\u6362-sass\u6e90",level:3},{value:"npx",id:"npx",level:2}],i={toc:s};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u66f4\u6362\u6362\u6dd8\u5b9d\u6e90"},"\u66f4\u6362\u6362\u6dd8\u5b9d\u6e90"),(0,l.kt)("p",null,"npm config set registry ",(0,l.kt)("a",{parentName:"p",href:"https://registry.npm.taobao.org/"},"https://registry.npm.taobao.org/")),(0,l.kt)("h3",{id:"\u67e5\u8be2\u6e90"},"\u67e5\u8be2\u6e90"),(0,l.kt)("p",null,"npm config get registry"),(0,l.kt)("p",null,"npm config set registry ",(0,l.kt)("a",{parentName:"p",href:"http://artifactory.intra.ke.com/artifactory/api/npm/npm-virtual/"},"http://artifactory.intra.ke.com/artifactory/api/npm/npm-virtual/")),(0,l.kt)("h3",{id:"npm-cache-clean-\u6e05\u7f13\u5b58"},"npm cache clean \u6e05\u7f13\u5b58"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm cache clean --force\n")),(0,l.kt)("h3",{id:"nvm"},"nvm"),(0,l.kt)("p",null,"nvm\u5728windows\u4e0b\u672a\u5f00\u542f\u811a\u672c\u5b89\u5168\u7b56\u7565\u65f6\uff0c\u5207\u6362\u7248\u672c\u4f1a\u62a5\u4e71\u7801\u9519\u8bef\n\u7ba1\u7406\u5458\u6253\u5f00shell\uff0c\u8f93\u5165\u4ee5\u4e0b\u4e24\u4e2a\u547d\u4ee4"),(0,l.kt)("p",null,"\u6253\u5f00\u6743\u9650"),(0,l.kt)("p",null,"\u53c2\u6570\u8be6\u60c5\u53c2\u9605\uff1a"),(0,l.kt)("p",null,"set-ExecutionPolicy RemoteSigned"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2"},"https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2"),"\n\u8bbe\u7f6e\u6267\u884c\u7b56\u7565\u4e3a\u8981\u6c42\u8fdc\u7a0b\u811a\u672c\u7b7e\u540d\uff0c\u8303\u56f4\u4e3a\u5f53\u524d\u7528\u6237"),(0,l.kt)("p",null,"win11"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   Set-ExecutionPolicy RemoteSigned\n#   \u4e0a\u9762\u8f93\u5165\u4e4b\u540e\u4f1a\u663e\u793aExecutionPolicy:\n#   \u8f93\u5165 CurrentUser\nCurrentUser\n")),(0,l.kt)("p",null,"win10"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Set-ExecutionPolicy Unrestricted -Scope CurrentUser\n")),(0,l.kt)("p",null,"\u5982\u5728\u666e\u901ashell\u91cc\u9762nvm use \u7248\u672c \u62a5\u4e71\u7801\u9519\u8bef\uff0c\u5c1d\u8bd5\u5728\u7ba1\u7406\u5458shell\u91cc\u9762\u6267\u884cuse\u547d\u4ee4"),(0,l.kt)("p",null,"nvm \u5728\u5b89\u88c5\u7248\u672c\u524d\u4fee\u6539\u6e90\u80fd\u5e2e\u52a9\u987a\u5229\u5b89\u88c5\u4e0a"),(0,l.kt)("p",null,"1\u3001\u547d\u4ee4\u884c\u8fd0\u884c\uff1anvm root \u663e\u793a\u51fanvm\u7684\u5b89\u88c5\u76ee\u5f55"),(0,l.kt)("p",null,"2\u3001\u6253\u5f00nvm\u6587\u4ef6\u5939\u4e0b\u7684settings.txt\u6587\u4ef6\uff0c\u5728\u6700\u540e\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("p",null,"node_mirror: ",(0,l.kt)("a",{parentName:"p",href:"https://npm.taobao.org/mirrors/node/"},"https://npm.taobao.org/mirrors/node/")),(0,l.kt)("p",null,"npm_mirror: ",(0,l.kt)("a",{parentName:"p",href:"https://npm.taobao.org/mirrors/npm/"},"https://npm.taobao.org/mirrors/npm/")),(0,l.kt)("p",null,"\u5c06\u4e0b\u8f7d\u955c\u50cf\u6e90\u6307\u5411\u6dd8\u5b9d\uff08\u8fd9\u6b65\u4e5f\u5f88\u91cd\u8981\uff0c\u5426\u5219\u5728\u5b89\u88c5node\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u5361\u6b7b\uff0cnpm\u5b89\u88c5\u4e0d\u6210\u529f\u7684\u60c5\u51b5\uff09"),(0,l.kt)("p",null,"3\u3001\u6253\u5f00cmd\uff0cnvm install v\u7248\u672c\u53f7"),(0,l.kt)("p",null,"4\u3001\u6253\u5f00nvm\u6587\u4ef6\u4e2d\u5bf9\u5e94\u7248\u672c\u53f7\u7684node_modules\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u770b\u5230npm\u6587\u4ef6\uff0c\u5219\u8bf4\u660enpm\u5b89\u88c5\u6210\u529f"),(0,l.kt)("p",null,"\u624b\u52a8\u5b89\u88c5node\u5bf9\u5e94\u7684npm\u7248\u672c"),(0,l.kt)("p",null,"\u6211\u6ca1\u6709\u5c1d\u8bd5\u8fc7\u8fd9\u79cd\u65b9\u6cd5\uff0c\u8bb0\u5f55\u4e00\u4e0b\uff0c\u5982\u679c\u6709\u5bf9\u8fd9\u79cd\u65b9\u6cd5\u6bd4\u8f83\u611f\u5174\u8da3\u7684\uff0c\u53ef\u4ee5\u8bd5\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,"\u662f\u56e0\u4e3a\u5728\u4f7f\u7528NVM\u5b89\u88c5node\u7684\u65f6\u5019\u4e0d\u4f1a\u9ed8\u8ba4\u5b89\u88c5npm\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u81ea\u5df1\u4e0b\u8f7d\u540e\u653e\u5230nvm\u5bf9\u5e94\u7684node\u76ee\u5f55\u4e0b\u9762"),(0,l.kt)("p",null,"npm\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://npm.taobao.org/mirrors/npm/"},"http://npm.taobao.org/mirrors/npm/")," \uff08\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684zip\u6587\u4ef6\uff09"),(0,l.kt)("p",null,"node\u7248\u672c\u5bf9\u5e94npm\u7248\u672c\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/download/releases/"},"https://nodejs.org/zh-cn/download/releases/")),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\u5c06zip\u6587\u4ef6\u89e3\u538b\u5230nvm\u5b89\u88c5\u76ee\u5f55\u4e2d\u5bf9\u5e94\u7684node\u7248\u672c\u4e2d\u7684node_modules\u76ee\u5f55\u4e0b"),(0,l.kt)("p",null,"\u89e3\u538b\u5728\u201cX:\\XXX\\node_modules\u201d\u4e0b \uff0c\u7136\u540e\u5c06\u6587\u4ef6\u5939\u7684\u540d\u79f0\u6539\u4e3anpm"),(0,l.kt)("p",null,"\u6700\u540e\u5c06npm\u6587\u4ef6\u5939\u91cc\u9762\u7684bin\u76ee\u5f55\u4e0b\u7684npm\u548cnpm.cmd\u4e24\u4e2a\u6587\u4ef6\u590d\u5236\u4e00\u4efd\u5230\u5bf9\u5e94node\u7248\u672c\u7684\u6839\u76ee\u5f55\u4e0b"),(0,l.kt)("p",null,"image.png"),(0,l.kt)("p",null,"\u4f7f\u7528 npm -v \u6d4b\u8bd5\u4e00\u4e0b"),(0,l.kt)("h3",{id:"npm\u5207\u6362\u6e90\u5de5\u5177-nrm"},"npm\u5207\u6362\u6e90\u5de5\u5177: nrm"),(0,l.kt)("p",null,"\u65b9\u4fbf\u5207npm\u6e90\u5de5\u5177\uff1a nrm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g nrm\n")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4nrm ls\u67e5\u770b\u53ef\u9009\u7684\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nrm uls\n")),(0,l.kt)("p",null,"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nrm add newname http://registry.npm.frp.trmap.cn/\n")),(0,l.kt)("p",null,"\u5207\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nrm use taobao\n")),(0,l.kt)("p",null,"\u6d4b\u8bd5\u901f\u5ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nrm test newname\n")),(0,l.kt)("h3",{id:"yarn\u5207\u6362\u6e90\u5de5\u5177-yrm"},"yarn\u5207\u6362\u6e90\u5de5\u5177: yrm"),(0,l.kt)("p",null,"\u65b9\u4fbf\u5207yarn\u6e90\u5de5\u5177\uff1a yrm"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u4e14yarn\u6e90\u7684\u65f6\u5019\u4f1a\u4e00\u8d77\u628anpm\u6e90\u4e00\u8d77\u5207\u6362\u4e86")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g yrm\n")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4yrm  ls\u67e5\u770b\u53ef\u9009\u7684\u6e90"),(0,l.kt)("p",null,"\u5207\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yrm use taobao\n")),(0,l.kt)("h3",{id:"\u5207\u6362-sass\u6e90"},"\u5207\u6362 sass\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/\n")),(0,l.kt)("h2",{id:"npx"},"npx"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4e0d\u7528\u5b89\u88c5\u67d0\u4e2a\u5305\u800c\u76f4\u63a5\u4f7f\u7528"),(0,l.kt)("p",null,"\u539f\u6765\u6267\u884c\u4e00\u4e2a\u6587\u4ef6\u9700\u8981 node_modules/.bin/mocha --version\n\u6216\u8005\u653e\u5230package.json\u4e2d\u7684script\u4e2d\u914d\u7f6e(\u539f\u7406\uff1anode\u6253\u5f00\u65b0shell\u65f6\u4f1a\u6dfb\u52a0\u4e34\u65f6\u5c06node_modules/.bin/\u52a0\u5165\u5230\u73af\u5883\u53d8\u91cf\uff0c\u6240\u4ee5\u7cfb\u7edf\u53ef\u4ee5\u7528bin\u91cc\u9762\u7684\u547d\u4ee4\u4e86)"),(0,l.kt)("p",null,"\u7528npx\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528 npx mocha --version"))}c.isMDXComponent=!0}}]);