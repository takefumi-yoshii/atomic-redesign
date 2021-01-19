import * as React from "react";
import { Hero } from "./Hero";
import { Lead } from "./Lead";
import styles from "./styles.module.css";

export const Top = () => (
  <main className={styles.module}>
    <section className={styles.hero}>
      <Hero />
    </section>
    <h2 className={styles.title}>Atomic ReDesign</h2>
    <section className={styles.lead}>
      <Lead />
    </section>
  </main>
);
