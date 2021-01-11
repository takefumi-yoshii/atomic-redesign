import { Footer } from "../components/atoms/Footer";
import { Layout } from "../components/organisms/Layout";
import { Navigation } from "../components/organisms/Navigation";
import { About } from "../components/templates/About";

const Page = () => (
  <Layout>
    <About />
    <Footer>
      <Navigation />
    </Footer>
  </Layout>
);

export default Page;
