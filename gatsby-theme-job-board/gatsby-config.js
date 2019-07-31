module.exports = options => ({
  siteMetadata: {
    title: "Gatsby Theme Job Board",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.contentPath || `content/jobs`,
        name: options.contentPath || `content/jobs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.assetsPath || `content/assets`,
        name: options.assetsPath || `content/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `typeface-work-sans`
  ],
})
