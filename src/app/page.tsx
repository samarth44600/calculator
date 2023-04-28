import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import Keypad from "@/components/Keypad/Keypad";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const test = "2*4+5";
  console.log("testing intege",parseInt(test));

  return (
    <main className={styles.mainDiv}>
      <Keypad />
    </main>
  );
}
