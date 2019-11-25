module.exports = {
  siteMetadata: {
    title: `Sierra November`,
    description: `Personal website and Portfolio of Alexandre Aimbiré`,
    author: `Alexandre Aimbiré`,
    url: `https://sierranovember.com.br`,
    image: `/images/me.jpg`,
    twitterUsername: `@vickersvickers`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/custom/",
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "sierranovember.com.br",
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
          {
            from: "http:sierranovember.com.br",
            to: "https:sierranovember.com.br",
          },
        ],
      },
    },
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
        background_color: `#1d1d1d`,
      },
    },
  ],
}
