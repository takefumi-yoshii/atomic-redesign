import Link from "next/link";
import * as React from "react";
import styles from "./styles.module.css";

const Navigation = () => (
  <ul className={styles.module}>
    <li>
      <Link href="/" prefetch={!process.env.STORYBOOK}>
        <a>TOP</a>
      </Link>
    </li>
    <li>
      <Link href="/about" prefetch={!process.env.STORYBOOK}>
        <a>about</a>
      </Link>
    </li>
    <li>
      <Link href="/example" prefetch={!process.env.STORYBOOK}>
        <a>example</a>
      </Link>
    </li>
  </ul>
);

export { Navigation };
