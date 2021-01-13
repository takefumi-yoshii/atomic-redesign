import dynamic from "next/dynamic";
import { Layout } from "../components/organisms/Layout";
const Example = dynamic(() => import("../components/templates/Example"));

const Page = () => (
  <Layout>
    <Example />
  </Layout>
);

export default Page;
