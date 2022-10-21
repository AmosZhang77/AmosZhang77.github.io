import React from "react";
import styles from "./scssBase1.module.scss";

const ScssBase1: React.FC<any> = () => {
  return (
    <>
        <div className={styles.outBox}>
            <h1>h1-20px-blue</h1>
            <div>div-16px-blue</div>
        </div>
    </>
  );
};

export default ScssBase1;
