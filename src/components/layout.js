import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
