"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6765],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>u});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=s,x=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(x,l(l({ref:n},i),{},{components:t})):a.createElement(x,l({ref:n},i))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,l[1]=p;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var a=t(7462),s=t(7294),r=t(3905);const l="outBox_brAs",p=()=>s.createElement(s.Fragment,null,s.createElement("div",{className:l},s.createElement("h1",null,"h1-20px-blue"),s.createElement("div",null,"div-16px-blue"))),o="outBox_GyQ9",c="move_dXSE",i=()=>s.createElement("div",{className:o},s.createElement("div",{className:c})),d={},m=void 0,u={unversionedId:"css/sass/base/base",id:"css/sass/base/base",title:"base",description:"\u53d8\u91cf\u58f0\u660e",source:"@site/docs/css/sass/base/base.mdx",sourceDirName:"css/sass/base",slug:"/css/sass/base/",permalink:"/docs/css/sass/base/",draft:!1,tags:[],version:"current",lastUpdatedAt:1681089352,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"other",permalink:"/docs/css/less/other/"},next:{title:"other",permalink:"/docs/css/sass/other/"}},x={},h=[{value:"\u53d8\u91cf\u58f0\u660e",id:"\u53d8\u91cf\u58f0\u660e",level:3},{value:"&amp;",id:"",level:3},{value:"@mixin",id:"mixin",level:3},{value:"\u6570\u7ec4\u3001\u96c6\u5408\u3001\u51fd\u6570\u3001\u7ee7\u627f",id:"\u6570\u7ec4\u96c6\u5408\u51fd\u6570\u7ee7\u627f",level:3},{value:"\u5757\u53c2\u6570\u4f20\u9012",id:"\u5757\u53c2\u6570\u4f20\u9012",level:3},{value:"\u8df3\u51fa\u5d4c\u5957",id:"\u8df3\u51fa\u5d4c\u5957",level:3},{value:"\u53d8\u91cf\u9ed8\u8ba4\u503c",id:"\u53d8\u91cf\u9ed8\u8ba4\u503c",level:3},{value:"sass \u4e2d\u7684@import",id:"sass-\u4e2d\u7684import",level:3},{value:"calc() \u4e2d\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528 sass \u53d8\u91cf\uff0c\u5fc5\u987b\u4f7f\u7528\u63d2\u503c\u5199\u6cd5\uff0c\u53d8\u91cf$spacer\u5199\u6210#{$spacer}",id:"calc-\u4e2d\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528-sass-\u53d8\u91cf\u5fc5\u987b\u4f7f\u7528\u63d2\u503c\u5199\u6cd5\u53d8\u91cfspacer\u5199\u6210spacer",level:3}],k={toc:h};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u53d8\u91cf\u58f0\u660e"},"\u53d8\u91cf\u58f0\u660e"),(0,r.kt)("p",null,"\u5b9a\u4e49\u53d8\u91cf\uff1a $+\u53d8\u91cf\u540d\u79f0\uff0c\u4e0ejs\u4e0d\u540c\u7684\u5730\u65b9\uff0c\u4f7f\u7528\u53d8\u91cf\u540d\u79f0\u4e5f\u8981\u7528$"),(0,r.kt)("p",null,"sass \u4e2d\u51fd\u6570\u548c\u53d8\u91cf\u7533\u660e\u4e0d\u4f1a\u81ea\u52a8\u63d0\u5347\uff0c\u8981\u5148\u5b9a\u4e49\u518d\u7528\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$color: red; // \u58f0\u660e\n.className {\n  color: $color; // \u4f7f\u7528\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$h: 20; // \u58f0\u660e\n.className {\n  height: $h + px; // \u8fd9\u91cc\u8981\u7528\u52a0\u53f7\u94fe\u63a5\n\n  // \u8fd9\u91cc\u5982\u679c\u7528\u7a7a\u683c\u53ef\u4ee5\u6b63\u786e\u8bfb\u53d6\u53d8\u91cf\uff0c\u4f46\u662f\u7f16\u8bd1\u51fa\u6765\u4f1a\u5728\u6570\u5b57\u548cpx\u95f4\u591a\u7a7a\u683c\uff0c\u6d4f\u89c8\u5668\u4e0d\u8bc6\u522b\uff01\uff01\uff01\n  height: $h px;\n}\n")),(0,r.kt)("h3",{id:""},"&"),(0,r.kt)("p",null,"\u4ee3\u8868\u7236"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"div:nth-child(1) {\n  color: black;\n\n  &:hover {\n    // &\u4ee3\u8868\u7236\u4eb2\uff0c\u5373div:nth-child(1)\n    color: red;\n  }\n\n  & > .child {\n    // &> div:nth-child(1)\u7684\u5b50\u9009\u62e9\u5668\uff08\u4e0d\u662f\u540e\u4ee3\u9009\u62e9\u5668\uff0c\u5fc5\u987b\u662f\u76f4\u63a5\u7684\u5b50\u5143\u7d20\uff09\n  }\n}\n")),(0,r.kt)("h3",{id:"mixin"},"@mixin"),(0,r.kt)("p",null,"@minin \u58f0\u660e\u6837\u5f0f\u5757\uff0c\u6837\u5f0f\u5757\u80fd\u63a5\u53d7\u53c2\u6570\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin transform($params) {\n  // \u62ec\u53f7\u91cc\u9762\u7684\u662f\u63a5\u53d7\u53c2\u6570\n  -webkit-transform: $params;\n  -ms-transform: $params;\n  -o-transform: $params;\n  transform: $params;\n}\n\n@mixin size($width: 100px, $height: 24px) {\n  // \u5982\u672a\u63a5\u53d7\u5230\u53c2\u6570\uff0c\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\uff0c\u9ed8\u8ba4\u53c2\u6570\u5199\u6cd5\n  width: $width;\n  height: $height;\n}\n\ndiv {\n  @include size; // \u4f7f\u7528mixin\u6837\u5f0f\u5757\n  @include transform(\n    translateX(20px)\n  ); // translateX(20px)\u53c2\u6570\u4f20\u8fdb\u53bb\uff0c\u7c7b\u4f3c\u5b57\u7b26\u4e32\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin box-shadow($shadows...) {\n  // \u4e0d\u77e5\u9053\u591a\u5c11\u4e2a\u53c2\u6570\uff0c\u90fd\u9700\u8981\u7528\n  -moz-box-shadow: $shadows;\n  -webkit-box-shadow: $shadows;\n  box-shadow: $shadows;\n}\n\n.shadows {\n  // \u4e00\u5806\u53c2\u6570\u53ef\u4ee5\u4e00\u8d77\u4f20\u8fdb\u53bb\u3002\u7a7a\u683c\u4e5f\u53ef\u4ee5\uff0c\u7c7b\u4f3c\u5b57\u7b26\u4e32\n  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".shadowed {\n  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;\n  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;\n  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;\n}\n")),(0,r.kt)("h3",{id:"\u6570\u7ec4\u96c6\u5408\u51fd\u6570\u7ee7\u627f"},"\u6570\u7ec4\u3001\u96c6\u5408\u3001\u51fd\u6570\u3001\u7ee7\u627f"),(0,r.kt)("div",null,(0,r.kt)(p,{mdxType:"ScssBase1"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div class="outBox">\n    <h1>h1-20px-blue</h1>\n    <div>div-16px-blue</div>\n  </div>\n</template>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"//\u5b9a\u4e49\u6570\u7ec4\n$pxArr: 12px 14px 16px 18px;\n\n@function pxFn($px, $default) {\n  //\u51fd\u6570\u5b9a\u4e49@function\n  @return $px/$default * 10 + px; //\u51fd\u6570\u8fd4\u56de\u503c\uff0c\u8fd9\u91cc16px/20px,\u7cfb\u7edf\u4f1a\u667a\u80fd\u7684\u628apx\u7ea6\u5206\u6389\uff0c\u800c\u4e0d\u662f\u62a5\u9519\uff0c\n  // \u7ed3\u679c\u6ca1\u6709\u5355\u4f4d\uff0c\u8981\u6ce8\u610f\uff01\u53ef\u4ee5\u5728\u8fd9\u91cc\u540e\u9762\u76f4\u63a5\u52a0px\u4e5f\u53ef\u4ee5\u52a0+px\n}\n\n/*map object*/\n//map\u5b9a\u4e49\u96c6\u5408\uff0c\u96c6\u5408\u4e2d\u952e\u503c\u5bf9\u4e2d\u7684\u503c\u53ef\u4ee5\u662f\u6570\u7ec4\n$mapList: (\n  color1: red,\n  color2: green,\n  color3: blue,\n);\n\nh1 {\n  font-size: pxFn(20px, 10px); //\u51fd\u6570\u8c03\u7528 // 20px\n  color: map-get($mapList, color3); //\u83b7\u5f97\u96c6\u5408\u67d0\u4e2a\u952e\u7684\u503c\uff0cmap-get\u662f\u4e00\u4e2a\u65b9\u6cd5\n}\n\ndiv {\n  @extend h1; //\u7ee7\u627fh1\u7684\u6837\u5f0f@extend // color: blue\n  font-size: nth(\n    $pxArr,\n    3\n  ); //\u83b7\u5f97\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e09\u4e2a\u5143\u7d20nth(\u6570\u7ec4\u540d,\u7b2c\u51e0\u4e2a\u5143\u7d20\u4ece1\u5f00\u59cb)\uff0cnth\u662f\u4e00\u4e2a\u65b9\u6cd5 // 16px\n}\n")),(0,r.kt)("h3",{id:"\u5757\u53c2\u6570\u4f20\u9012"},"\u5757\u53c2\u6570\u4f20\u9012"),(0,r.kt)("div",null,(0,r.kt)(i,{mdxType:"ScssBase2"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div class="outBox">\n    <div class="move"></div>\n  </div>\n</template>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin keyframes($name) {\n  @keyframes #{$name} {\n    @content;\n  }\n  @-webkit-keyframes #{$name} {\n    @content; //\u7528\u4e8e\u4e00\u6b21\u6027\u4f20\u4e00\u5927\u5806\u53ef\u80fd\u88ab\u9519\u8bef\u89e3\u6790\u7684\u53c2\u6570\uff0c\n  }\n  @-moz-keyframes #{$name} {\n    @content;\n  }\n  @-ms-keyframes #{$name} {\n    @content;\n  }\n}\n\n@include keyframes(demo) {\n  from {\n    width: 20px;\n  }\n  to {\n    width: 400px;\n  }\n}\n\n// \u5f15\u7528@mixin\u6837\u5f0f\u5757\u666e\u901a\u7684\u5199\u6cd5\u662f@include keyframes(demo),mixin\u5185\u7684name\u66ff\u6362\u6210demo\u5b57\u7b26\u4e32\n// \u5982\u679c\u7528\u4e8e@content\u5c31\u5728@include keyframes(demo)\u540e\u9762\u52a0\u4e00\u4e2a\u82b1\u62ec\u53f7\u3002\u82b1\u62ec\u53f7\u5185\u5bb9\u4f20\u5230@content\u4f4d\u7f6e\n\n.outBox {\n  padding: 20px;\n  height: 100px;\n  position: relative;\n  // \u5173\u952e\u5e27\n  .move {\n    width: 100px;\n    height: 100px;\n    background: red;\n    position: absolute;\n    animation: demo 8s infinite;\n    //animation-delay:3s;\n    //animation-direction: reverse;\n  }\n}\n")),(0,r.kt)("h3",{id:"\u8df3\u51fa\u5d4c\u5957"},"\u8df3\u51fa\u5d4c\u5957"),(0,r.kt)("p",null,"@at-root"),(0,r.kt)("p",null,"\u7528\u6765\u8df3\u51fa\u9009\u62e9\u5668\u5d4c\u5957\u3002\u9ed8\u8ba4\u6240\u6709\u7684\u5d4c\u5957\uff0c\u7ee7\u627f\u6240\u6709\u4e0a\u7ea7\u9009\u62e9\u5668\uff0c\u7528\u8fd9\u4e2a\u5c31\u53ef\u4ee5\u8df3\u51fa\u6240\u6709\u4e0a\u7ea7\u9009\u62e9\u5668\u7684\u5d4c\u5957\u3002"),(0,r.kt)("p",null,"\u53ef\u80fd\u7528\u4e8e\u5728\u5199\u7ed3\u6784\u5316 css \u65f6\uff0c\u51cf\u5c11\u5185\u5c42\u5143\u7d20\u7684\u6743\u91cd\u548c\u8fc7\u6df1\u7684\u5d4c\u5957"),(0,r.kt)("p",null,"\u6ca1\u6709\u8df3\u51fa\u8bed\u53e5\u7684\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},".parent-1 {\n  color: #f00;\n\n  .child {\n    width: 100px;\n  }\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u6210 css \u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".parent-1 {\n  color: #f00;\n}\n\n.parent-1 .child {\n  width: 100px;\n}\n")),(0,r.kt)("p",null,"\u5355\u4e2a\u9009\u62e9\u5668\u8df3\u51fa\u5d4c\u5957\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},".parent-2 {\n  color: #f00;\n  @at-root .child {\n    width: 200px;\n  }\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u6210 css \u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".parent-2 {\n  color: #f00;\n}\n\n.child {\n  width: 200px; /*\u8df3\u51fa\u5916\u5c42\u5d4c\u5957*/\n}\n")),(0,r.kt)("p",null,"\u591a\u4e2a\u9009\u62e9\u5668\u8df3\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},".parent-3 {\n  background: #f00;\n  @at-root {\n    .child1 {\n      width: 300px;\n    }\n\n    .child2 {\n      width: 400px;\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u6210 css \u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".parent-3 {\n  background: #f00;\n}\n\n.child1 {\n  width: 300px; /*\u8df3\u51fa\u5916\u5c42\u5d4c\u5957*/\n}\n\n.child2 {\n  width: 400px; /*\u8df3\u51fa\u5916\u5c42\u5d4c\u5957*/\n}\n")),(0,r.kt)("h3",{id:"\u53d8\u91cf\u9ed8\u8ba4\u503c"},"\u53d8\u91cf\u9ed8\u8ba4\u503c"),(0,r.kt)("p",null,"!default \u5173\u952e\u8bcd\uff0c\u5728\u5199\u7ec4\u4ef6\u5e93\u7684\u9ed8\u8ba4\u53d8\u91cf\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\uff0c\u7528\u6237\u5728\u4e0d\u6539\u6e90\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u65b9\u4fbf\u81ea\u5b9a\u4e49\u8272\u5f69\u53d8\u91cf\u7b49"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$white: #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n")),(0,r.kt)("h3",{id:"sass-\u4e2d\u7684import"},"sass \u4e2d\u7684@import"),(0,r.kt)("p",null,"_","mixin.scss sass \u4e2d\u7ea6\u5b9a\u4e0b\u5212\u7ebf\u524d\u7f00\u7684\u6587\u4ef6\u53ea\u80fd\u88ab\u5176\u4ed6\u6587\u4ef6\u5bfc\u5165\uff0c\u4e0d\u80fd\u76f4\u63a5\u7528\u3002\n\u5e76\u4e14\u7f16\u8bd1\u7684\u65f6\u5019\u4e0d\u4f1a\u50cf css \u4e2d\u7684 import\uff0c\u6bcf\u4e00\u4e2a\u90fd\u662f\u5355\u72ec\u7684\u4e00\u4e2a css \u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'@import "mixin"; // \u5f15\u5165\u7684\u65f6\u5019\u4e0d\u9700\u8981\u5bb6\u524d\u7f00\u4e0b\u5212\u7ebf\n')),(0,r.kt)("h3",{id:"calc-\u4e2d\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528-sass-\u53d8\u91cf\u5fc5\u987b\u4f7f\u7528\u63d2\u503c\u5199\u6cd5\u53d8\u91cfspacer\u5199\u6210spacer"},"calc() \u4e2d\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528 sass \u53d8\u91cf\uff0c\u5fc5\u987b\u4f7f\u7528\u63d2\u503c\u5199\u6cd5\uff0c\u53d8\u91cf$spacer\u5199\u6210#{$spacer}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$spacer: 1rem;\n$headings-margin-bottom: $spacer;\n//$headings-margin-bottom: calc( $spacer / 2); // \u53d8\u91cf\u65e0\u6548\n$headings-margin-bottom: calc( #{$spacer} / 2);\n")))}f.isMDXComponent=!0}}]);