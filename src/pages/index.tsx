import dynamic from "next/dynamic";
import { Layout } from "../components/organisms/Layout";
const Top = dynamic(() => import("../components/templates/Top"));

const Page = () => (
  <Layout>
    <Top />
  </Layout>
);

export default Page;
