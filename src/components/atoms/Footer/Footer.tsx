import * as React from "react";
import styles from "./styles.module.css";

export interface Props {
  children?: React.ReactNode;
}

const Footer = (props: Props) => (
  <div className={styles.module}>
    {props.children}
    <address>Copyright &copy; 2021 nandemo-nobiru All Rights Reserved.</address>
  </div>
);

export { Footer };
