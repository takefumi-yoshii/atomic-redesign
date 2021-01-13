import * as React from "react";
import { Footer } from "../../atoms/Footer";
import { Aside } from "../Aside";
import styles from "./styles.module.css";
// _____________________________________________________________________________
//
export const Layout: React.FC = (props) => (
  <div className={styles.module}>
    <aside className={styles.aside}>
      <Aside />
    </aside>
    <main className={styles.main}>
      <div>{props.children}</div>
      <footer>
        <Footer />
      </footer>
    </main>
  </div>
);
