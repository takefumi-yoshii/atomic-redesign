import { Layout } from "@/components/organisms/Layout";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/templates/About"));

const Page = () => (
  <Layout>
    <About />
  </Layout>
);

export default Page;
