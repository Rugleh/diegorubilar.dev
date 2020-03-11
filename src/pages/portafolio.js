import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Album from "../components/album"

import Fade from "react-reveal/Fade"
import Particles from "react-particles-js"

class Portafolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pagename = "Portafolio"

    return (
      <div>
        <Layout
          pagename={pagename}
          location={this.props.location}
          title={siteTitle}
        >
          <SEO title="Portafolio" />
          <Container>
            <Album></Album>
          </Container>
        </Layout>
      </div>
    )
  }
}

export default Portafolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
