/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";

import Seo from "../components/seo";
import BlocksRenderer from "../components/blocks-renderer";

// markup
const AboutPage = () => {
  const { strapiAbout } = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `);
  const { title, blocks } = strapiAbout;

  const seo = {
    metaTitle: title,
    metaDescription: title,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <h1
        sx={{
          fontSize: 5,
        }}
      >
        {" "}
        {title}{" "}
      </h1>
      <BlocksRenderer blocks={blocks} />
    </Layout>
  );
};

export default AboutPage;
