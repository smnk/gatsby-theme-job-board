import React from "react"
import Layout from "../components/layout"
import Jobs from "../components/jobs"
import About from "../components/about"

const BlogIndexTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <About />
      <Jobs posts={pageContext.posts} />
    </Layout>
  )
}

export default BlogIndexTemplate
