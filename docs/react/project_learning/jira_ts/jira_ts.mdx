


### tsconfig.json

配置绝对路径:
配置绝对路径会去src中开始寻找。

/* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

引入src/page/test文件

```ts
import test from 'page/test'
```

根据官方文档安装prettier 

```shell
yarn add --dev --exact prettier
```

创建prettierrc.json

这里千万注意不要按官方文档下面的命令行创建！！！文件win下文件编码会不是utf-8，prettier时会报乱码错误。
手动创建文件，写入{}
```shell
echo {}> .prettierrc.json
```

创建
.prettierignore
```text
# Ignore artifacts:
build
coverage
.idea
.husky

# Ignore all HTML files:
*.html
```

Pre-commit Hook

官方文档配合lint-staged一起使用，（在git时自动lint代码）Run linters on git staged files

安装lint-staged 
```shell
npx mrm@2 lint-staged
```

package.json 加入ts,tsx到prettier规则中
"lint-staged": {
"*.{js,css,md}": "prettier --write"
}

"lint-staged": {
"*.{js,css,md,ts,tsx}": "prettier --write"
}

eslint和prettier规则有些冲突，官网给出了安装eslint-config-prettier和stylelint-config-prettier的方法
https://prettier.io/docs/en/install.html

安装eslint-config-prettier 用于解决冲突

```shell
yarn add eslint-config-prettier -D
```

然后配置eslint规则后面加上prettier，覆盖上面重复的eslint的规则

```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }
}
```

加上prettier

```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "prettier"
    ]
  }
}
```

新版husky会新建一个.husky/pre-commit文件写配置

```text
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

老版本会自动在package.json中配置

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```



规范commit信息 commitlint

https://github.com/conventional-changelog

安装

```shell
npm install --save-dev @commitlint/config-conventional @commitlint/cli

```

运行，创建配置文件
这里也是千万注意不要按官方文档下面的命令行创建！！！文件win下文件编码会不是utf-8，prettier时会报乱码错误。

```shell
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

必须手动创建文件，写入commitlint.config.js
```js
module.exports = {extends: ['@commitlint/config-conventional']}
```

husky v4版本在 package.json里面加，hooks配置如下

```json
// .huskyrc.json (v4)
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

当前hooks版本为v7

运行
```shell
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```
会创建.husky/commit-msg文件并配置npx --no -- commitlint --edit $1
```text
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit $1
```
HUSKY_GIT_PARAMS 规则对应$1 内置参数


(自己尝试时发现这一条加到.husky/pre-commit规则里面也可以)
```text
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

npx --no-install commitlint --edit $1
```


规则参考

主要参考：
https://github.com/conventional-changelog/commitlint/#what-is-commitlint
参考：
https://github.com/conventional-changelog-archived-repos/validate-commit-msg

https://www.conventionalcommits.org/zh-hans/v1.0.0/


### Mock数据配置
安装json-server


### rest api
url代表资源/对象，method代表行为

GET /tickets // 列表
GET /tickets/12 // 详情
POST /tickets // 增加
PUT /tickets/12 // 替换
PATCH /tickets/12 // 修改
DELETE /tickets/12 // 删除

安装
```shell
npm install -g json-server
```

```shell
npm install -D json-server
```
更目录下创建db.json
```json
{
  "users": []
}
```

开启服务
```shell
json-server --watch db.json
```
就可以用postman 按rest规范增删改查
按照提示

post http://localhost:3000/users 参数name:"jack"

```json
{
  "users": [
    {
      "name": "jack",
      "id": 1
    }
  ]
}
```

将服务快捷地配置到项目

package.json

```json
{
  "scripts": {
    "json-server": "json-server __json_server_mock__/db.json --watch"
  }
}
```
新建__json_server_mock__/db.json文件作为数据


端口参数
```json
{
  "scripts": {
    "json-server": "json-server __json_server_mock__/db.json --watch --port 3001"
  }
}
```


根目录创建 .env .env.development两个文件

.env.development
```text
REACT_APP_API_URL=http://localhost:3001
```

.env
```text
REACT_APP_API_URL=http://online.com
```

代码里面，如此能拿到url。

同时如果跑npm start， webpack自动给.env.development文件中的变量

同时如果跑npm build， webpack自动给.env文件中的变量

```jsx
export const com = () => {

  const apiUrl = process.env.REACT_APP_API_URL
  return <div>111</div>
}
```
