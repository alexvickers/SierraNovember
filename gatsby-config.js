module.exports = {
  siteMetadata: {
    title: `Sierra November`,
    description: ``,
    author: `Alexandre Aimbiré`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113730929-1",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `sierra`,
        start_url: `/`,
        icon: `src/images/mountain-solid.svg`,
      },
    },
  ],
}
