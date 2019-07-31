const fs = require("fs")
const mkdirp = require("mkdirp")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

let basePath

exports.onPreBootstrap = ({ reporter, store }, options) => {
  const { program } = store.getState()

  basePath = options.basePath || "/"
  const contentPath = options.contentPath || "content/jobs"
  const assetsPath = options.assetsPath || "content/assets"

  const paths = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetsPath),
  ]

  // check if paths exist
  paths.forEach(path => {
    if (!fs.existsSync(path)) {
      reporter.info(`creating the ${path} directory`)
      mkdirp(path)
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const jobTemplate = require.resolve("./src/templates/job.js")
  const indexTemplate = require.resolve("./src/templates/index.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              company
              location
              url
            }
            excerpt(truncate: true)
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error, can't get page data", result.errors)
    return
  }

  // create post pages
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: jobTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  createPage({
    path: basePath,
    component: indexTemplate,
    context: {
      posts,
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
