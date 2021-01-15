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
  </div>
);

export { Hero };
