import { Footer } from "../components/atoms/Footer";
import { Layout } from "../components/organisms/Layout";
import { Navigation } from "../components/organisms/Navigation";
import { Top } from "../components/templates/Top";

const Page = () => (
  <Layout>
    <Top />
    <Footer>
      <Navigation />
    </Footer>
  </Layout>
);

export default Page;
