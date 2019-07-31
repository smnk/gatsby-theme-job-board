/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
// eslint-disable-next-line
import React from "react"

const Title = ({ baseUrl, children }) => {
  return (
    <Link
      to="/"
      sx={{
        textDecoration: "none",
        color: "text",
        textAlign: "center",
        marginTop: "2em"
      }}
    >
      <h1 sx={{ fontFamily: "heading", fontSize: 2 }}>{children}</h1>
    </Link>
  )
}

export default Title
