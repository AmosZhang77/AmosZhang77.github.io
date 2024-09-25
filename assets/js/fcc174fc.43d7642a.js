"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,i={unversionedId:"taro/base/useful_fn/useful_fn",id:"taro/base/useful_fn/useful_fn",title:"useful_fn",description:"\u53d6\u5fae\u4fe1\u5c0f\u7a0b\u5e8f dom \u9ad8\u5ea6",source:"@site/docs/taro/base/useful_fn/useful_fn.mdx",sourceDirName:"taro/base/useful_fn",slug:"/taro/base/useful_fn/",permalink:"/docs/taro/base/useful_fn/",draft:!1,tags:[],version:"current",lastUpdatedAt:1725279942,formattedLastUpdatedAt:"2024\u5e749\u67082\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"api",permalink:"/docs/taro/base/api/"},next:{title:"other",permalink:"/docs/taro/other/"}},c={},s=[{value:"\u53d6\u5fae\u4fe1\u5c0f\u7a0b\u5e8f dom \u9ad8\u5ea6",id:"\u53d6\u5fae\u4fe1\u5c0f\u7a0b\u5e8f-dom-\u9ad8\u5ea6",level:3},{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u65e0\u9650\u4e0b\u62c9\u529f\u80fd",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u65e0\u9650\u4e0b\u62c9\u529f\u80fd",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u53d6\u5fae\u4fe1\u5c0f\u7a0b\u5e8f-dom-\u9ad8\u5ea6"},"\u53d6\u5fae\u4fe1\u5c0f\u7a0b\u5e8f dom \u9ad8\u5ea6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const [viewHeight, setViewHeight] = useState(0);\nuseEffect(() => {\n  // \u7b49\u5f85\u89c6\u56fe\u6e32\u67d3\u5b8c\u6210\u540e\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\n  Taro.nextTick(() => {\n    Taro.createSelectorQuery()\n      .select("#scrollView")\n      .boundingClientRect()\n      .exec((res) => {\n        if (res && res[0]) {\n          console.log("res[0].height", res[0].height);\n          setViewHeight(res[0].height);\n        }\n      });\n  });\n}, []);\n')),(0,o.kt)("h3",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u65e0\u9650\u4e0b\u62c9\u529f\u80fd"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u65e0\u9650\u4e0b\u62c9\u529f\u80fd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const handleScroll = (e) => {\n  const { scrollTop, scrollHeight } = e.detail;\n  console.log("e.detail", e.detail);\n  if (scrollTop + viewHeight >= scrollHeight - 50) {\n    // \u5047\u8bbe\u8ddd\u79bb\u5e95\u90e850px\u65f6\u89e6\u53d1\u52a0\u8f7d\n    loadMore();\n  }\n};\nreturn (\n  <ScrollView\n    id="scrollView"\n    scrollY\n    scrollWithAnimation\n    onScroll={handleScroll}\n  ></ScrollView>\n);\n')))}p.isMDXComponent=!0}}]);