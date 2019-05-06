import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"

import css from "./blog.module.scss"

const Blog = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  // const { edges } = data.allMarkdownRemark
  const { edges } = data.allContentfulBlogPost

  const Posts = edges.map(edge => {
    // const { frontmatter, fields } = edge.node
    // const { title, date } = frontmatter
    const { title, slug, publishedDate } = edge.node
    return (
      <li className={css.post} key={slug + title + publishedDate}>
        <Link to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>{publishedDate}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <p>Posts </p>
      <ol className={css.posts}>{Posts}</ol>
    </Layout>
  )
}

export default Blog
