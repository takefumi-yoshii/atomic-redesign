import * as React from "react";
import { Navigation } from "../Navigation";
import styles from "./styles.module.css";
// _____________________________________________________________________________
//
export const Aside = () => (
  <div>
    <Navigation className={styles.nav} />
  </div>
);
