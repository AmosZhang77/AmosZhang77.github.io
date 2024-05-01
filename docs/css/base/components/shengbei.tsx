import React from "react";
import styles from "./shengbei.module.scss";

const ShengBei: React.FC<any> = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.d1}>center</div>
        <div className={styles.d2}>left</div>
        <div className={styles.d3}>right</div>
      </div>
    </>
  );
};

export default ShengBei;
