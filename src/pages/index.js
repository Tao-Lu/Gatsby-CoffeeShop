import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section1 />
    <Section2 heading="Our Drinks" />
    <Section3 />
    <Section4 />
  </Layout>
)

export default IndexPage
