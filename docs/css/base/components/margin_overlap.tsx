import React from "react";
import styles from "./margin_overlap.module.scss";

const ShengBei: React.FC<any> = () => {
  return (
    <div className={styles.box}>
        <div className={styles.p1}></div>
        <div className={styles.p2}></div>
        <div className={styles.p3}></div>
        <div className={styles.p4}></div>
    </div>
  );
};

export default ShengBei;
