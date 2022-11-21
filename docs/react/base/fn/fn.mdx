### 阻止冒泡

onClick={(e)=>{e.stopPropagation()}} 阻止往上冒泡（react提供已做浏览器兼容）

相当于vue里面e.self处理类似问题

```html

<Tabs onClick={(e)=>{e.stopPropagation()}} />

```

### 父组件调用子组件方法 hook

```js
// 子组件
import { useState, useImperativeHandle, forwardRef } from 'react'
// props子组件中需要接受ref
let ChildComp = (props, ref) => {
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal) => {

    }
  }))
  return (
    <div>{val}</div>
  )
}
export default ChildComp = forwardRef(ChildComp)

// 这样ts情况可以少写一个类型
import { useState, useImperativeHandle, forwardRef } from 'react'
// props子组件中需要接受ref
let ChildComp = forwardRef((props, ref) => {
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal) => {

    }
  }))
  return (
    <div>{val}</div>
  )
})
export default ChildComp
/**
 * 注意
 * 如果是用dva的connect的包装
 * 直接这样写
 *
 * export default connect(state => {
    const {
      dashboard: { enums },
    } = state
    return { enums }
  })(forwardRef(ChildComp))
 
 * 是不行的因为ref被Hoc 高阶组件{connect} “隔离了”

 Error
 Unhandled Rejection (Invariant Violation): You must pass a component to the function returned by connect. Instead received {}

 * 需要多加一个{forwardRef：true}的参数，如下：
 * */

export default connect(state => {
  const {
    dashboard: { enums },
  } = state
  return { enums }
}, null, null, { forwardRef: true })(forwardRef(ChildComp))
```

```js
/* FComp 父组件 */
import { useRef } from 'react'

const FComp = () => {
  const childRef = useRef()
  const updateChildState = () => {
    // changeVal就是子组件暴露给父组件的方法
    childRef.current.changeVal(99);
  }
  return (
    <>
      <ChildComp ref={childRef}/>
      <button onClick={updateChildState}>触发子组件方法</button>
    </>
  )
}
```