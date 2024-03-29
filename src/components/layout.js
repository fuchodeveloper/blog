import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import "../styles/index.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginTop: 0,
            fontSize: "2.5rem",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            fontSize: "1.8rem",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <footer>
            {`© 2019 - ${new Date().getFullYear()}, `}
            <a href="https://www.linkedin.com/in/fredrick-mgbeoma/">LinkedIn</a>
            {" ∙ "}
            <a href="https://twitter.com/fuchodeveloper">Twitter</a>
            {" ∙ "}
            <a href="https://github.com/fuchodeveloper">GitHub</a>
          </footer>
          <div>
            <a href="https://www.codeisbae.com/rss.xml">rss</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
