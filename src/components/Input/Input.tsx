import React from "react";
import styles from "./Input.module.scss";
type Props = {
  input: string;
  output: number;
  setInput: (input: string) => void;
  setOutput: (output: number) => void;
};

const Input = ({ input, output, setInput, setOutput }: Props) => {
  return (
    <div className={styles.inputDiv}>
      <div className={styles.input}>
        <input
          placeholder="0"
          type="text"
          name="input"
          autoFocus
          autoComplete="false"
          value={input}
          onChange={(e) => setInput(e.target.value.toString())}
        />
      </div>
      <div className={styles.output}>
        <input
          type="number"
          name="output"
          placeholder="0"
          value={output}
          disabled
        />
      </div>
    </div>
  );
};

export default Input;
