import * as React from "react";
import { Aside } from "../Aside";
import styles from "./styles.module.css";
// _____________________________________________________________________________
//
export const Layout: React.FC = (props) => (
  <div className={styles.module}>
    <div className={styles.aside}>
      <Aside />
    </div>
    <div className={styles.main}>{props.children}</div>
  </div>
);
