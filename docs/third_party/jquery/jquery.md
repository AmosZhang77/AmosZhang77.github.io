---
title: jquery
description: jquery
hide_table_of_contents: false
sidebar_position: 2
---

## 请求

### 不确定多请求一起发一起收

当年本人未熟练运用apply来改变数组参数形式的方法，并且对jquery封装的自己的promise完全没概念的时候，并且也没用模板字符串的方法 （为了不太恶心读者，下面实例我还是改成模板字符串了）。

为了解决无法确定一批需要调哪些接口，然后一起输出的需求。 采用了，for硬拼字符串凑出请求，然后用eval或者new function来执行这个拼装出来jquery请求代码的如此反人类的方法。
（不是很无聊可以直接看下面apply方法，非jquery项目的请直接搜索并跳至async wait方法）

下面是jquery的实际需要的用法：

```js
$.when($.ajax("test1.aspx"), $.ajax("test2.aspx")).then(function (ajaxArgs) {
  alert(ajaxArgs[1]); /* ajaxArgs is [ "success", statusText, jqXHR ] */
});
```

下面是拼接的方法：（强烈不建议看）

```js
var str1 = '$.when('
var strs = ''
var str3 =
  `).then(function(a,b) {
    var count = 0
    console.log(arguments);
    for(vari = 0; i<arguments.length; i++){
      console.log("arguments[i]", arguments[i], arguments[i]);
      console.log("arguments[i][0].code", arguments[i][0].code, arguments[i][0].data);
      if(arguments[i][0].code == "200000" && arguments[i][0].data == 1) {
        count++
        console.log("成功一个", count);
      }
    };
  if(count == arguments.length){
    ShowWarningAlert("警告","全部成功")}else{ShowWarningAlert("警告","未全部成功")
      }
  })`
varuserCouponIdList = []

// api_coupon_revokeUserCoupon方法中一定要返回jquery AJAX对象
function api_coupon_revokeUserCoupon (params) {
  return $.ajax({
    url: URL + '/loanBk/coupon/revokeUserCoupon',
    type: 'patch',
    dataType: 'json',
    headers: pubZ.headers,
    data: params,
  });

}

requestDataList.forEach(function (value) {
  if (value.check == true) {
    userCouponIdList.push(value.userCouponId)
    strs = `${strs} api_coupon_revokeUserCoupon( {userCouponId: ${value.userCouponId}}),`
  }
})
varstrLast = str1 + strs + str3
console.log('strLast', strLast)
if (userCouponIdList.length > 0) {
  eval(strLast)
}
```

用apply处理参数结构功能的正确写法：

```js
let requestList = []
requestDataList.forEach(function (item) {
  if (item.check == true) {
    requestList.push($.ajax(item.url))
  }
})
// $.when 处理 由jquery.ajax对象组成的数组。作用相当于Promise.all
$.when.apply($, requestList).then(function (ajaxArgs) {
  alert(ajaxArgs[1])
})
```

现代结构语法：

```js
$.when(...requestList).then(function (ajaxArgs) {
  alert(ajaxArgs[1])
})
```

### jquery 请求伪代码封装

```js
function apiJqueryVersion (params, success, before, after) {
  $.ajax({
    url: baseUrl + '/sysTemplate/updateTemplateVersion',
    type: 'patch',
    dataType: 'json',
    contentType: 'text',
    headers: pubZ.headers,
    data: params,
    success: function (result) { // 以下具体情况视团队约定
      if (result.code == '200000') {
        success(result)
        switch (result.data) {
          case 1:
            window.location.reload();
            break;
          case -1:
            ShowWarningAlert('警告', '操作失败')
            break;
          case -2:
            ShowWarningAlert('警告', '发布状态才能修改')
            break;
          default:
            ShowWarningAlert('警告', '操作失败')
        }
        StopLoading();
        $(".loadingContainer").removeClass('loadingContainer');
      } else {
        ajaxFail(result);
      }
    },
    beforeSend: function () { // 发之前统一处理的钩子函数
      before()
    },
    complete: function () { // 收到后统一处理的钩子函数
      after()
    },
  })
}
```

### jq对象与js对象转换

jq转js：取第一个元素

```js
$("body")[0]
$("body").get(0)
```

js转jq: 直接$()方法包裹

```js
$(elBody)
```
