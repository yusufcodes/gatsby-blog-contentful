/* eslint-disable */
import React from "react"
import classes from "./Posts.module.css"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Posts() {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      posts: allContentfulPost {
        nodes {
          slug
          title
          createdAt
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <p className={classes.heading}>Posts</p>
      {data.posts.nodes.map(({ slug, title, createdAt }) => (
        <>
          <div key={`post-${slug}`} className={classes.postContainer}>
            <Link to={`/${slug}`} className={classes.link}>
              <p className={classes.title}>{title}</p>
              <p className={classes.date}>
                {new Date(createdAt).toLocaleDateString()}
              </p>
            </Link>
          </div>
        </>
      ))}
    </div>
    // post.slug, post.title
  )
}
