## date

### 近一个月 近一月 几天前

需求：1. 今天是10日，就求出上个月的10日

2. 如果今天是31日，而上个月只有30日，那就得出上个月30日
```js
// (自写，经过测试验证)  实际项目请用github 项目 monent
const autoSetTime = function (d) {
  if (isNaN(d)) { // 输入的不是d不是数字，要计算近一个月，不是多少天前
    var lastMonthDate = new Date()
    if (nowTimeStemp.getMonth() > 0) { // 当前月份为非1月的情况
      lastMonthDate.setDate(1) // 得到当前时间，本月份一号的时间
      let thisMonthFirstDay = lastMonthDate.getTime() 
      lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)  // 得到当前时间，上一个月一号的时间
      let lastMonthFirstDay = lastMonthDate.getTime()

      // 现在时间的上个月一共有几天
      let dayNumOfLastMonth = (thisMonthFirstDay - lastMonthFirstDay) / (24 * 3600 * 1000)
      
      lastMonthDate = new Date()
      if (lastMonthDate.getDate() > dayNumOfLastMonth) {
        //现在日期大于上个月总天数
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1) // 月份减一个月
        lastMonthDate.setDate(dayNumOfLastMonth) // 当前日期日大于上月总天数，（比如现在31日上月只有30日），直接取日期为30日
      } else {
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1) // 上个月也有现在的这个日期，直接月-1即可
      }
    } else { // 当前月份为1月的情况
      // 1月 12月都是31天
      lastMonthDate.setFullYear(lastMonthDate.getFullYear() - 1)
      lastMonthDate.setMonth(11)
    }
  } else { // d是天数，可以计算出近d天的日期
    var nowDateObj = new Date()
    var nowTimeStemp = nowDateObj.getTime()
    var someDaysAgoTimeStemp = nowTimeStemp - d * 24 * 3600 * 1000
  }
}
```
