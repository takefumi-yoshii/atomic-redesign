import * as React from "react";
import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";
import { ThumbnailCard } from "../../molecules/ThumbnailCard";
import type { ServerProps } from "./";
import styles from "./styles.module.css";

export const Example = () => {
  const { data, error } = useSWR<ServerProps>("/api/example", fetcher);
  if (!data) return null;
  return (
    <main>
      <h2 className={styles.title}>Example</h2>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.item}>
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
};
