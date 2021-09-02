import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <PostContainer>
      <BackLink to="/blog">Return to Blog</BackLink>
      <Post>
        <PostTitle>{frontmatter.title}</PostTitle>
        <PostDate>{frontmatter.date}</PostDate>
        <PostContent dangerouslySetInnerHTML={{ __html: html }} />
      </Post>
    </PostContainer>
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

const PostContainer = styled.div`
  background: ghostwhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`
const BackLink = styled(Link)`
  color: steelblue;
  border-color: steelblue;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  padding: 0.5rem;
  align-self: flex-start;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 1rem;
  margin-top: 1rem;

  &:hover {
    background: gainsboro;
  }
`
const PostTitle = styled.h1`
  font-weight: bolder;
  font-size: 2.5rem;
  margin-bottom: 0;
  margin-left: 2rem;
`

const PostDate = styled.h4`
  font-family: "Source Code Pro";
  margin-top: 5px;
  margin-left: 2rem;
`
const PostContent = styled.div`
  font-family: "Roboto";
  font-size: 1.2rem;
  margin-left: 2rem;

  blockquote {
    background: gainsboro;
    font-size: 1rem;
    margin-left: 0;
    padding-left: 1.5rem;
    padding-top: 0.2rem;
    padding-right: 1.5rem;
    padding-bottom: 0.2rem;
    line-height: 1.8;
  }
`
const Post = styled.div`
  width: 75%;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`
