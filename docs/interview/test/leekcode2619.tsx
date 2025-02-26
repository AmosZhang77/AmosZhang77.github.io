import React, { ReactElement, useEffect, useRef } from "react";

const ByteDance: React.FC<any> = () => {
  useEffect(() => {
    console.log("leekcode2619");
    if(Array.prototype){
      Array.prototype.last = function () {
        let r = this?.[this.length - 1] ?? -1;
        console.log("2222", r);
        return r;
      };
    }

    let nums;
    nums = [null, {}, 3];
    console.log(nums.last());
    nums = [];
    console.log(nums.last());
    //
  }, []);

  return <div>Leekcode2619</div>;
};

export default ByteDance;
