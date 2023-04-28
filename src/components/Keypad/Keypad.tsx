"use client";
import React from "react";
import styles from "./Keypad.module.scss";
import { HiBackspace } from "react-icons/hi";
type Props = {};

const Keypad = (props: Props) => {
    const test = "2*4+5";
  const testFunc = () => {
    console.log("test", eval(test));
  };
  return (
    <div className={styles.keypadDiv}>
      <div className={styles.keypadRow}>
        <button onClick={testFunc} className={styles.keypadButton}>
          AC
        </button>
        <button className={styles.keypadButton}>%</button>
        <button className={styles.keypadButton}>/</button>
        <button className={styles.keypadButton}>
          <HiBackspace />
        </button>
      </div>
      <div className={styles.keypadRow}>
        <button className={styles.keypadButton}>7</button>
        <button className={styles.keypadButton}>8</button>
        <button className={styles.keypadButton}>9</button>
        <button className={styles.keypadButton}>*</button>
      </div>
      <div className={styles.keypadRow}>
        <button className={styles.keypadButton}>4</button>
        <button className={styles.keypadButton}>5</button>
        <button className={styles.keypadButton}>6</button>
        <button className={styles.keypadButton}>-</button>
      </div>
      <div className={styles.keypadRow}>
        <button className={styles.keypadButton}>1</button>
        <button className={styles.keypadButton}>2</button>
        <button className={styles.keypadButton}>3</button>
        <button className={styles.keypadButton}>+</button>
      </div>
      <div className={styles.keypadRow}>
        <button className={styles.keypadButton}>0</button>
        <button className={styles.keypadButton}>.</button>
        <button className={styles.keypadButton}>=</button>
      </div>
    </div>
  );
};

export default Keypad;
