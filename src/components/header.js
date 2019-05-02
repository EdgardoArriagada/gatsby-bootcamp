import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Header!</h1>
      <nav>
        <li>
          <Link to="/contact"> Contact me</Link>
        </li>

        <li>
          <Link to="/about"> About me</Link>
        </li>

        <li>
          <Link to="/blog"> Blog me</Link>
        </li>
      </nav>
    </header>
  )
}

export default Header
