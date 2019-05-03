import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import css from "./footer.module.scss"

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
    <footer className={css.footer}>
      <p>Created with love by {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
