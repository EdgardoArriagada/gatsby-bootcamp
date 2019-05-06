import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import css from "./layout.module.scss"
import Head from "./head"

const Layout = ({ children, title }) => {
  return (
    <div className={css.container}>
      <Head title={title} />
      <Header />
      <div className={css.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
