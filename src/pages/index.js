import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <React.Fragment>
      <h1>Hello!</h1>
      <h2>I'm Edie, a full stack developer.</h2>
      <p>
        Need a developer?
        <Link to="/contact"> Contact me</Link>
      </p>
      <Link to="/about"> About me</Link>
      <Link to="/blog"> Blog me</Link>
    </React.Fragment>
  )
}

export default IndexPage
