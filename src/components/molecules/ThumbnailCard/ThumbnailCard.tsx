import * as React from "react";
import styles from "./styles.module.css";

export interface Props {
  img: {
    src: string;
  };
  title: string;
  body: string;
}

const ThumbnailCard = (props: Props) => (
  <div className={styles.module}>
    <p
      className={styles.img}
      style={{ backgroundImage: `url(${props.img.src})` }}
    ></p>
    <div className={styles.outline}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.body}>{props.body}</p>
    </div>
  </div>
);

export { ThumbnailCard };
