module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Edgardo Arriagada",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
