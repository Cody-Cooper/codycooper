/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";

import Seo from "../components/seo";

const seo = {
  metaTitle: "home",
  metaDescription: "infosec portfolio and blog",
};

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo seo={seo} />
    </Layout>
  );
};

export default IndexPage;
