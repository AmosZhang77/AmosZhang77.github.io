import React, { ReactElement, useEffect, useRef } from "react";

const ByteDance: React.FC<any> = () => {
  useEffect(() => {
    console.log("leekcode2620");
    const createCounter = function (n) {
      let count = n
      const plus = ()=>{
        count += 1
        return count -1
      }
      return plus;
    };

    const counter = createCounter(10);
    console.log(counter()); // 10
    console.log(counter()); // 11
    console.log(counter()); // 12
  }, []);

  return <div>Leekcode2620</div>;
};

export default ByteDance;
