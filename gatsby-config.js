require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "article",
      queryParams: {
        publicationState:
          process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
        queryLimit: 5000,
        populate: {
          cover: "*",
          blocks: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "author",
    },
    {
      singularName: "category",
    },
  ],
  singleTypes: [
    {
      singularName: "about",
      queryParams: {
        populate: {
          blocks: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "global",
      queryParams: {
        populate: {
          favicon: "*",
          defaultSeo: {
            populate: "*",
          },
        },
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Cody Cooper`,
    siteUrl: `https://codycooper.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-C7HL1TZX28"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/style-guide"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui",
    "gatsby-theme-style-guide",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};
