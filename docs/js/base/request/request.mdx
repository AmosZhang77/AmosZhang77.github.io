## 请求

### 不确定多请求一起发，得到所有结果后，一起处理 Promise.all

请求promise推到一个数组中，Promise.all，可以得到所有结果后一起返回

### async await

```js
// axios() 只是伪代码，随便用什么请求框架或者new Promise请求
// 只要是请求然后返回ES6的promise对象的就行
const reqFn = async () => {
  const requestPromiseList = requestDataList.reduce((o, n, i) =>
    item.check === true ? [...o, axios(n.url)] : o, [])
  const res = await Promise.all(requestPromiseList)
  console.log(res)
}
```

后端允许跨域，用于跳过浏览器的同源协议。可以用于开发环境，不配代理的情况
response.addHeader("Access-Control-Allow-Origin", "*");


### 下载文件

```javascript


/** 下载文件-请求后处理函数 */


// 导出文件时 TOKEN 过期处理
 const reader = new FileReader()
reader.readAsText(res, 'utf-8')
reader.onload = () => {
  if (reader.result.indexOf('code') > 0) {
    const CODE = JSON.parse(reader.result).code
    if (isTokenExpired(CODE)) toLogin()
    // 导出token过期处理
    else {
      Message.error(JSON.parse(reader.result).message)
    } // 导出没有权限提示
  } else {
    // 获取excel 导出名称
    const name =
        response['headers']['content-disposition']?.split("'")[2] ??
        'Excel导出'
    const fileName = name.split('.')[0]
    const fileType = name.split('.')[1] ?? 'xlsx'
    // console.log(name, fileName, fileType)
    
    // 以上只为了获取文件名
    // 此函数转换文件下载，要注意请求的时候一定要 加上responseType: 'blob'！！！告诉浏览器返回的试blob，不是默认的text，或者是json，这样就不需要知道解析类型，直接解析出来
    exportFileCallback(
      res,
      `${window.decodeURIComponent(fileName)}_${Date.now()}.${fileType}`
    )

  }
}


function exportFileCallback(blob, name) {
const downloadElement = document.createElement('a')
const href = window.URL.createObjectURL(blob) // 创建下载的链接
downloadElement.href = href
// downloadElement.download = name // 下载后文件名
document.body.appendChild(downloadElement)
downloadElement.click() // 点击下载
document.body.removeChild(downloadElement) // 下载完成移除元素
window.URL.revokeObjectURL(href) // 释放掉blob对象
}

```
