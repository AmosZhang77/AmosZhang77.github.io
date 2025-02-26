import React, { ReactElement, useEffect, useRef } from "react";

type SaveDetail = {
  value:any;
  duration: number;
  lastTime: number;
}
const ByteDance: React.FC<any> = () => {
  useEffect(() => {
    console.log(new Date().getTime());
    const TimeLimitedCache = function () {
      this.save = {};
    };

    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    TimeLimitedCache.prototype.set = function (key, value, duration) {
      let r = false;
      if (
        this.save[key]?.value != null &&
        this.save[key]?.lastTime + this.save[key]?.duration >
          new Date().getTime()
      ) {
        r = true;
      }
      this.save[key] = {
        value: value,
        duration: duration,
        lastTime: new Date().getTime(),
      };
      return r;
    };

    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    TimeLimitedCache.prototype.get = function (key) {
      console.log("this.save[key]?.lastTime", this.save[key]?.lastTime);
      console.log("this.save[key]?.lastTime", this.save[key]?.duration);
      console.log("getTime", new Date().getTime());

      if (
        this.save[key]?.value != null &&
        this.save[key]?.lastTime + this.save[key]?.duration >
          new Date().getTime()
      ) {
        return this.save[key]?.value;
      } else {
        return -1;
      }
    };

    /**
     * @return {number} count of non-expired keys
     */
    TimeLimitedCache.prototype.count = function () {
      let count = 0;
      for (const key in this.save) {
        console.log("key", key);
        if (
          this.save[key]?.value != null &&
          this.save[key]?.lastTime + this.save[key]?.duration >
            new Date().getTime()
        ) {
          count += 1;
        }
      }
      return count;
    };

    const timeLimitedCache = new TimeLimitedCache();
    console.log(timeLimitedCache.set(1, 42, 1000)); // false
    console.log(timeLimitedCache.get(1)); // 42
    console.log("count", timeLimitedCache.count()); // 1
    setTimeout(() => {
      console.log(timeLimitedCache.get(1)); // 42
      console.log("count", timeLimitedCache.count()); // 1
      timeLimitedCache.set(1, 43, 1000); // false
    }, 3000);
  }, []);

  return <div>Leekcode2622</div>;
};

export default ByteDance;
