import React, { ReactElement, useEffect, useRef } from "react";

const ByteDance: React.FC<any> = () => {
  useEffect(() => {
    console.log("leekcode2621");
    const sleep = (time: number) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };
    let t = Date.now();
    // 这里实际会不确定，可能106，108，要看执行速度
    sleep(100).then(() => console.log(Date.now() - t)); // 100
  }, []);

  return <div>Leekcode2622</div>;
};

export default ByteDance;
