const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // TODO: Create a blog post template
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Done: replaced with my own GraphQL query
  const result = await graphql(`
    query {
      allContentfulPost {
        nodes {
          id
          slug
          title
          body {
            raw
          }
        }
      }
    }
  `)
  result.data.allContentfulPost.nodes.forEach(node => {
    createPage({
      path: `${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
