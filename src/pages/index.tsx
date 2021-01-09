import { TemplateTop } from "../components/templates/Top";
import { Layout } from "../components/atoms/Layout";
import { Footer } from "../components/atoms/Footer";
import { Navigation } from "../components/organisms/Navigation";

const Page = () => (
  <Layout>
    <TemplateTop />
    <Footer>
      <Navigation />
    </Footer>
  </Layout>
);

export default Page;
