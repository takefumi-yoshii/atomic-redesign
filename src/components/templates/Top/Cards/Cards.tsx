import * as React from "react";
import { ThumbnailCard } from "../../../molecules/ThumbnailCard";
import { data } from "./stub";
import styles from "./styles.module.css";

const Cards = () => (
  <ul className={styles.cards}>
    {data.map((item) => (
      <li key={item.id} className={styles.card}>
        <ThumbnailCard
          id={item.id}
          title={item.title}
          body={item.body}
          img={item.img}
        />
      </li>
    ))}
  </ul>
);

export { Cards };
