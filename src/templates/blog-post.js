import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import classes from "./Post.module.css"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      body {
        raw
      }
      slug
      createdAt
    }
    site {
      siteMetadata {
        title
        description
        social {
          twitter
        }
        siteUrl
      }
    }
  }
`

const constructUrl = (baseUrl, path) =>
  !baseUrl || !path ? null : `${baseUrl}${path}`

export default function BlogPost({ data }) {
  const post = data.post
  return (
    <>
      <Header />
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title} | yusufcodes</title>
        <link rel="canonical" href={`http://www.yusufcodes.com/${post.slug}`} />
      </Helmet> */}
      <SEO title={post.title} />
      <div className={classes.root}>
        <div className={classes.body}>
          <h1 className={classes.title}>{post.title}</h1>
          <p className={classes.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          {renderRichText(post.body)}
          <p className={classes.wave}>👋🏼</p>
          <p>
            Thank you for reading my blog post! If you liked it, and want to be
            notified for more posts, find me on my various social media channels
            through the buttons below. I'd also love any feedback you may have
            about my writing 😊
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}
