## set

### 字符串数组去重

```js
const arr = ['1', 'a', 'a', 'b']
const newArr = Array.from(new Set(arr)) // es5
const newArr2 = [...new Set(arr)] // es6
```

