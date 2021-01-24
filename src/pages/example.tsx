import { Layout } from "@/components/organisms/Layout";
import dynamic from "next/dynamic";
const Example = dynamic(() => import("@/components/templates/Example"));

const Page = () => (
  <Layout>
    <Example />
  </Layout>
);

export default Page;
