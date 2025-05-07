module.exports = {
  siteMetadata: {
    title: `Sierra November`,
    description: `Personal website and Portfolio of Alexandre Aimbiré`,
    author: `Alexandre Aimbiré`,
    url: `https://sierranovember.com.br`,
    image: `https://sierranovember.com.br/og-image.jpg`,
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "UF",
        fieldName: "underfloripa",
        url: "https://underfloripa.com.br/graphql",
      },
    },
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://underfloripa.com.br/graphql`,
        html: {
          useGatsbyImage: true,
          createStaticFiles: true,
          fallbackImageMaxWidth: 2048,
          imageQuality: 90,
        },
        type: {
          MediaItem: {
            createFileNodes: true,
          },
          Post: {
            limit: process.env.NODE_ENV === `development` ? 50 : 5000,
          },
          AcfFieldGroup: {
            exclude: true,
          },
        },
        schema: {
          typePrefix: `Wp`,
          perPage: 100,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
  ],
};
