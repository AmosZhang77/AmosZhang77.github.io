import React, { ReactElement, useEffect, useRef } from "react";

const ByteDance: React.FC<any> = () => {
  useEffect(() => {
    const sumR = (() => {
      let count = 0;
      const sum = (...arr) => {
        if (arr.length === 0) {
          let r = count;
          count = 0;
          return r;
        }
        if (arr.length > 0) {
          count = count + arr.reduce((o, n) => o + n, 0);
          // console.log("count", count);
          return sum;
        }
      };
      return sum;
    })();
    // @ts-ignore
    console.log(sumR(2, 3)());
    // @ts-ignore
    console.log(sumR(2, 3)(1, 3)());
    // @ts-ignore
    console.log(sumR(2, 3)(0, 1)(1, 3)());
    // @ts-ignore
    console.log(sumR([])());
  }, []);
  return <div>byteDance</div>;
};

export default ByteDance;
