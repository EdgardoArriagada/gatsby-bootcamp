import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"

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
      <li key={fields.slug + title + date}>
        <Link to={`/blog/${fields.slug}`}>
          <h2>Title: {title}</h2>
          <p>Date: {date}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts </p>
      <ol>{Posts}</ol>
    </Layout>
  )
}

export default Blog
