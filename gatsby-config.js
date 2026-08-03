module.exports = {
  siteMetadata: {
    title: `Sierra November`,
    description: `Personal website and portfolio of Alexandre Aimbiré`,
    author: `Alexandre Aimbiré`,
    siteUrl: `https://www.sierranovember.com.br`,
    image: `https://www.sierranovember.com.br/og-image.jpg`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sierra November`,
        short_name: `sierra`,
        start_url: `/`,
        icon: `src/assets/images/sierra.svg`,
        background_color: `#1d1d1d`,
      },
    },
  ],
};
