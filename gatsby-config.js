module.exports = {
  siteMetadata: {
    title: `Cody Cooper`,
    siteUrl: `https://codycooper.io`,
  },
  plugins: [
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
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui",
    "gatsby-theme-style-guide",
  ],
};
