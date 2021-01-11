import { Footer } from "../components/atoms/Footer";
import { Layout } from "../components/organisms/Layout";
import { Navigation } from "../components/organisms/Navigation";
import { Example } from "../components/templates/Example";

const Page = () => (
  <Layout>
    <Example />
    <Footer>
      <Navigation />
    </Footer>
  </Layout>
);

export default Page;
