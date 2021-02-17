module.exports = {
  siteMetadata: {
    siteTitle: `TopCord Documentation`,
    defaultTitle: `TopCord Documentation`,
    siteTitleShort: `TopCord Docs`,
    siteDescription: `Documentation for TopCord's systems and API.`,
    siteUrl: `https://docs.topcord.xyz`,
    siteAuthor: `@topcord`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#C880B7`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/Topcord/TopCord-Documentation`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docs.topcord.xyz`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
