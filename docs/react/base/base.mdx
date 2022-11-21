函数组件，组件复用，初始化状态无法的到更新。 useState初始化中

错误，状态只在第一次加载组件是获得，之后无法得到更新

```ts
const initCardOpen = window.localStorage.getItem('biDepartmentCard') !== 'close' // 只在组件第一个实例时执行
const [leaderCardOpen, setLeaderCardOpen] = useState<boolean>(initCardOpen) // 只能获得上述一个时间点的值
```

useState初始值给函数，组件复用多次，在不同复用实例中可以正确拿到最新的localStorage

```ts
const initCardOpen = () => window.localStorage.getItem('biDepartmentCard') !== 'close' // 只在组件第一个实例时执行
const [leaderCardOpen, setLeaderCardOpen] = useState<boolean>(initCardOpen()) // 每个实例在载入时都会去重新获取新的值
```

class组件不简写

```js
class Component1 extends React.Compnent {

  // 构造器调用一次
  constructor (props) {
    console.log('constructorRun')
    super(props)
    this.state = { name: '张三', age: 29 }

    // 构造函数中this是实例，这里那prototype上的changeAge绑定this产生新方法 ，然后赋值给实例的changeAge
    // 之后react调用实例的changeAge会用实例上的绑定this后的changeAge方法而不是去prototype找changeAge
    this.changeAge = this.changeAge.bind(this)
    // 与上面的实质是一样的
    this.changeAgeBind = this.changeAge.bind(this)
  }

  render () {
    // render调用次数
    console.log('renderRun')
    return (
      <div>
        <div>{`名字${this.state.name}`}</div>
        <div onClick={this.changeAge}>{`年龄${this.state.age}`}</div>
        <div onClick={this.changeAgeBind}>{`年龄${this.state.age}`}</div>
        <div onClick={this.c3}>{`年龄${this.state.age}`}</div>
      </div>
    )
  }

  changeAge () {
    console.log(this) // 这里被bind实例之后赋值给实例对象的方法，再被react调用是有实例的 
  }

  c2 () {
    this.c3() // 这里react回调调c2，this是undifined，c3会在实例的prototype上，this拿不到实例
  }
}
```

```js
class car {

  constructor (props) {
    super(props)
    this.a = 1
    this.fn = function () {console.log('方法')}
  }

  a = 1 // 这样写与this.a = 1 一样效果，给实例加个属性a。

  // 这样写与this.fn = function (){console.log('方法')}一样效果，给实例加个方法fn。
  fn = function () {console.log('方法，this:', this)} // 这里将函数存起来，然后直接调用fn，this是undefined

  // 箭头函数没有this，取外层this，打印可见，外层的class内部位置的this就是实例本身。
  // 相当于用词法作用域绑定了this
  fn2 = () => {console.log('方法，this:', this)}

  render () {
    // render调用次数
    console.log('renderRun')
    return (
      <div>
        <div>{`名字${this.state.name}`}</div>
        <div onClick={this.changeAge}>{`年龄${this.state.age}`}</div>
        <div onClick={this.changeAgeBind}>{`年龄${this.state.age}`}</div>
        <div onClick={this.c3}>{`年龄${this.state.age}`}</div>
      </div>
    )
  }

  changeAge () {
    console.log(this) // 这里被bind实例之后赋值给实例对象的方法，再被react调用是有实例的 
  }

  c2 () {
    this.c3() // 这里react回调调c2，this是undifined，c3会在实例的prototype上，this拿不到实例
  }

  // class本身上面增加静态属性及方法
  static staticFn = () => {
    console.log('class本身的方法')
  }
  static staticVal = 'class本身的属性'
  
  // react中指定默认标签属性值
  staticdefaultProps = {
    
  }
}
```

###key 设置为 index可能会引发的问题：

react中key用于diff算法中计算真实dom更新策略。
1. key相同：
（1） 内容相同，直接使用之前的真实dom。
（2） 内容不同，生成新dom，替换调之前key相同位置的真实dom。
2. 未找到key：
 生成新dom，渲染到页面

index可能会引发的问题：
1. 若对数据进行：逆序添加、逆序删除等破坏顺序的操作：会产生没有必要的dom真实dom更新。界面没有问题，效率低。
2. 如果结构中包含输入类dom，界面会有问题。（如果在最开始插入一个input，第一个新的input因为key为0，
而之前的第一个有输入内容的input的key为0，key一样。同时react不会保存input中的内容，
故对于react来说两个input内容一样。这时更新策略时用之前的真实dom，所以react会误认不用更新，而用之前的真实dom，
导致新增的input中有输入内容。然后下面直到倒数第二个内容都是之前的真实dom，所以输入内容都是和第一个一样往上错位。
而最后一条老数据对应是新增的input，真实input的dom内容为空）
3. 若没有以上破坏顺序的操作，不会产生问题


### router 传参

url params路由传参
```jsx
const data = {
  name: 'jack',
  age: '23',
}
const dataStr= JSON.stringify(data) // 这里前后会多俩个花括号，可能要切掉才能用

const path = `xxx/user/${dataStr}`

console.log(path)
// react router的history
history.push(path) // 命令式路由

return (
  <div>
   <Link to={path}>点我跳转</Link>

   {/*url params路由 router中必须要有占位符*/}
   <Router path='xxx/user/:data' component={UserPage}/>
  </div>
)
```

query路由传参
```jsx
const data = {
  name: 'jack',
  age: '23',
}
const path = {
  pathname:'xxx/user',
 query: data
}

// react router的history
history.push(path)

return (<Link to={path}>点我跳转</Link>)
```
除了 params query路由传参

还有state传参，不会显示在url上，会存在history对象上，刷新页面也能保留！！！

```jsx
const data = {
  name: 'jack',
  age: '23',
}
const path = {
  pathname:'xxx/user',
 state: data
}

// react router的history
history.push(path)

return (<Link to={path}>点我跳转</Link>)

// 获取参数
const data = this.props.location.state
```