"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,c={unversionedId:"react/third_party/third_party",id:"react/third_party/third_party",title:"third_party",description:"react-transtion-group \u5b98\u65b9\u52a8\u753b\u5e93",source:"@site/docs/react/third_party/third_party.mdx",sourceDirName:"react/third_party",slug:"/react/third_party/",permalink:"/docs/react/third_party/",draft:!1,tags:[],version:"current",lastUpdatedAt:1684045996,formattedLastUpdatedAt:"2023\u5e745\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useful_fn",permalink:"/docs/react/source_code/useful_fn/"},next:{title:"vue2.0",permalink:"/docs/category/vue20"}},s={},i=[{value:"react-transtion-group \u5b98\u65b9\u52a8\u753b\u5e93",id:"react-transtion-group-\u5b98\u65b9\u52a8\u753b\u5e93",level:3},{value:"\u591a class \u5904\u7406",id:"\u591a-class-\u5904\u7406",level:3},{value:"useWatch",id:"usewatch",level:3},{value:"antd form \u4e2d\u81ea\u52a8\u6536\u96c6\u8868\u5355\u5185\u5bb9\u53d8\u5316\u65f6",id:"antd-form-\u4e2d\u81ea\u52a8\u6536\u96c6\u8868\u5355\u5185\u5bb9\u53d8\u5316\u65f6",level:3},{value:"trim antd \u4e2d input \u7684\u524d\u540e\u7a7a\u683c\u5904\u7406",id:"trim-antd-\u4e2d-input-\u7684\u524d\u540e\u7a7a\u683c\u5904\u7406",level:3}],u={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"react-transtion-group-\u5b98\u65b9\u52a8\u753b\u5e93"},"react-transtion-group \u5b98\u65b9\u52a8\u753b\u5e93"),(0,a.kt)("h3",{id:"\u591a-class-\u5904\u7406"},"\u591a class \u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import cx from "classnames";\n<div className={cx(styles.select, "nmm-select-outline")} />;\n')),(0,a.kt)("h3",{id:"usewatch"},"useWatch"),(0,a.kt)("p",null,"antd \u5728\u7248\u672c 4.20.0 \u4e2d\u589e\u52a0\u4e86 Form.useWatch(name, form) \u65b9\u6cd5\uff0c\u7528\u6765\u83b7\u53d6\u8868\u5355\u7684\u503c\uff0c\u5f53\u8868\u5355\u503c\u53d1\u751f\u4fee\u6539\uff0c\u8fd8\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u7684\u5237\u65b0\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u663e\u8457\u51cf\u5c11\u4ee3\u7801\u91cf\uff0c\u7f3a\u70b9\u662f\u53ea\u80fd\u83b7\u53d6 FormStore \u4e2d\u7ef4\u62a4\u7684\u8868\u5355\u503c\uff08Form.Item \u8bbe\u7f6e\u4e86 name \u5c5e\u6027\uff09!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// field-form/src/useWatch.ts\nfunction useWatch(dependencies: NamePath = [], form?: FormInstance) {\n  const [value, setValue] = useState<any>();\n\n  const fieldContext = useContext(FieldContext);\n  const formInstance = (form as InternalFormInstance) || fieldContext;\n  const namePath = getNamePath(dependencies);\n\n  useEffect(() => {\n    const { getFieldsValue, getInternalHooks } = formInstance;\n    const { registerWatch } = getInternalHooks(HOOK_MARK);\n    registerWatch((store) => {\n      const newValue = getValue(store, namePath);\n      if (value !== newValue) {\n        setValue(newValue);\n      }\n    });\n    const initialValue = getValue(getFieldsValue(), namePath);\n    setValue(initialValue);\n  }, []);\n  return value;\n}\n")),(0,a.kt)("h3",{id:"antd-form-\u4e2d\u81ea\u52a8\u6536\u96c6\u8868\u5355\u5185\u5bb9\u53d8\u5316\u65f6"},"antd form \u4e2d\u81ea\u52a8\u6536\u96c6\u8868\u5355\u5185\u5bb9\u53d8\u5316\u65f6"),(0,a.kt)("p",null,'checkbox \u5916\u4fa7\u7684 Form.Item \u9664\u4e86\u8981\u8bbe\u7f6e name \u4e4b\u5916\uff0c\u8fd8\u8981\u8bbe\u7f6e valuePropName="checked"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Form>\n  <Form.Item name="a" label="" valuePropName="checked" noStyle>\n    <Checkbox>\u53ea\u770b\u4e0e\u6211\u6709\u5173</Checkbox>\n  </Form.Item>\n</Form>\n')),(0,a.kt)("h3",{id:"trim-antd-\u4e2d-input-\u7684\u524d\u540e\u7a7a\u683c\u5904\u7406"},"trim antd \u4e2d input \u7684\u524d\u540e\u7a7a\u683c\u5904\u7406"),(0,a.kt)("p",null,"1.\u53ef\u4ee5\u5728\u63d0\u4ea4\u65f6\u5c06\u9700\u8981\u5207\u7684\u503c\u5207\u4e86\u4e4b\u540e\uff0c\u518d\u8c03\u8868\u5355\u9a8c\u8bc1\u3002\u7528\u6237\u4f53\u9a8c\u597d\uff0c\u63a8\u8350\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const submit = async () => {\n  form.setFieldsValue({\n    name: form.getFieldValue("name")?.trim(),\n  });\n  await form.validateFields();\n};\n')),(0,a.kt)("p",null,"2.\u8f93\u5165\u65f6\u5207\u6389\u7a7a\u683c\uff0c\u548c element \u7684 trim \u529f\u80fd\u4e00\u6837\uff0c\u7f3a\u70b9\u662f\u56e0\u4e3a\u5b9e\u65f6\u5207\uff0c\u6240\u4ee5\u65e0\u6cd5\u8f93\u5165\u7a7a\u683c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Form.Item\n  name="city"\n  label="\u57ce\u5e02"\n  getValueFromEvent={(e) => e.target.value.replace(/(^\\s*)|(\\s*$)/g, "")} // getValueFromEvent={(e) => { console.log(e.target); return e.target.value; }}\n>\n  <Input />\n</Form.Item>\n')),(0,a.kt)("p",null,"3.\u5199\u5728\u9a8c\u8bc1\u89c4\u5219\u4e2d\uff0c\u53ef\u4ee5\u8f93\u5165\u7a7a\u683c\uff0c\u7f3a\u70b9\u524d\u540e\u7a7a\u683c\u4e0d\u4f1a\u81ea\u52a8\u5207\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// \u7528\u6b63\u5219\u5b9e\u73b0api\u5b9e\u73b0\n<Form.Item\n  name="city"\n  label="\u57ce\u5e02"\n  rules={[{ pattern: /(^\\S)((.)*\\S)?(\\S*$)/, message: "\u524d\u540e\u4e0d\u80fd\u6709\u7a7a\u683c" }]}\n>\n  <Input />\n</Form.Item>\n\n// \u7528\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u5b9e\u73b0\n<Form.Item\n  name="city"\n  label="\u57ce\u5e02"\n  rules={[{validator: (_, value) => {const reg = /(^\\s+)|(\\s+$)/;if(reg.test(value)) {return Promise.reject(new Error(\'\u524d\u540e\u4e0d\u80fd\u6709\u7a7a\u683c\'));}return Promise.resolve();}}]}\n>\n<Input />\n</Form.Item>\n')))}m.isMDXComponent=!0}}]);