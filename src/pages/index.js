import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/sections/about"
import styled from "styled-components"
import Experience from "../components/sections/experience"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Divider />
    <About />
    <Divider />
    <Experience />
    <Divider />
  </Layout>
)

export default IndexPage

const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 12px;
  background: white;
`
