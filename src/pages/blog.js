import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

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
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark

  const Posts = edges.map(edge => {
    const { title, date } = edge.node.frontmatter
    return (
      <li key={title + date}>
        <h2>Title: {title}</h2>
        <p>Date: {date}</p>
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
