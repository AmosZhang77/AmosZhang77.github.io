## 第三方优秀资源 地址收集

## 日期时间处理 https://github.com/moment/moment

## vue 文档项目 https://vuepress.vuejs.org/zh/

## 项目代码量统计 https://github.com/AlDanial/cloc

安装cloc之前要安装perl垫片ActiveState Perl 5.6.1或者 Strawberry Perl（我用了ActiveState）

（https://strawberryperl.com/ 或者 https://www.activestate.com/products/perl/）

npm install -g cloc

### 统计文件夹命令 cloc filename

### XSS攻击 防御 dompurify

```shell
npm install dompurify
```

```js
import DOMPurify from 'dompurify';

var clean = DOMPurify.sanitize(dirty);

let text = '<img/src=1 onerror=alert(1)>' // 用户填写的可能有风险的内容

// 没有防护的时候，
return (
  <div
    dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} // 将换行符替换成br，为了显示换行
  />
)

// 用法
return (
  <div
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text.replace(/\n/g, '<br />')) }}
  />
)
```

方便切npm源工具： nrm

```shell
npm install -g nrm
```

执行命令nrm ls查看可选的源

```shell
nrm uls
```

添加自定义源

```shell
nrm add newname http://registry.npm.frp.trmap.cn/
```

切换

```shell
nrm use taobao
```

测试速度

```shell
nrm test newname
```

方便切yarn源工具： yrm

在且yarn源的时候会一起把npm源一起切了

```shell
npm install -g yrm
```

执行命令yrm  ls查看可选的源

切换

```shell
yrm use taobao
```

切换 sass源
```shell
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

```

移动端调试功能
vconsole

通过环境判断决定是否启用vconsole，比如开发环境，或者线上环境

nvm在windows下未开启脚本安全策略时，切换版本会报乱码错误
管理员打开shell，输入以下两个命令

打开权限

参数详情参阅：

set-ExecutionPolicy RemoteSigned

https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2
设置执行策略为要求远程脚本签名，范围为当前用户

win11
```shell
   Set-ExecutionPolicy RemoteSigned
#   上面输入之后会显示ExecutionPolicy:  
#   输入 CurrentUser
CurrentUser
```

win10
```shell
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```

如在普通shell里面nvm use 版本 报乱码错误，尝试在管理员shell里面执行use命令



nvm 在安装版本前修改源能帮助顺利安装上

1、命令行运行：nvm root 显示出nvm的安装目录

2、打开nvm文件夹下的settings.txt文件，在最后添加以下代码：

node_mirror: https://npm.taobao.org/mirrors/node/

npm_mirror: https://npm.taobao.org/mirrors/npm/

将下载镜像源指向淘宝（这步也很重要，否则在安装node的时候会出现卡死，npm安装不成功的情况）

3、打开cmd，nvm install v版本号

4、打开nvm文件中对应版本号的node_modules文件夹，可以看到npm文件，则说明npm安装成功

手动安装node对应的npm版本
我没有尝试过这种方法，记录一下，如果有对这种方法比较感兴趣的，可以试一下。
是因为在使用NVM安装node的时候不会默认安装npm，所以需要我们自己下载后放到nvm对应的node目录下面

npm下载地址：http://npm.taobao.org/mirrors/npm/ （下载对应版本的zip文件）
node版本对应npm版本：https://nodejs.org/zh-cn/download/releases/

下载完成后将zip文件解压到nvm安装目录中对应的node版本中的node_modules目录下
解压在“X:\XXX\node_modules”下 ，然后将文件夹的名称改为npm



最后将npm文件夹里面的bin目录下的npm和npm.cmd两个文件复制一份到对应node版本的根目录下


image.png
使用 npm -v 测试一下
