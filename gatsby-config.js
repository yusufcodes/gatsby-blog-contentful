require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `yusufcodes`,
    siteUrl: `https://www.yusufcodes.xyz`,
    description: `Blog for yusufcodes`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uwoaomvuao0g`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
}
