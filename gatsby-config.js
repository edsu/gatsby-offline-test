module.exports = {
  siteMetadata: {
    title: "gatsby-offline-test",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/icon.png"
      }
    },
    "gatsby-plugin-offline"
  ],
};
