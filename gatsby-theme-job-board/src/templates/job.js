import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import JobMeta from "../components/job-meta"
import Image from "gatsby-image"
import About from "../components/about"
import Helmet from "react-helmet"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>

        <Helmet>
          <title>{post.frontmatter.title} - {siteTitle}</title>
        </Helmet>

        <Image fixed={post.frontmatter.companyLogo.childImageSharp.fixed} />
        <Styled.h1 sx={{ marginBottom: 1 }}>{post.frontmatter.title}</Styled.h1>
        <JobMeta formattedDate={post.frontmatter.date} company={post.frontmatter.company} location={post.frontmatter.location} />
        <div
          sx={{ fontSize: 3 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <a href={post.frontmatter.url}>Apply now</a>
        <About />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        company
        location
        url
        companyLogo {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
