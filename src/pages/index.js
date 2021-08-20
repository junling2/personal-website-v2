import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/sections/about"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
