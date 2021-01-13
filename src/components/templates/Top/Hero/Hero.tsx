import Image from "next/image";
import * as React from "react";
import styles from "./styles.module.css";

const Hero = () => (
  <div className={styles.module}>
    <Image
      src="/images/nature-3091991_1920.jpg"
      alt="Picture of the author"
      width={1920}
      height={1080}
    />
    <h2 className={styles.title}>Atomic ReDesign</h2>
  </div>
);

export { Hero };
