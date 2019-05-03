import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <h1>Hello!</h1>
        <h2>I'm Edie, a full stack developer.</h2>
        <p>
          Need a developer?
          <Link to="/contact"> Contact me</Link>
        </p>
        <Link to="/about"> About me</Link>
        <Link to="/blog"> Blog </Link>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
