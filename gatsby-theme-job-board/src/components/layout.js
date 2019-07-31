import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer as StyledFooter,
} from "theme-ui"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./title"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Main>
        <Header>
          <Title baseUrl={data.site.siteMetadata.siteUrl}>
            {data.site.siteMetadata.title}
          </Title>
        </Header>
        <Container>{children}</Container>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </Main>
    </StyledLayout>
  )
}

export default Layout
