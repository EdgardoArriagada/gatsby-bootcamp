import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <p>Created with love by {data.site.siteMetadata.author} </p>
    </React.Fragment>
  )
}

export default Footer
