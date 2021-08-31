import { graphql } from "gatsby"
import React from "react"
import PostLink from "../components/post-link"
import styled from "styled-components"
import Seo from "../components/seo"
import BlogLayout from "../components/blog-layout"

const blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <BlogLayout>
      <Seo title="blog" />
      <BlogContainer>
        <Intro>
          Welcome to my blog! I've incorporated{" "}
          <ExtLink
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </ExtLink>{" "}
          into my weekly schedule to expand my knowledge on Data Structures
          &#38; Algorithms. Check out the latest posts below to see my thought
          process when solving these problems and the solutions I submitted.
        </Intro>
        <Hr />
        {Posts}
      </BlogContainer>
    </BlogLayout>
  )
}

export default blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            difficulty
            slug
            title
            topics
          }
        }
      }
    }
  }
`

const BlogContainer = styled.div`
  background: #fff5ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Intro = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 75%;
  font-size: 1.2rem;
  line-height: 1.5;
`

const ExtLink = styled.a`
  text-decoration: none;
  color: blue;

  &:hover {
    color: coral;
  }
`

const Hr = styled.hr`
  border-top: 2px solid grey;
  width: 80%;
  margin-bottom: 1rem;
`
