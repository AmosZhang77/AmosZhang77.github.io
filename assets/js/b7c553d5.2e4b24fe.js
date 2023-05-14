"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"react/base/api/api",id:"react/base/api/api",title:"api",description:"\u6807\u7b7e\u5c5e\u6027\u7531\u5bf9\u8c61\u89e3\u6784\u5f97\u5230",source:"@site/docs/react/base/api/api.mdx",sourceDirName:"react/base/api",slug:"/react/base/api/",permalink:"/docs/react/base/api/",draft:!1,tags:[],version:"current",lastUpdatedAt:1684045996,formattedLastUpdatedAt:"2023\u5e745\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"base",permalink:"/docs/react/base/"},next:{title:"fn",permalink:"/docs/react/base/fn/"}},c={},p=[{value:"\u6807\u7b7e\u5c5e\u6027\u7531\u5bf9\u8c61\u89e3\u6784\u5f97\u5230",id:"\u6807\u7b7e\u5c5e\u6027\u7531\u5bf9\u8c61\u89e3\u6784\u5f97\u5230",level:3},{value:"cloneElement",id:"cloneelement",level:3},{value:"displayName",id:"displayname",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u6807\u7b7e\u5c5e\u6027\u7531\u5bf9\u8c61\u89e3\u6784\u5f97\u5230"},"\u6807\u7b7e\u5c5e\u6027\u7531\u5bf9\u8c61\u89e3\u6784\u5f97\u5230"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class PieReact extends React.Component {\n  state = {\n    boolean: true\n  };\n\n  render () {\n    const fullStyle = {\n      width: '100vw',\n      height: '100vh'\n    }\n    return (\n      <div>\n        <div width='100vw' height='100vh'>\u6807\u7b7e\u4e2d\u7684\u5c5e\u6027</div>\n        <div {...fullStyle}>\u6807\u7b7e\u4e2d\u7684\u5c5e\u6027\u901a\u8fc7\u5bf9\u8c61\u5c55\u5f00\uff0c\u8fbe\u5230\u4e0a\u9762\u6807\u7b7e\u4e00\u6837\u7684\u6548\u679c\u3002{...fullStyle}\u5916\u5c42\u7684{} \u8868\u793a\u8981\u89e3\u6790js\u4e86</div>\n        <div {...this.state.boolean ? fullStyle : {}}>\u63a7\u5236\u6807\u7b7e\u4e2d\u7684\u5c5e\u6027\u6709\u65e0</div>\n\n      </div>\n    )\n  }\n}\n\n")),(0,a.kt)("h3",{id:"cloneelement"},"cloneElement"),(0,a.kt)("p",null,"React.cloneElement\nchildren\u53ef\u80fd\u662f\u7ec4\u4ef6\u4f7f\u7528\u8005\u4f20\u5165\u7684\u4e00\u4e2a\u6309\u94ae\uff0c\u7ed9\u6309\u94ae\u6dfb\u52a0\u4e8b\u4ef6\uff0c\u5e76\u4e14\u4e0d\u5728\u5176\u7ec4\u4ef6\u7ed3\u6784\u5916\u4fa7\u52a0\u7ed3\u6784\uff08\u53ef\u4ee5\u4fdd\u8bc1\u5176\u6837\u5f0f\u5e03\u5c40\u7ed3\u6784\u4e0d\u6539\u53d8\uff09"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528cloneElement\u4e4b\u524d\u8981\u7528React.isValidElement\u5224\u65ad\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\n<>\n  {React.isValidElement(children)\n    ? React.cloneElement(children, {\n      onClick: openModal,\n    })\n    : children}\n  <Popup>\u5f39\u7a97</Popup>\n</> \n\n")),(0,a.kt)("h3",{id:"displayname"},"displayName"),(0,a.kt)("p",null,"displayName\u662f react \u5185\u90e8\u529f\u80fd\uff0c\u7528\u6765\u6807\u8bb0\u5224\u65ad\u7ec4\u4ef6\u662f\u4ec0\u4e48\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export const MenuItem = (props) => {\n\n  return (\n    <div>1</div>\n  )\n}\n\n// displayName\u662f react \u5185\u90e8\u529f\u80fd\uff0c\u7528\u6765\u6807\u8bb0\u5224\u65ad\u7ec4\u4ef6\u662f\u4ec0\u4e48\u7ec4\u4ef6\nMenuItem.displayName = 'MenuItem'\nexport default MenuItem\n")))}u.isMDXComponent=!0}}]);