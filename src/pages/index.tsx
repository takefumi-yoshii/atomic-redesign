import { Layout } from "@/components/organisms/Layout";
import dynamic from "next/dynamic";
const Top = dynamic(() => import("@/components/templates/Top"));

const Page = () => (
  <Layout>
    <Top />
  </Layout>
);

export default Page;
