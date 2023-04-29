"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import Keypad from "@/components/Keypad/Keypad";
import Input from "@/components/Input/Input";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<number>(0);

  return (
    <main className={styles.mainDiv}>
      <Input
        input={input}
        output={output}
        setInput={setInput}
        setOutput={setOutput}
      />
      <Keypad
        input={input}
        output={output}
        setInput={setInput}
        setOutput={setOutput}
      />
    </main>
  );
}
