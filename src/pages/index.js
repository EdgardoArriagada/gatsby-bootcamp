import React from "react"
import { Link } from "gatsby"
import Footer from "./components/footer"
import Header from "./components/header"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>Hello!</h1>
      <h2>I'm Edie, a full stack developer.</h2>
      <p>
        Need a developer?
        <Link to="/contact"> Contact me</Link>
      </p>
      <Link to="/about"> About me</Link>
      <Link to="/blog"> Blog me</Link>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
