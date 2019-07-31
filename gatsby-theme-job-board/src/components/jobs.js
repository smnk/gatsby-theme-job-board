import React from "react"
import JobPreview from "./job-preview"

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <JobPreview
          key={post.node.id}
          title={post.node.frontmatter.title}
          formattedDate={post.node.frontmatter.date}
          company={post.node.frontmatter.company}
          location={post.node.frontmatter.location}
          descriptionHTML={post.node.excerpt}
          slug={post.node.fields.slug}
        />
      ))}
    </>
  )
}

export default Posts
