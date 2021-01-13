import * as React from "react";
import styles from "./styles.module.css";
import { Cards } from "./Cards";

const Top = () => (
  <main>
    <h1 className={styles.title}>Atomic ReDesign</h1>
    <Cards />
  </main>
);

export { Top };
