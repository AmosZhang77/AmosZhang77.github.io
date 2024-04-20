"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1536],{3905:(n,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>y});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),p=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},i=function(n){var e=p(n.components);return o.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,s=n.parentName,i=l(n,["components","mdxType","originalType","parentName"]),g=p(t),y=r,_=g["".concat(s,".").concat(y)]||g[y]||u[y]||a;return t?o.createElement(_,c(c({ref:e},i),{},{components:t})):o.createElement(_,c({ref:e},i))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,c=new Array(a);c[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8019:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));const a=t.p+"assets/images/prototype__proto-717ac93634b4951cbfb9368e8caf1828.png",c={},l=void 0,s={unversionedId:"js/base/class/class",id:"js/base/class/class",title:"class",description:"class",source:"@site/docs/js/base/class/class.mdx",sourceDirName:"js/base/class",slug:"/js/base/class/",permalink:"/docs/js/base/class/",draft:!1,tags:[],version:"current",lastUpdatedAt:1706087011,formattedLastUpdatedAt:"2024\u5e741\u670824\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"base_api",permalink:"/docs/js/base/base_api/"},next:{title:"coding",permalink:"/docs/js/base/coding/"}},p={},i=[{value:"class",id:"class",level:2},{value:"class \u8bed\u6cd5\u7cd6",id:"class-\u8bed\u6cd5\u7cd6",level:3},{value:"es5\u7c7b\u548cclass\u4f7f\u7528\u4ee3\u7801\u5bf9\u6bd4",id:"es5\u7c7b\u548cclass\u4f7f\u7528\u4ee3\u7801\u5bf9\u6bd4",level:3},{value:"\u539f\u578b\u94fe",id:"\u539f\u578b\u94fe",level:3},{value:"new",id:"new",level:3},{value:"Object.create\u5927\u81f4\u539f\u7406",id:"objectcreate\u5927\u81f4\u539f\u7406",level:3},{value:"\u7528 Object.create() \u5b9e\u73b0\u7c7b\u5f0f\u7ee7\u627f",id:"\u7528-objectcreate-\u5b9e\u73b0\u7c7b\u5f0f\u7ee7\u627f",level:3},{value:"instanceof",id:"instanceof",level:3},{value:"ES5 \u7ee7\u627f",id:"es5-\u7ee7\u627f",level:3},{value:"lodash \u539f\u578b\u6c61\u67d3\u6f0f\u6d1e",id:"lodash-\u539f\u578b\u6c61\u67d3\u6f0f\u6d1e",level:3}],u={toc:i};function g(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"class"},"class"),(0,r.kt)("h3",{id:"class-\u8bed\u6cd5\u7cd6"},"class \u8bed\u6cd5\u7cd6"),(0,r.kt)("p",null,"class \u662f\u8bed\u6cd5\u7cd6\uff0c\u548ces5\u4e00\u6837\u9760\u539f\u578b\u94fe\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class classA {\n  constructor() {}\n\n  playOrg() {\n    console.log("playOrgClaseFn");\n  } // \u7c7b\u7684\u5185\u90e8\u6240\u6709\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u90fd\u662f\u4e0d\u53ef\u679a\u4e3e\u7684\n}\n\n/**\n * class \u662f\u8bed\u6cd5\u7cd6\uff0c\u548ces5\u4e00\u6837\u9760\u539f\u578b\u94fe\u5b9e\u73b0\u3002\n * \u6240\u4ee5\u53ef\u4ee5\u7528es5\u7684assign\u7ed9class\u52a0\u65b9\u6cd5\uff0c\n * \u4f46\u662f\u8fd9\u6837\u666e\u901a\u8d4b\u503c\u5c5e\u6027\u7684\u65b9\u6cd5\uff0c\u5728\u751f\u6210\u5bf9\u8c61\u4e0a\u53ef\u679a\u4e3e\n * */\nObject.assign(classA.prototype, {\n  // Object.assign()\u62f7\u8d1d\u7684\u662f\uff08\u53ef\u679a\u4e3e\uff09\u5c5e\u6027\u503c\n  play() {\n    console.log("palyFnDo");\n  },\n});\n// \u4f46\u662f\u8fd9\u91cc\u662fObject.assign\u7684\u65b9\u6cd5\u683c\u5f0f, \u8fd9\u91cc\u9762\u9700\u8981\u5f80Point.prototype\u91cc\u9762\u6dfb\u52a0\u7684\u65b9\u6cd5\u5c31\u9700\u8981\u7b26\u5408\u5bf9\u8c61\u7684\u9ed8\u8ba4\u683c\u5f0f\n\nlet p = new classA();\n\nfor (let o in p) {\n  console.log(o); // play\n}\n\np.playOrg(); // playOrgClaseFn\np.play(); // palyFnDo\n')),(0,r.kt)("p",null,"class \u5185\u90e8\u7684\u65b9\u6cd5\u4e2d\u662f\u5c40\u90e8\u4e25\u683c\u6a21\u5f0f\uff0c\u5916\u90e8\u8c03\u4e5f\u540c\u6837\uff0cconsole.log\uff08this\uff09 \u4e0d\u4f1a\u9ed8\u8ba4\u6307\u5411 window\uff0c\u800c\u662f undefined"),(0,r.kt)("h3",{id:"es5\u7c7b\u548cclass\u4f7f\u7528\u4ee3\u7801\u5bf9\u6bd4"},"es5\u7c7b\u548cclass\u4f7f\u7528\u4ee3\u7801\u5bf9\u6bd4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u7c7b\u7684\u7533\u660e\n// es5\nfunction Animal(){\n    this.name = 'name'\n}\n// es6 class\nclass Animal2 {\n    constructor(){\n        this.name = name\n    }\n}\n\n// \u7c7b\u7684\u5b9e\u4f8b\u5316\uff0ces5\u548c6\u662f\u4e00\u6837\u7684\nconst a1 = new Animal()\nconst a2 = new Animal2()\n")),(0,r.kt)("h3",{id:"\u539f\u578b\u94fe"},"\u539f\u578b\u94fe"),(0,r.kt)("img",{src:a,style:{width:"900px"}}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u7531\u4e0a\u56fe\u7684\u5173\u7cfb\uff0c\u53ea\u8981\u613f\u610f\u53ef\u4ee5\u65e0\u9650\u5faa\u73af\u5f15\u7528\u4e0b\u53bb.__proto__.__proto__.constructor\nObject.__proto__.__proto__.constructor.constructor === Function // true\nObject.__proto__.__proto__.constructor.__proto__.__proto__.constructor.constructor === Function // true\nObject.__proto__.__proto__.constructor.__proto__.__proto__.constructor.__proto__.__proto__.constructor.constructor === Function // true\n")),(0,r.kt)("h3",{id:"new"},"new"),(0,r.kt)("p",null,"\u624b\u5199new\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const myNew = function (FN){\n    //1. \u521b\u5efa\u65b0\u5bf9\u8c61\uff0c\u5c06\u65b0\u5bf9\u8c61o\u7684\u539f\u578b\u5bf9\u8c61\u7684__proto__\u6307\u5411\u6784\u9020\u51fd\u6570\u7684prototype(\u5373FN.prototype)\u3002\n//2.  FN.prototype.constructor\u672c\u6765\u5c31\u6307\u5411FN\uff0c1\u4e2d__proto__\u6307\u5411FN.prototype\u540e\u4f1a\uff0co.__proto__\u7684constructor\u5c5e\u6027\u81ea\u7136\u5c31\u53d8\u6210FN.prototype.constructor\uff08\u5c31\u662fFN\uff09\n  const o = Object.create(FN.prototype)\n  const r = FN.call(o)\n  if(typeof r === 'object'){\n    return r\n  }else{\n    return o\n  }\n}\n")),(0,r.kt)("h3",{id:"objectcreate\u5927\u81f4\u539f\u7406"},"Object.create\u5927\u81f4\u539f\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function create (prototype){\n  function Temp(){}\n  let temp = new Temp()\n  temp.prototype = prototype\n  return temp\n}\n")),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5b57\u9762\u91cf\u521d\u59cb\u5316\u5bf9\u8c61\u8bed\u6cd5\u662f Object.create() \u7684\u4e00\u79cd\u8bed\u6cd5\u7cd6!\n(\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"),")\n\u4f7f\u7528 Object.create()\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u5177\u6709\u6307\u5b9a\u539f\u578b\u548c\u67d0\u4e9b\u5c5e\u6027\u7684\u5bf9\u8c61\u3002\n\u8bf7\u6ce8\u610f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c06\u952e\u6620\u5c04\u5230\u5c5e\u6027\u63cf\u8ff0\u7b26\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u8fd8\u53ef\u4ee5\u63a7\u5236\u6bcf\u4e2a\u5c5e\u6027\u7684\u53ef\u679a\u4e3e\u6027\u3001\u53ef\u914d\u7f6e\u6027\u7b49\uff0c\u800c\u8fd9\u5728\u5b57\u9762\u91cf\u521d\u59cb\u5316\u5bf9\u8c61\u8bed\u6cd5\u4e2d\u662f\u505a\u4e0d\u5230\u7684\u3002"),(0,r.kt)("h3",{id:"\u7528-objectcreate-\u5b9e\u73b0\u7c7b\u5f0f\u7ee7\u627f"},"\u7528 Object.create() \u5b9e\u73b0\u7c7b\u5f0f\u7ee7\u627f"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 Object.create() \u6765\u5b9e\u73b0\u7c7b\u5f0f\u7ee7\u627f\u3002\u8fd9\u662f\u4e00\u4e2a\u6240\u6709\u7248\u672c JavaScript \u90fd\u652f\u6301\u7684\u5355\u7ee7\u627f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Shape\u2014\u2014\u7236\u7c7b\nfunction Shape() {\n  this.x = 0;\n  this.y = 0;\n}\n\n// \u7236\u7c7b\u65b9\u6cd5\nShape.prototype.move = function (x, y) {\n  this.x += x;\n  this.y += y;\n  console.info("Shape moved.");\n};\n\n// Rectangle\u2014\u2014\u5b50\u7c7b4\nfunction Rectangle() {\n  Shape.call(this); // \u8c03\u7528\u7236\u7c7b\u6784\u9020\u51fd\u6570\u3002\n}\n\n// \u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\nRectangle.prototype = Object.create(Shape.prototype, {\n  // \u5982\u679c\u4e0d\u5c06 Rectangle.prototype.constructor \u8bbe\u7f6e\u4e3a Rectangle\uff0c\n  // \u5b83\u5c06\u91c7\u7528 Shape\uff08\u7236\u7c7b\uff09\u7684 prototype.constructor\u3002\n  // \u4e3a\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u5c06 prototype.constructor \u8bbe\u7f6e\u4e3a Rectangle\uff08\u5b50\u7c7b\uff09\u3002\n  constructor: {\n    value: Rectangle, // \u8fd9\u91cc\u975e\u5e38\u91cd\u8981\uff0c\u5c06 prototype.constructor \u8bbe\u7f6e\u4e3a Rectangle\uff08\u5b50\u7c7b\uff09\n    enumerable: false,\n    writable: true,\n    configurable: true,\n  },\n});\n\nconst rect = new Rectangle();\n\nconsole.log("rect \u662f Rectangle \u7c7b\u7684\u5b9e\u4f8b\u5417\uff1f", rect instanceof Rectangle); // true\nconsole.log("rect \u662f Shape \u7c7b\u7684\u5b9e\u4f8b\u5417\uff1f", rect instanceof Shape); // true\nrect.move(1, 1); // \u6253\u5370 \'Shape moved.\'\n')),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528 create() \u4e5f\u6709\u4e00\u4e9b\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff0c\u6bd4\u5982\u91cd\u65b0\u6dfb\u52a0 constructor \u5c5e\u6027\u4ee5\u786e\u4fdd\u6b63\u786e\u7684\u8bed\u4e49\u3002"),(0,r.kt)("p",null,"\u867d\u7136 Object.create() \u88ab\u8ba4\u4e3a\u6bd4\u4f7f\u7528 Object.setPrototypeOf() \u4fee\u6539\u539f\u578b\u66f4\u5177\u6709\u6027\u80fd\u4f18\u52bf\uff0c\u4f46\u5982\u679c\u6ca1\u6709\u521b\u5efa\u5b9e\u4f8b\u5e76\u4e14\u5c5e\u6027\u8bbf\u95ee\u8fd8\u6ca1\u6709\u88ab\u4f18\u5316\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u5dee\u5f02\u5b9e\u9645\u4e0a\u662f\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\u7684\u3002\n\u5728\u73b0\u4ee3\u4ee3\u7801\u4e2d\uff0c\u65e0\u8bba\u5982\u4f55\u90fd\u5e94\u8be5\u4f18\u5148\u4f7f\u7528\u7c7b\u8bed\u6cd5\u3002"),(0,r.kt)("h3",{id:"instanceof"},"instanceof"),(0,r.kt)("p",null,"\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 prototype \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aobject instanceof constructor\nobject\uff1a\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\nconstructor\uff1a\u67d0\u4e2a\u6784\u9020\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5b9a\u4e49\u6784\u9020\u51fd\u6570\nfunction C() {}\nfunction D() {}\n// \u5b9e\u4f8b\u5316\u4e00\u4e2a o \u5bf9\u8c61\nvar o = new C();\n// true\uff0ctrue --\x3e C.prototype \u5728 o \u7684\u539f\u578b\u94fe\u4e0a\nconsole.log(\n  o instanceof C,\n  o.__proto__ === C.prototype,\n  "\u6b64\u65f6 o \u7684 __proto__\uff1a",\n  o.__proto__,\n  "\u6b64\u65f6 C \u7684 prototype\uff1a",\n  C.prototype\n);\n// false\uff0cfalse --\x3e D.prototype \u4e0d\u5728 o \u7684\u539f\u578b\u94fe\u4e0a\nconsole.log(o instanceof D, o.__proto__ === D.prototype);\n// true true --\x3e Object.prototype \u5728 o \u7684\u539f\u578b\u94fe\u4e0a\nconsole.log(o instanceof Object, o.__proto__.__proto__ === Object.prototype);\n// \u8fd9\u65f6\u6211\u4eec\u4fee\u6539\u6784\u9020\u51fd\u6570 C \u7684\u539f\u578b\u4e3a\u4e00\u4e2a\u7a7a\u5bf9\u8c61\nC.prototype = {};\n// \u5b9e\u4f8b\u5316\u4e00\u4e2a o2 \u5bf9\u8c61\nvar o2 = new C();\n// true --\x3e C.prototype \u5728 o2 \u7684\u539f\u578b\u94fe\u4e0a\nconsole.log(o2 instanceof C);\n// false\uff0cC.prototype \u6307\u5411\u4e86\u4e00\u4e2a\u7a7a\u5bf9\u8c61,\u8fd9\u4e2a\u7a7a\u5bf9\u8c61\u4e0d\u5728 o \u7684\u539f\u578b\u94fe\u4e0a.\nconsole.log(\n  o instanceof C,\n  "\u6b64\u65f6 o \u7684 __proto__\uff1a",\n  o.__proto__,\n  "\u6b64\u65f6 C \u7684 prototype\uff1a",\n  C.prototype\n);\nconsole.log("\u6b64\u65f6 D \u7684 prototype\uff1a", D.prototype);\n// \u7ee7\u627f\nD.prototype = new C(); // new \u51fa\u6765\u7684\u5bf9\u8c61\u7684__proto__ = C.prototype\nconsole.log("\u6b64\u65f6 D \u7684 prototype\uff1a", D.prototype);\nvar o3 = new D();\n// true, true --\x3e \u56e0\u4e3a o3 \u662f \u6784\u9020\u51fd\u6570 D new \u51fa\u6765\u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u6240\u4ee5 D.prototype \u4e00\u5b9a\u5728 o3 \u7684\u539f\u578b\u94fe\u4e0a\nconsole.log(o3 instanceof D, o3.__proto__ === D.prototype);\n// true --\x3e \u56e0\u4e3a C.prototype \u73b0\u5728\u5728 o3 \u7684\u539f\u578b\u94fe\u4e0a\nconsole.log(o3 instanceof C);\n// true,true --\x3e \u4e0a\u9762\u7684\u7ed3\u679c\u4e3a\u4ec0\u4e48\u4e3a true \u5462\uff0c\u770b\u5982\u4e0b\u4ee3\u7801\uff0cD.prototype \u662f \u6784\u9020\u51fd\u6570 C new \u51fa\u6765\u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\n// \u6240\u4ee5 C.prototype \u4e00\u5b9a\u5728 D.prototype \u7684\u539f\u578b\u94fe\u4e0a\nconsole.log(\n  o3.__proto__ === D.prototype,\n  D.prototype.__proto__ === C.prototype\n);\n// true \u76f8\u5f53\u4e8e\u5982\u4e0b\u4ee3\u7801\nconsole.log(o3.__proto__.__proto__ === C.prototype);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var simpleStr = "This is a simple string";\nvar myString = new String();\nvar newStr = new String("String created with constructor");\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null); // Object.create(null) \u4f1a\u9020\u6210\u521b\u5efa\u7684\u5bf9\u8c61\u5176 __proto__ \u6307\u5411\u4e3a\u7a7a\n\n// \u8fd4\u56de false, simpleStr \u5e76\u4e0d\u662f\u5bf9\u8c61\nsimpleStr instanceof String;\n// \u8fd4\u56de true\nmyString instanceof String;\n// \u8fd4\u56de true\nnewStr instanceof String;\n// \u8fd4\u56de true\nmyString instanceof Object;\n// \u8fd4\u56de true\nmyObj instanceof Object;\n// \u8fd4\u56de true\n({} instanceof Object);\n// \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u6700\u7ec8\u4e0d\u4f1a\u6307\u5230Object>prototype\nmyNonObj instanceof Object;\n// \u8fd4\u56de false\nmyString instanceof Date;\n// \u8fd4\u56de true\nmyDate instanceof Date;\n// \u8fd4\u56de true\nmyDate instanceof Object;\n// \u8fd4\u56de false\nmyDate instanceof String;\n')),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49 instanceof \u884c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'class PrimitiveNumber {\n  static [Symbol.hasInstance](x) {\n    // \u91cd\u5199Symbol.hasInstance\n    return typeof x === "number";\n  }\n}\n// true\nconsole.log(111 instanceof PrimitiveNumber);\n')),(0,r.kt)("p",null,"\u624b\u52a8\u5b9e\u73b0 instanceof \u7684\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function copyInstanceof(source, target) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u4ee5\u53ca null \u76f4\u63a5\u8fd4\u56de false\n  if (!["function", "object"].includes(typeof source) || source === null)\n    return false;\n  // getProtypeOf \u662f Object \u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(source);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == target.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\nconsole.log(copyInstanceof("111", String)); // false\nconsole.log(copyInstanceof(new String("111"), String)); // true\nconsole.log(copyInstanceof(Date, Function)); // true\nconsole.log(copyInstanceof(null, Object)); // false\n')),(0,r.kt)("h3",{id:"es5-\u7ee7\u627f"},"ES5 \u7ee7\u627f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5b9a\u4e49\u4e00\u4e2a\u52a8\u7269\u7c7b\nfunction Animal(name) {\n  // \u5c5e\u6027\n  this.name = name || "Animal";\n  // \u5b9e\u4f8b\u65b9\u6cd5\n  this.sleep = function () {\n    console.log(this.name + "\u6b63\u5728\u7761\u89c9\uff01");\n  };\n}\n// \u539f\u578b\u65b9\u6cd5\nAnimal.prototype.eat = function (food) {\n  console.log(this.name + "\u6b63\u5728\u5403\uff1a" + food);\n};\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u539f\u578b\u94fe\u7ee7\u627f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function Animal(name) {\n  // \u5c5e\u6027\n  this.name = name || "Animal";\n  // \u5b9e\u4f8b\u65b9\u6cd5\n  this.sleep = function () {\n    console.log(this.name + "\u6b63\u5728\u7761\u89c9\uff01");\n  };\n}\n// \u539f\u578b\u65b9\u6cd5\nAnimal.prototype.eat = function (food) {\n  console.log(this.name + "\u6b63\u5728\u5403\uff1a" + food);\n};\n\nfunction Cat(name) {\n  Animal.call(this);\n  this.name = name || "Tom";\n}\nCat.prototype = new Animal();\nCat.prototype.constructor = Animal;\nvar cat = new Cat();\n\nconsole.log(cat instanceof Animal); // true\nconsole.log(cat instanceof Cat); // true\n// \u7ec4\u5408\u7ee7\u627f\u4e5f\u662f\u9700\u8981\u4fee\u590d\u6784\u9020\u51fd\u6570\u6307\u5411\u7684\u3002\n\nCat.prototype.constructor = Cat;\n\n// Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); // true\nconsole.log(cat instanceof Cat); // true\n\nfunction Cat() {}\nCat.prototype = new Animal();\nCat.prototype.name = "cat";\nCat.prototype.constructor = "dog";\n\n//\u3000Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.eat("fish"));\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); //true\nconsole.log(cat instanceof Cat); //true\n')),(0,r.kt)("p",null,"\u7ee7\u627f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function A() {}\nfunction B() {}\nfunction C() {}\nconst b = new B();\nconst c = new C();\nA.prototype = b;\nA.prototype = c;\nconsole.log(' A.prototype.constructor', A.prototype.constructor)\nA.prototype.constructor = A // \u4fee\u590dconstructor\n\nconst a = new A();\n\nconsole.log(a.constructor); // fn C\nconsole.log(a.__proto__.constructor); // fn C\nconsole.log(a instanceof A); //true\nconsole.log(a instanceof B); //false\nconsole.log(a instanceof C); //true\n\nconsole.log(a.__proto__ === c); // true\nconsole.log(a.__proto__.__proto__ === c); // false\nconsole.log(a.__proto__.__proto__ === C); // false\nconsole.log(a.__proto__.__proto__ === C.prototype); // true\nconsole.log(a.__proto__.__proto__.constructor === C); // true\n")),(0,r.kt)("p",null,'function Animal(name) {\n// \u5c5e\u6027\nthis.name = name || "Animal";\n// \u5b9e\u4f8b\u65b9\u6cd5\nthis.sleep = function () {\nconsole.log(this.name + "\u6b63\u5728\u7761\u89c9\uff01");\n};\n}\n// \u539f\u578b\u65b9\u6cd5\nAnimal.prototype.eat = function (food) {\nconsole.log(this.name + "\u6b63\u5728\u5403\uff1a" + food);\n};\nfunction Cat(name){\nAnimal.call(this);\nthis.name = name || \'Tom\';\n}\n(function(){\n// \u521b\u5efa\u4e00\u4e2a\u6ca1\u6709\u5b9e\u4f8b\u65b9\u6cd5\u7684\u7c7b\nvar Super = function(){};\nSuper.prototype = Animal.prototype;\n//\u5c06\u5b9e\u4f8b\u4f5c\u4e3a\u5b50\u7c7b\u7684\u539f\u578b\nCat.prototype = new Super();\n})();'),(0,r.kt)("p",null,"// Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); // true\nconsole.log(cat instanceof Cat); //true"),(0,r.kt)("p",null,"console.log('Cat.prototype.constructor',Cat.prototype.constructor)"),(0,r.kt)("h3",{id:"lodash-\u539f\u578b\u6c61\u67d3\u6f0f\u6d1e"},"lodash \u539f\u578b\u6c61\u67d3\u6f0f\u6d1e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const payload = \'{"constructor": {"prototype": {"toString": true}}}\';\n\n_.defaultsDeep({}, JSON.parse(payload));\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// person \u662f\u4e00\u4e2a\u7b80\u5355\u7684 JavaScript \u5bf9\u8c61\nlet person = { name: "lucas" };\n// \u8f93\u51fa lucas\nconsole.log(person.name);\n// \u4fee\u6539 person \u7684\u539f\u578b\nperson.__proto__.name = "messi";\n// \u7531\u4e8e\u539f\u578b\u94fe\u987a\u5e8f\u67e5\u627e\u7684\u539f\u56e0\uff0cperson.name \u4ecd\u7136\u662f lucas\nconsole.log(person.name);\n// \u518d\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 person2 \u5bf9\u8c61\nlet person2 = {};\n// \u67e5\u770b person2.name\uff0c\u8f93\u51fa messi\nconsole.log(person2.name);\n\nconst isObject = (obj) => obj && obj.constructor && obj.constructor === Object;\nfunction merge(a, b) {\n  for (var attr in b) {\n    if (isObject(a[attr]) && isObject(b[attr])) {\n      merge(a[attr], b[attr]);\n    } else {\n      a[attr] = b[attr];\n    }\n  }\n  return a;\n}\nfunction clone(a) {\n  return merge({}, a);\n}\n\nlet req = \'{"__proto__": {"admin": 1}}\';\nvar body = JSON.parse(JSON.stringify(req));\nvar copybody = clone(body);\n\nlet admin = {};\nconsole.log(admin, admin.admin);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const payload = "{"constructor": {"prototype": {"toString": true}}}"\ndefaultsDeep({}, JSON.parse(payload))\n')),(0,r.kt)("p",null,"function A (){}\nconst a = new A()\na.a={a:2}\ntoString.call(a)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const hasOwn = {}.hasOwnProperty;\nconst isPlainObject = function (obj) {\n  var proto, Ctor;\n\n  // \u5224\u65ad\u662f\u5bf9\u8c61\n  // Detect obvious negatives\n  // Use toString instead of jQuery.type to catch host objects\n  if (!obj || toString.call(obj) !== "[object Object]") {\n    return false;\n  }\n\n  proto = Object.getPrototypeOf(obj);\n\n  // Objects with no prototype (e.g., `Object.create( null )`) are plain\n  if (!proto) {\n    return true;\n  }\n\n  // Objects with prototype are plain if they were constructed by a global Object function\n  Ctor = {}.hasOwnProperty.call(proto, "constructor") && proto.constructor;\n  console.log("hasOwn", hasOwn);\n  console.log("hasOwn.toString", hasOwn.toString);\n  console.log("hasOwn.toString.call( Object )", hasOwn.toString.call(Object));\n  return (\n    typeof Ctor === "function" &&\n    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)\n  );\n};\nconst extend = function () {\n  var options,\n    name,\n    src,\n    copy,\n    copyIsArray,\n    clone,\n    target = arguments[0] || {},\n    i = 1,\n    length = arguments.length,\n    deep = false;\n\n  // Handle a deep copy situation\n  if (typeof target === "boolean") {\n    deep = target;\n\n    // Skip the boolean and the target\n    target = arguments[i] || {};\n    i++;\n    console.log("i", i);\n  }\n\n  // Handle case when target is a string or something (possible in deep copy)\n  if (typeof target !== "object") {\n    // if ( typeof target !== "object" && !isFunction( target ) ) {\n    target = {};\n  }\n\n  // Extend jQuery itself if only one argument is passed\n  if (i === length) {\n    target = this;\n    i--;\n  }\n  console.log("i_for", i);\n\n  for (; i < length; i++) {\n    // Only deal with non-null/undefined values\n    if ((options = arguments[i]) != null) {\n      // Extend the base object\n      for (name in options) {\n        copy = options[name];\n        console.log("copy", JSON.stringify(copy), copy);\n        // Prevent never-ending loop \u76ee\u6807\u5bf9\u8c61\u4e0e\u62f7\u8d1d\u5bf9\u8c61\u7684\u5c5e\u6027\u76f8\u540c\u65f6\u4f1a\u4ea7\u751f\u5faa\u73af\u5f15\u7528\n        if (target === copy) {\n          // if ( name === "__proto__" || target === copy ) {\n          console.log("proto");\n          continue;\n        }\n        console.log("isPlainObject( copy ) ", isPlainObject(copy));\n        // Recurse if we\'re merging plain objects or arrays\n        if (\n          deep &&\n          copy &&\n          (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))\n        ) {\n          src = target[name];\n\n          // Ensure proper type for the source value\n          if (copyIsArray && !Array.isArray(src)) {\n            clone = [];\n          } else if (!copyIsArray && !isPlainObject(src)) {\n            clone = {};\n          } else {\n            clone = src;\n          }\n          copyIsArray = false;\n\n          // Never move original objects, clone them\n          target[name] = extend(deep, clone, copy);\n\n          // Don\'t bring in undefined values\n        } else if (copy !== undefined) {\n          target[name] = copy;\n        }\n      }\n    }\n  }\n\n  // Return the modified object\n  return target;\n};\n\nextend(true, {}, JSON.parse(\'{"__proto__": {"devMode": true}}\'));\nconsole.log("json", JSON.parse(\'{"__proto__": {"devMode": true}}\'));\n\nconsole.log(!("devMode" in {}), "Object.prototype not polluted", {});\n\nlet a = {};\na["__proto__"] = { self: true };\nconsole.log({});\n\nlet t = {};\nt["__proto__"] = JSON.parse(\'{"__proto__": {"devMode": true}}\');\nconsole.log(!("devMode" in {}), "Object.prototype not polluted", {});\n\nlet t = {};\nlet c = JSON.parse(\'{"__proto__": {"devMode": true}}\');\nfor (name in c) {\n  console.log(c[name]);\n  t[name] = c[name];\n}\nconsole.log(!("devMode" in {}), "Object.prototype not polluted", {});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const hasOwn = {}.hasOwnProperty;\nconst isPlainObject = function (obj) {\n  // \u5224\u65ad\u662f\u5bf9\u8c61\n  if (!obj || toString.call(obj) !== "[object Object]") {\n    return false;\n  }\n  return true;\n};\nconst extend = function () {\n  var options,\n    name,\n    src,\n    copy,\n    copyIsArray,\n    clone,\n    i = 2,\n    length = arguments.length;\n  deep = arguments[0];\n  target = arguments[1];\n  for (; i < length; i++) {\n    // Only deal with non-null/undefined values\n    if ((options = arguments[i]) != null) {\n      // Extend the base object\n      for (name in options) {\n        copy = options[name];\n        // Prevent never-ending loop \u76ee\u6807\u5bf9\u8c61\u4e0e\u62f7\u8d1d\u5bf9\u8c61\u7684\u5c5e\u6027\u76f8\u540c\u65f6\u4f1a\u4ea7\u751f\u5faa\u73af\u5f15\u7528\n        if (target === copy) {\n          // if ( name === "__proto__" || target === copy ) {\n          console.log("proto");\n          continue;\n        }\n        console.log("isPlainObject( copy ) ", isPlainObject(copy));\n        // Recurse if we\'re merging plain objects or arrays\n        if (\n          deep &&\n          copy &&\n          (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))\n        ) {\n          console.log("target1", JSON.stringify(target),\'name\',JSON.stringify(name));\n\n          src = target[name];\n\n          // Ensure proper type for the source value\n          if (copyIsArray && !Array.isArray(src)) {\n            console.log(\'clone = []\',JSON.stringify([]),\'to\',JSON.stringify(clone))\n            clone = [];\n          } else if (!copyIsArray && !isPlainObject(src)) {\n            console.log(\'clone = {}\',JSON.stringify({}),\'to\',JSON.stringify(clone))\n            clone = {};\n          } else {\n            console.log(\'clone = src\',JSON.stringify(src),\'to\',JSON.stringify(clone))\n            clone = src;\n          }\n          copyIsArray = false;\n\n          console.log("copyObj", JSON.stringify(copy),\'to\',JSON.stringify(clone));\n          console.log("target", JSON.stringify(target),\'name\',JSON.stringify(name));\n          // Never move original objects, clone them\n          target[name] = extend(deep, clone, copy);\n\n          // Don\'t bring in undefined values\n        } else if (copy !== undefined) {\n\n          console.log("copyNotObj", JSON.stringify(copy), copy,\'to\',JSON.stringify(target[name]), target[name]);\n          console.log("target", JSON.stringify(target), copy,\'name\',JSON.stringify(name));\n          target[name] = copy;\n        }\n      }\n    }\n  }\n\n  // Return the modified object\n  return target;\n};\n\nextend(true, {}, JSON.parse(\'{"__proto__": {"devMode": true}}\'));\n\nconsole.log(!("devMode" in {}), "Object.prototype not polluted", {});\nconsole.log("json", JSON.parse(\'{"__proto__": {"devMode": true}}\'));\n')),(0,r.kt)("p",null,"\u5173\u952e\u7b80\u5199"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let target = {}\nlet src = target['__proto__']\nextendAgain = (t,c) =>{\n  t['devMode'] = true\n}\ntarget['__proto__'] = extendAgain(target['__proto__'],{\"devMode\":true})\n\n// extend(true, {}, JSON.parse('{\"__proto__\": {\"devMode\": true}}'));\n\nconsole.log(!(\"devMode\" in {}), \"Object.prototype not polluted\", {});\n")),(0,r.kt)("p",null,"\u5173\u952e\u7b80\u5199"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let target = {}\nlet src = target['__proto__']\nextendAgain = (t,c) =>{\n  t['devMode'] = true\n}\n// target['__proto__'] = extendAgain(target['__proto__'])\nextendAgain(target['__proto__'])\n\n// extend(true, {}, JSON.parse('{\"__proto__\": {\"devMode\": true}}'));\n\nconsole.log(!(\"devMode\" in {}), \"Object.prototype not polluted\", {});\n")),(0,r.kt)("p",null,"\u5173\u952e\u7b80\u5199"),(0,r.kt)("p",null,"\u5982\u679c\u4eba\u5bb6\u6846\u67b6\u6709\u81ea\u5df1\u5199\u7684for in \u904d\u5386\u521b\u9020\u6216\u8005\u5408\u5e76\u5bf9\u8c61\uff0c\u6ca1\u6709\u5c4f\u853d\u6389",(0,r.kt)("strong",{parentName:"p"},"proto"),"\uff0c\n\u5c31\u4f1a\u6709\u6c61\u67d3\u5168\u5c40\u5bf9\u8c61\u7684\u6f0f\u6d1e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let target = {}\ntarget['__proto__']['devMode']=true\nconsole.log(!(\"devMode\" in {}), \"Object.prototype not polluted\", {});\n")),(0,r.kt)("p",null,"\u53ea\u8981\u4e2d\u95f4\u6267\u884c \u8fd9\u6bb5\u4ee3\u7801\u7684\u7b2c\u4e8c\u884c\uff0c\u5168\u5c40\u6240\u6709\u4ee5\u5b57\u9762\u91cf{a:0}\u521b\u5efa\u7684\u5bf9\u8c61\u90fd\u4f1a\u53d7\u5230\u6c61\u67d3\u3002 jquery \u548c lodash19\u5e74\u7684\u65f6\u5019\u4fee\u590d\u4e86\u8fd9\u4e2a\u6f0f\u6d1e\uff0c\u5c31\u662f\u52a0\u4e86\u8fd9\u4e2a\u5224\u65ad\u3002"))}g.isMDXComponent=!0}}]);