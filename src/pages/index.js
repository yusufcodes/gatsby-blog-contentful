import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  {
    posts: allContentfulPost {
      nodes {
        slug
        title
      }
    }
  }
`

export default function Home({ data }) {
  return (
    <div>
      List of Blog Posts
      {data.posts.nodes.map(post => (
        <div key={`post-${post.slug}`}>
          <Link to={`/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}
