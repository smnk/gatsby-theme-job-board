// eslint-disable-next-line
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const jobMeta = ({ formattedDate, location, company }) => {
  return (
    <small
      sx={{
        fontFamily: "heading",
        fontWeight: 400,
        fontSize: 0,
      }}
    >
      {company} | {location} | {formattedDate} 
    </small>
  )
}

export default jobMeta
