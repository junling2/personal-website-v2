import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PostLink = ({ post }) => {
  return (
    <PostContainer>
      <TopLine>
        <PostTitle to={post.frontmatter.slug}>
          {post.frontmatter.title}
        </PostTitle>
        <PostDifficulty
          diff={
            post.frontmatter.difficulty === "Easy"
              ? "green"
              : post.frontmatter.difficulty === "Medium"
              ? "gold"
              : "red"
          }
        >
          {post.frontmatter.difficulty}
        </PostDifficulty>
      </TopLine>
      <Topics>{post.frontmatter.topics}</Topics>
    </PostContainer>
  )
}

export default PostLink

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #f0f8ff;
  width: 75%;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: solid;
  border-color: steelblue;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

const PostTitle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: "Raleway";
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: black;

  &:hover {
    color: coral;
  }
`
const PostDifficulty = styled.h3`
  color: ${props => props.diff};
  font-size: clamp(0.8rem, 3vw, 1.3rem);
  font-family: "Quicksand";
`

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`

const Topics = styled.p`
  font-family: "Source Code Pro";
  word-spacing: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  color: dimgray;
`
