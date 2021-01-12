import * as React from "react";
import { Navigation } from "../../organisms/Navigation";
import styles from "./styles.module.css";
// _____________________________________________________________________________
//
const Footer = () => (
  <div className={styles.module}>
    <Navigation className={styles.nav} />
    <address>
      Copyright &copy; 2021 takefumi-yoshii All Rights Reserved.
    </address>
  </div>
);
// _____________________________________________________________________________
//
export { Footer };
