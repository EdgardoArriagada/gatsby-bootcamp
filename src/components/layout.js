import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import css from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
