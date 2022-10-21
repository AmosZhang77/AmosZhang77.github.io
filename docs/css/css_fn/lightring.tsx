import React from "react";
import styles from "./lightRing.module.less";
// import styles from "./lightRing.module.scss";

const LightRing: React.FC<any> = () => {
  return (
    <>
      <div className={styles.lightRing}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default LightRing;
