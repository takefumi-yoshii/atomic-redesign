import Link from "next/link";
import * as React from "react";
import styles from "./styles.module.css";

const Navigation = () => (
  <ul className={styles.module}>
    <li>
      <Link href="/">
        <a>TOP</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>about</a>
      </Link>
    </li>
    <li>
      <Link href="/example">
        <a>example</a>
      </Link>
    </li>
  </ul>
);

export { Navigation };
