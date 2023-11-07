"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,g=u["".concat(p,".").concat(k)]||u[k]||m[k]||a;return n?l.createElement(g,s(s({ref:t},i),{},{components:n})):l.createElement(g,s({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=n(7462),r=(n(7294),n(3905));const a={},s=void 0,o={unversionedId:"react/project_learning/jira_ts/jira_ts",id:"react/project_learning/jira_ts/jira_ts",title:"jira_ts",description:"tsconfig.json",source:"@site/docs/react/project_learning/jira_ts/jira_ts.mdx",sourceDirName:"react/project_learning/jira_ts",slug:"/react/project_learning/jira_ts/",permalink:"/docs/react/project_learning/jira_ts/",draft:!1,tags:[],version:"current",lastUpdatedAt:1669064019,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fn",permalink:"/docs/react/base/fn/"},next:{title:"base",permalink:"/docs/react/source_code/base/"}},p={},c=[{value:"tsconfig.json",id:"tsconfigjson",level:3},{value:"Mock\u6570\u636e\u914d\u7f6e",id:"mock\u6570\u636e\u914d\u7f6e",level:3},{value:"rest api",id:"rest-api",level:3}],i={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"tsconfigjson"},"tsconfig.json"),(0,r.kt)("p",null,"\u914d\u7f6e\u7edd\u5bf9\u8def\u5f84:\n\u914d\u7f6e\u7edd\u5bf9\u8def\u5f84\u4f1a\u53bbsrc\u4e2d\u5f00\u59cb\u5bfb\u627e\u3002"),(0,r.kt)("p",null,"/",(0,r.kt)("em",{parentName:"p"}," baseUrl\u7528\u4e8e\u8bbe\u7f6e\u89e3\u6790\u975e\u76f8\u5bf9\u6a21\u5757\u540d\u79f0\u7684\u57fa\u672c\u76ee\u5f55\uff0c\u76f8\u5bf9\u6a21\u5757\u4e0d\u4f1a\u53d7baseUrl\u7684\u5f71\u54cd "),"/"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": "./src"\n  }\n}\n')),(0,r.kt)("p",null,"\u5f15\u5165src/page/test\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import test from 'page/test'\n")),(0,r.kt)("p",null,"\u6839\u636e\u5b98\u65b9\u6587\u6863\u5b89\u88c5prettier "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev --exact prettier\n")),(0,r.kt)("p",null,"\u521b\u5efaprettierrc.json"),(0,r.kt)("p",null,"\u8fd9\u91cc\u5343\u4e07\u6ce8\u610f\u4e0d\u8981\u6309\u5b98\u65b9\u6587\u6863\u4e0b\u9762\u7684\u547d\u4ee4\u884c\u521b\u5efa\uff01\uff01\uff01\u6587\u4ef6win\u4e0b\u6587\u4ef6\u7f16\u7801\u4f1a\u4e0d\u662futf-8\uff0cprettier\u65f6\u4f1a\u62a5\u4e71\u7801\u9519\u8bef\u3002\n\u624b\u52a8\u521b\u5efa\u6587\u4ef6\uff0c\u5199\u5165{}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo {}> .prettierrc.json\n")),(0,r.kt)("p",null,"\u521b\u5efa\n.prettierignore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"# Ignore artifacts:\nbuild\ncoverage\n.idea\n.husky\n\n# Ignore all HTML files:\n*.html\n")),(0,r.kt)("p",null,"Pre-commit Hook"),(0,r.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u914d\u5408lint-staged\u4e00\u8d77\u4f7f\u7528\uff0c\uff08\u5728git\u65f6\u81ea\u52a8lint\u4ee3\u7801\uff09Run linters on git staged files"),(0,r.kt)("p",null,"\u5b89\u88c5lint-staged "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx mrm@2 lint-staged\n")),(0,r.kt)("p",null,'package.json \u52a0\u5165ts,tsx\u5230prettier\u89c4\u5219\u4e2d\n"lint-staged": {\n"*.{js,css,md}": "prettier --write"\n}'),(0,r.kt)("p",null,'"lint-staged": {\n"*.{js,css,md,ts,tsx}": "prettier --write"\n}'),(0,r.kt)("p",null,"eslint\u548cprettier\u89c4\u5219\u6709\u4e9b\u51b2\u7a81\uff0c\u5b98\u7f51\u7ed9\u51fa\u4e86\u5b89\u88c5eslint-config-prettier\u548cstylelint-config-prettier\u7684\u65b9\u6cd5\n",(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/install.html"},"https://prettier.io/docs/en/install.html")),(0,r.kt)("p",null,"\u5b89\u88c5eslint-config-prettier \u7528\u4e8e\u89e3\u51b3\u51b2\u7a81"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add eslint-config-prettier -D\n")),(0,r.kt)("p",null,"\u7136\u540e\u914d\u7f6eeslint\u89c4\u5219\u540e\u9762\u52a0\u4e0aprettier\uff0c\u8986\u76d6\u4e0a\u9762\u91cd\u590d\u7684eslint\u7684\u89c4\u5219"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eslintConfig": {\n    "extends": [\n      "react-app",\n      "react-app/jest"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"\u52a0\u4e0aprettier"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eslintConfig": {\n    "extends": [\n      "react-app",\n      "react-app/jest",\n      "prettier"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"\u65b0\u7248husky\u4f1a\u65b0\u5efa\u4e00\u4e2a.husky/pre-commit\u6587\u4ef6\u5199\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx lint-staged\n')),(0,r.kt)("p",null,"\u8001\u7248\u672c\u4f1a\u81ea\u52a8\u5728package.json\u4e2d\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "husky": {\n    "hooks": {\n      "pre-commit": "lint-staged"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u89c4\u8303commit\u4fe1\u606f commitlint"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog"},"https://github.com/conventional-changelog")),(0,r.kt)("p",null,"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @commitlint/config-conventional @commitlint/cli\n\n")),(0,r.kt)("p",null,"\u8fd0\u884c\uff0c\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\n\u8fd9\u91cc\u4e5f\u662f\u5343\u4e07\u6ce8\u610f\u4e0d\u8981\u6309\u5b98\u65b9\u6587\u6863\u4e0b\u9762\u7684\u547d\u4ee4\u884c\u521b\u5efa\uff01\uff01\uff01\u6587\u4ef6win\u4e0b\u6587\u4ef6\u7f16\u7801\u4f1a\u4e0d\u662futf-8\uff0cprettier\u65f6\u4f1a\u62a5\u4e71\u7801\u9519\u8bef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo \"module.exports = {extends: ['@commitlint/config-conventional']}\" > commitlint.config.js\n")),(0,r.kt)("p",null,"\u5fc5\u987b\u624b\u52a8\u521b\u5efa\u6587\u4ef6\uff0c\u5199\u5165commitlint.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {extends: ['@commitlint/config-conventional']}\n")),(0,r.kt)("p",null,"husky v4\u7248\u672c\u5728 package.json\u91cc\u9762\u52a0\uff0chooks\u914d\u7f6e\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .huskyrc.json (v4)\n{\n  "hooks": {\n    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n  }\n}\n')),(0,r.kt)("p",null,"\u5f53\u524dhooks\u7248\u672c\u4e3av7"),(0,r.kt)("p",null,"\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'\n")),(0,r.kt)("p",null,"\u4f1a\u521b\u5efa.husky/commit-msg\u6587\u4ef6\u5e76\u914d\u7f6enpx --no -- commitlint --edit $1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no -- commitlint --edit $1\n')),(0,r.kt)("p",null,"HUSKY_GIT_PARAMS \u89c4\u5219\u5bf9\u5e94$1 \u5185\u7f6e\u53c2\u6570"),(0,r.kt)("p",null,"(\u81ea\u5df1\u5c1d\u8bd5\u65f6\u53d1\u73b0\u8fd9\u4e00\u6761\u52a0\u5230.husky/pre-commit\u89c4\u5219\u91cc\u9762\u4e5f\u53ef\u4ee5)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx lint-staged\n\nnpx --no-install commitlint --edit $1\n')),(0,r.kt)("p",null,"\u89c4\u5219\u53c2\u8003"),(0,r.kt)("p",null,"\u4e3b\u8981\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog/commitlint/#what-is-commitlint"},"https://github.com/conventional-changelog/commitlint/#what-is-commitlint"),"\n\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog-archived-repos/validate-commit-msg"},"https://github.com/conventional-changelog-archived-repos/validate-commit-msg")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/"},"https://www.conventionalcommits.org/zh-hans/v1.0.0/")),(0,r.kt)("h3",{id:"mock\u6570\u636e\u914d\u7f6e"},"Mock\u6570\u636e\u914d\u7f6e"),(0,r.kt)("p",null,"\u5b89\u88c5json-server"),(0,r.kt)("h3",{id:"rest-api"},"rest api"),(0,r.kt)("p",null,"url\u4ee3\u8868\u8d44\u6e90/\u5bf9\u8c61\uff0cmethod\u4ee3\u8868\u884c\u4e3a"),(0,r.kt)("p",null,"GET /tickets // \u5217\u8868\nGET /tickets/12 // \u8be6\u60c5\nPOST /tickets // \u589e\u52a0\nPUT /tickets/12 // \u66ff\u6362\nPATCH /tickets/12 // \u4fee\u6539\nDELETE /tickets/12 // \u5220\u9664"),(0,r.kt)("p",null,"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g json-server\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -D json-server\n")),(0,r.kt)("p",null,"\u66f4\u76ee\u5f55\u4e0b\u521b\u5efadb.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": []\n}\n')),(0,r.kt)("p",null,"\u5f00\u542f\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"json-server --watch db.json\n")),(0,r.kt)("p",null,"\u5c31\u53ef\u4ee5\u7528postman \u6309rest\u89c4\u8303\u589e\u5220\u6539\u67e5\n\u6309\u7167\u63d0\u793a"),(0,r.kt)("p",null,'post http://localhost:3000/users \u53c2\u6570name:"jack"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "name": "jack",\n      "id": 1\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"\u5c06\u670d\u52a1\u5feb\u6377\u5730\u914d\u7f6e\u5230\u9879\u76ee"),(0,r.kt)("p",null,"package.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "json-server": "json-server __json_server_mock__/db.json --watch"\n  }\n}\n')),(0,r.kt)("p",null,"\u65b0\u5efa",(0,r.kt)("strong",{parentName:"p"},"json_server_mock"),"/db.json\u6587\u4ef6\u4f5c\u4e3a\u6570\u636e"),(0,r.kt)("p",null,"\u7aef\u53e3\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "json-server": "json-server __json_server_mock__/db.json --watch --port 3001"\n  }\n}\n')),(0,r.kt)("p",null,"\u6839\u76ee\u5f55\u521b\u5efa .env .env.development\u4e24\u4e2a\u6587\u4ef6"),(0,r.kt)("p",null,".env.development"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"REACT_APP_API_URL=http://localhost:3001\n")),(0,r.kt)("p",null,".env"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"REACT_APP_API_URL=http://online.com\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u91cc\u9762\uff0c\u5982\u6b64\u80fd\u62ff\u5230url\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\u5982\u679c\u8dd1npm start\uff0c webpack\u81ea\u52a8\u7ed9.env.development\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"),(0,r.kt)("p",null,"\u540c\u65f6\u5982\u679c\u8dd1npm build\uff0c webpack\u81ea\u52a8\u7ed9.env\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export const com = () => {\n\n  const apiUrl = process.env.REACT_APP_API_URL\n  return <div>111</div>\n}\n")))}m.isMDXComponent=!0}}]);