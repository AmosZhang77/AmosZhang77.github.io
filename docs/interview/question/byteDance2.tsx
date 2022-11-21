import React, { ReactElement, useEffect, useRef } from "react";

const ByteDance2: React.FC<any> = () => {
  console.log('arr1')

  useEffect(() => {
    let arr = []

    const fn = (n) => {
      let str = ''
      for (let i = 0; i < n - 1; i++) {
        str = str + '()'
      }
      // console.log('str', str)
      for (let j = 0; j <= str.length; j = j + 2) {
        let str1 = str.slice(0, j)
        let str2 = str.slice(j)
        let halfStr = str1 + '(' + str2
        // console.log('halfStr',halfStr)
        for (let k = j; k <= halfStr.length; k = k + 2) {
          let str1 = halfStr.slice(0, k + 1)
          let str2 = halfStr.slice(k + 1)
          let str = str1 + ')' + str2
          // console.log('str',str)
          arr.push(str)
        }
      }
      arr = Array.from(new Set(arr))
    }
    fn(3)
    console.log('arr', arr)
    arr = []
    fn(4)
    console.log('arr', arr)

  }, []);
  return <div>byteDance2</div>;
};

export default ByteDance2;
