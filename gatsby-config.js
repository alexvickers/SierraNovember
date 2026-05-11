module.exports = {
  siteMetadata: {
    title: `Sierra November`,
    description: `Personal website and Portfolio of Alexandre Aimbiré`,
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
        name: `concertImages`,
        path: `${__dirname}/src/assets/images/concerts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `sierra`,
        start_url: `/`,
        icon: `src/assets/images/sierra.svg`,
        background_color: `#1d1d1d`,
      },
    },
  ],
};
