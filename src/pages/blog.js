import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"

import css from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark

  const Posts = edges.map(edge => {
    const { frontmatter, fields } = edge.node
    const { title, date } = frontmatter
    return (
      <li className={css.post} key={fields.slug + title + date}>
        <Link to={`/blog/${fields.slug}`}>
          <h2>{title}</h2>
          <p>{date}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts </p>
      <ol className={css.posts}>{Posts}</ol>
    </Layout>
  )
}

export default Blog
