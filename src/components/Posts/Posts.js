import React from "react"
import classes from "./Posts.module.css"
import { useStaticQuery, Link } from "gatsby"

export default function Posts() {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      posts: allContentfulPost {
        nodes {
          slug
          title
        }
      }
    }
  `)

  // const { posts } = data
  return (
    <div>
      <p className={classes.heading}>Blog Posts</p>
      {data.posts.nodes.map(post => (
        <div key={`post-${post.slug}`}>
          <Link className={classes.link} to={`/${post.slug}`}>
            <div className={classes.card}>
              <div className={classes.title}>{post.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
