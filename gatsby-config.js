module.exports = {
  siteMetadata: {
    title: `Sierra November`,
    description: `Personal website and Portfolio of Alexandre Aimbiré`,
    author: `Alexandre Aimbiré`,
    url: `https://www.sierranovember.com.br`,
    image: `https://www.sierranovember.com.br/og-image.jpg`,
    lang: `en`,
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-4SN5BHWDPN",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
