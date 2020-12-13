import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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
      <h1>{post.title}</h1>
      <h2>Author: {post.author.name}</h2>
      {renderRichText(post.body)}
    </div>
  )
}
