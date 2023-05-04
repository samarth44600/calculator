import React, { useEffect } from "react";
import styles from "./Input.module.scss";
import { numberValidation } from "@/utils/numberValidation";
type Props = {
  input: string;
  output: number | undefined;
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
          onKeyDown={numberValidation}
          name="input"
          autoFocus
          autoComplete="false"
          value={input}
          onChange={(e) => setInput(e.target.value.toString())}
          // readOnly
          aria-autocomplete="none"
        />
      </div>
      <div className={styles.output}>
        <input
          type="number"
          name="output"
          placeholder="0"
          value={output}
          readOnly
        />
      </div>
    </div>
  );
};

export default Input;
