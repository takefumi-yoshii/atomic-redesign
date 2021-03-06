import { Footer } from "@/components/atoms/Footer";
import { Aside } from "@/components/organisms/Aside";
import * as React from "react";
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
