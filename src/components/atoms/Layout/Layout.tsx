import * as React from "react";
import styles from "./styles.module.css";
// _____________________________________________________________________________
//
export const Layout: React.FC = (props) => (
  <div className={styles.style}>{props.children}</div>
);
