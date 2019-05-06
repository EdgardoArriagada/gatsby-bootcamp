const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNode, createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.

  // const response = await graphql(`
  //   {
  //     allMarkdownRemark(limit: 1000) {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const response = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (response.errors) {
    throw response.errors
  }

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    const { slug } = edge.node
    createPage({
      // Path for this page — required
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: { slug },
    })
  })
}
