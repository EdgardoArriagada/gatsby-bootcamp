import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import css from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={css.header}>
      <h1>
        <Link className={css.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav className={css.navList}>
        <ul>
          <li>
            <Link
              className={css.link}
              activeClassName={css.activeNavItem}
              to="/contact"
            >
              Contact me
            </Link>
          </li>

          <li>
            <Link
              className={css.link}
              activeClassName={css.activeNavItem}
              to="/about"
            >
              About me
            </Link>
          </li>

          <li>
            <Link
              className={css.link}
              activeClassName={css.activeNavItem}
              to="/blog"
            >
              Blog me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
