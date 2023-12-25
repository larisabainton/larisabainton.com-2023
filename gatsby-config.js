require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Larisa Bainton`,
    siteUrl: `https://www.larisabainton.com`,
    description: "Follow for soprano Larisa Bainton's upcoming performances and creative projects",
    keywords: "soprano, Boston, art, Larisa Bainton, Larisa, Bainton, music, voice, opera, guitar, piano"
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: 'Dawning of a New Day',
            file: 'https://fonts.googleapis.com/css2?family=Dawning+of+a+New+Day&display=swap',
          },
          {
            name: 'Work Sans',
            file: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap',
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mr7omzmlt2ii`,
        environment: "master",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ]
};