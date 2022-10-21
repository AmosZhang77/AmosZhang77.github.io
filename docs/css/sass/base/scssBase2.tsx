import React from "react";
import styles from "./scssBase2.module.scss";

const ScssBase1: React.FC<any> = () => {
  return (
    <div className={styles.outBox}>
      <div className={styles.move}></div>
    </div>
  );
};

export default ScssBase1;
