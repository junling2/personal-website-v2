import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlogHeader = () => {
  return (
    <BlogNav>
      <NavLogo to="/">JQ</NavLogo>
    </BlogNav>
  )
}

export default BlogHeader

const BlogNav = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: "blur(8px)";
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: sticky;
  top: 0;
  z-index: 999;
`
const NavLogo = styled(Link)`
  color: #fff5ee;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    color: #1e90ff;
  }
`
