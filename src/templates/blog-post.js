import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import classes from "./Post.module.css"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      author {
        name
      }
      body {
        raw
      }
    }
  }
`

export default function BlogPost({ data }) {
  const post = data.post
  return (
    <>
      <Header />
      <h1 className={classes.title}>{post.title}</h1>
      {renderRichText(post.body)}
      <Footer />
    </>
  )
}
