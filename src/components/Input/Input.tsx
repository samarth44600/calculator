import React from "react";
import styles from "./Input.module.scss";
type Props = {};

const Input = (props: Props) => {
  return (
    <div className={styles.inputDiv}>
      <div className={styles.input}>
        <input placeholder="0" type="number" name="input" autoFocus autoComplete="false"/>
      </div>
      <div className={styles.output}>
        <input type="number" name="output" placeholder="0" disabled />
      </div>
    </div>
  );
};

export default Input;
