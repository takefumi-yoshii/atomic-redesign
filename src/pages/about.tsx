import dynamic from "next/dynamic";
import { Layout } from "../components/organisms/Layout";
const About = dynamic(() => import("../components/templates/About"));

const Page = () => (
  <Layout>
    <About />
  </Layout>
);

export default Page;
