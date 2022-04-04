module.exports = {
  siteMetadata: {
    title: `Cody Cooper`,
    siteUrl: `https://codycooper.io`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-C7HL1TZX28",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-theme-style-guide",
  ],
};
