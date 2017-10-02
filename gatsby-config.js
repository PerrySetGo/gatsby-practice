module.exports = {
  siteMetadata: {
  title: `perrysetgo`,
  flexcss: `https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.4.1/gridlex.min.css`
},
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Cairo`]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
          },
      `gatsby-transformer-remark`,
      `gatsby-plugin-glamor`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-twitter`,

  ],
}
