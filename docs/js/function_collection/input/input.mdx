## input

### 强制数字

```html
<input type="text" v-model="amount" v-on:input="parseFloatNum">
```

#### 强制保留2位小数正数

isNaN用法很怪，NaN不等于NaN，别用，es5 Number.isNaN可以片段是否是NaN。
要判断是否是数字typeof() === ‘number’

```html
<input type="text" v-model="amount" v-on:input="parseFloatNum">
```

```js
// (自写，经过测试验证)如果输入不符合的数字，强制变回上次符合要求的数字
const parseFloatNum = function (num, last) { // last 为上次正确输入的值
  if ((num === undefined || num === null) // undefined和null不排除会引起toString报错
    || (num < 0 || num.toString().trim() === '')) {
    return ''
  } else {
    if (/^[1-9]\d*\.?\d{0,2}$/.test(num)) { // 保留小数点后两位正则
      return num
    } else {
      return last // 不符合就退回上次的数值
    }
  }
}
```

转化为整数数字
```js

const parseIntNum = function (num) { // last 为上次正确输入的值
  if ((num === undefined || num === null)
    || (num < 0 || num.toString().trim() === '')) {
    return ''
  } else {
    if (isNaN(num)) {
      return ''
    } else {
      return Math.floor(Number(num))
    }
  }
}
```

转化为保留两位小数数字
```js

const parseFix2 = function (num) { // last 为上次正确输入的值
  if ((num === undefined || num === null)
    || (num < 0 || num.toString().trim() === '')) {
    return ''
  } else {
    if (isNaN(num)) {
      return ''
    } else {
      return Number(val).toFixed(2)
    }
  }
}
```

### 校验空输入 检测存储空间 校验数字长度 tostring trim

```js
// (自写，经过测试验证)
const methods = {
  inputCheck (val, type, num) {
    switch (type) {
      case 'checkSpace': // 校验空输入
        if ((val !== null && val !== undefined) && val.toString().trim() === '') {
          return true // 空未填返回true
        } else {
          return false
        }
        break;
      case 'checkLength': // 检测存储空间
        if (val !== null && val !== undefined) {
          console.log('checkLength', val.toString().replace(/[\u4e00-\u9fa5]/g, 'aaa'))
          /** BMP 中的汉字（常用汉字都在这里面）
           UTF-8 3 字节
           UTF-16 2 字节
           UTF-32 4 字节
           BMP 外的汉字
           UTF-8 4 字节
           UTF-16 4 字节
           UTF-32 4 字节

           /[\u4e00-\u9fa5]/g  中文正则
           这里如果用UTF-8，一个汉字占3给字节，所以将一个汉字替换成aaa（也是3个字节）用来计算长度
           */
          if (val.toString().replace(/[\u4e00-\u9fa5]/g, 'aaa').length > num) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      case 'checkNumLength': // 校验数字长度
        if (val !== null && val !== undefined) {
          if (val.toString().trim().length > num) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      case 'checkNumLength': // 校验数字长度
        if (val !== null && val !== undefined) {
          if (val.toString().trim().length > num) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      default:
        return false
    }
  },
  toString () { // 转字符串
    if ((val !== null && val !== undefined)) {
      return val.toString()
    } else {
      return ''
    }
  },
  trim () { // 去掉两端空格
    if ((val !== null && val !== undefined)) {
      return val.toString().trim()
    } else {
      return ''
    }
  }
}
```

### file 上传文件后缀名校验

```js
const file = e.target.files[0]
const fileName = e.target.value
let flag = false
const arr = ["XLSX", "XLS"] // 后缀名列表
//取出上传文件的扩展名
const index = fileName.lastIndexOf(".")
const ext = fileName.substr(index + 1).toUpperCase()
//循环比较
for (let i = 0; i < arr.length; i += 1) {
  if (ext == arr[i]) {
    flag = true // 一旦找到合适的，立即退出循环
    break
  }
}
//条件判断
if (flag) {
  // "文件名合法"
} else {
  // 文件名不合法！
}
```


