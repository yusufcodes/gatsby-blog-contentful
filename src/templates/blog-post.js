import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Header from "../components/Header/Header"
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
    <div>
      <Header />
      <h1>{post.title}</h1>
      <h2 className={classes.author}>Author: {post.author.name}</h2>
      {renderRichText(post.body)}
    </div>
  )
}
