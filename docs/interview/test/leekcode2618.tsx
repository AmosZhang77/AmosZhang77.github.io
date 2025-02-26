import React, { ReactElement, useEffect, useRef } from "react";

const ByteDance: React.FC<any> = () => {
  useEffect(() => {
    console.log("leekcode2618");

    const p1 = [new Date(), Date];

    class Animal {}

    class Dog extends Animal {}
    const p2 = [new Dog(), Animal];
    const p3 = [Date, Date];

    const checkIfInstance = (obj, Creater) => {
      let b = false;
      const isInstance = (p, C) => {
        if (p?.constructor === C) {
          b = true;
        } else {
          if (p?.__proto__ != null && p?.__proto__ !== Object) {
            // console.log('p?.__proto__',p?.__proto__)
            // console.log('p?.__proto__.__proto__.constructor',p?.__proto__.__proto__.constructor)
            // console.log('p?.__proto__.__proto__.constructor',p?.__proto__.__proto__.constructor === C)
            // 这里要注意p?.__proto__是p的原型对象，就是 p.constructor.prototype
            // 同样p?.__proto__.constructor 就是 p.constructor
            // 没有涉及到原型对象的继承，所以必须p?.__proto__.__proto__才是上面被继承父亲的原型对象，p?.__proto__.__proto__,constructor才是上面一层原原型对象的构造函数
            isInstance(p?.__proto__.__proto__, C);
          }
        }
      };
      isInstance(obj, Creater);

      return b;
    };

    console.log(checkIfInstance(p1[0], p1[1]));
    console.log(checkIfInstance(p2[0], p2[1]));
    console.log(checkIfInstance(p3[0], p3[1]));
    //
  }, []);

  return <div>Leekcode2618</div>;
};

export default ByteDance;
