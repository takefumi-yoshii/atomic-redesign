import * as React from "react";
import { ThumbnailCard } from "../../molecules/ThumbnailCard";
import { data } from "./stub";
import styles from "./styles.module.css";

export const Example = () => (
  <main>
    <h2 className={styles.title}>Example</h2>
    <ul className={styles.list}>
      {data.map((item) => (
        <li className={styles.item}>
          <ThumbnailCard
            id={item.id}
            title={item.title}
            body={item.body}
            img={item.img}
          />
        </li>
      ))}
    </ul>
  </main>
);
