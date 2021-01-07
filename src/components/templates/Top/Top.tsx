import { Layout } from "../../atoms/Layout";
import { ThumbnailCard } from "../../molecules/ThumbnailCard";
import styles from "./styles.module.css";
import { data } from "./stub";

const TemplateTop = () => (
  <Layout>
    <h1 className={styles.title}>Atomic ReDesign</h1>
    <ul className={styles.list}>
      {data.map((item) => (
        <li className={styles.item}>
          <ThumbnailCard title={item.title} body={item.body} img={item.img} />
        </li>
      ))}
    </ul>
  </Layout>
);

export { TemplateTop };
