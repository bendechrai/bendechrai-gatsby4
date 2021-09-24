require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://bendechrai.com",
    title: "Ben Dechrai",
    description: "Technologist · Public Speaker · Hacker",
    author: `@bendechrai`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECTID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
