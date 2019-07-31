// eslint-disable-next-line
import React from "react"
import Image from "gatsby-image"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

const About = () => {
  const data = useStaticQuery(aboutQuery)
  return (
    <Flex
      sx={{
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 3,
        alignItems: "center",
        flexDirection: ["column", "row"],
      }}
    >
      {data.logo && (
        <Image
          sx={{
            marginRight: 3,
            minWidth: [100, 80],
            minHeight: [100, 80],
          }}
          fixed={data.logo.childImageSharp.fixed}
        />
      )}
      <p>{data.site.siteMetadata.description}</p>
    </Flex>
  )
}

export default About

const aboutQuery = graphql`
  query About {
    logo: file(absolutePath: { regex: "/site-logo.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`
