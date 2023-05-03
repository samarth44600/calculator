"use client";
import React, { useEffect } from "react";
import styles from "./Keypad.module.scss";
import { HiBackspace } from "react-icons/hi";
import { solveEquation } from "@/utils/calculator";
type Props = {
  input: string;
  output: number;
  setInput: (input: string) => void;
  setOutput: (output: number ) => void;
};

const Keypad = ({ input, output, setInput, setOutput }: Props) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
  };
  const digitalInput = (value: string) => {
    setInput(input + value.toString());
  };

  const handleCalculate = () => {
    setOutput(solveEquation(input));
    console.log("input", input);
  };

  const backspace = () => {
    if (input.length === 0) {
      return input;
    } else {
      setInput(input.slice(0, -1));
    }
  };

  const allClear = () => {
    setInput("");
    setOutput(0);
  };

  useEffect(() => {
    const keyPress = (e: KeyboardEvent) => {
      console.log("keyPressed", e.key);

      if (e.key === "Enter") {
        handleCalculate();
      }
    };
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, []);

  return (
    <div className={styles.keypadDiv}>
      <div className={styles.keypadRow}>
        <button className={styles.keypadButton} onClick={allClear}>
          AC
        </button>
        <button className={styles.keypadButton}>%</button>
        <button className={styles.keypadButton}>/</button>
        <button className={styles.keypadButton} onClick={backspace}>
          <HiBackspace />
        </button>
      </div>
      <div className={styles.keypadRow}>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("7")}
        >
          7
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("8")}
        >
          8
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("9")}
        >
          9
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("*")}
        >
          *
        </button>
      </div>
      <div className={styles.keypadRow}>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("4")}
        >
          4
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("5")}
        >
          5
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("6")}
        >
          6
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("-")}
        >
          -
        </button>
      </div>
      <div className={styles.keypadRow}>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("1")}
        >
          1
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("2")}
        >
          2
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("3")}
        >
          3
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("+")}
        >
          +
        </button>
      </div>
      <div className={styles.keypadRow}>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput("0")}
        >
          0
        </button>
        <button
          className={styles.keypadButton}
          onClick={() => digitalInput(".")}
        >
          .
        </button>
        <button className={styles.keypadButton} onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Keypad;
