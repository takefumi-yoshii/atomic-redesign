import Image from "next/image";
import * as React from "react";
import styles from "./styles.module.css";

export interface Props {
  id: string;
  img: {
    src: string;
  };
  title: string;
  body: string;
}

const ThumbnailCard = (props: Props) => (
  <div className={styles.module}>
    <Image
      src={props.img.src}
      alt="Picture of the author"
      width={640}
      height={427}
    />
    <div className={styles.outline}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.body}>{props.body}</p>
    </div>
  </div>
);

export { ThumbnailCard };
