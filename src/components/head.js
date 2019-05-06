import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title: metadataTitle } = data.site.siteMetadata

  return (
    <Helmet title={title ? `${title} | ${metadataTitle}` : metadataTitle} />
  )
}

export default Head
