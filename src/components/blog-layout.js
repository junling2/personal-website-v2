import * as React from "react"
import BlogHeader from "./blogHeader"
import { GlobalStyle } from "./styles/GlobalStyles"

const BlogLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <BlogHeader />
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
