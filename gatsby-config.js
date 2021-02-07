require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `yusufcodes`,
    author: {
      name: `Yusuf`,
      summary: `A software developer based in Manchester, UK, who is blogging about their experiences.`
    },
    siteUrl: `https://www.yusufcodes.com`,
    description: `Blog for yusufcodes`,
    social: {
      twitter: `yusufcodes`
    }
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "uwoaomvuao0g",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    }
  ]
}
