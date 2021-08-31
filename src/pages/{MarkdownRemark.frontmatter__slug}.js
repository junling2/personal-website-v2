import React from "react"
import { graphql, Link } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        <Link to="/blog">back</Link>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        difficulty
        slug
        title
        topics
      }
    }
  }
`