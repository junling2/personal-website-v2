import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/sections/about"
import styled from "styled-components"
import Experience from "../components/sections/experience"
import Projects from "../components/sections/projects"
import Connect from "../components/sections/connect"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Divider />
    <About />
    <Divider />
    <Experience />
    <Divider />
    <Projects />
    <Divider />
    <Connect />
    <Footer>
      <FooterText>Designed and Built by Junling Qu</FooterText>
    </Footer>
  </Layout>
)

export default IndexPage

const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 12px;
  background: white;
`

const Footer = styled.div`
  display: flex;
  width: 100%;
  background: white;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.h4`
  font-family: "Source Code Pro";
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`
