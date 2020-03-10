import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Album from "../components/album"



class Portafolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portafolio" />
        <br></br>
        <Container>
        <h1>Portafolio</h1>
        <br></br>
        <Album></Album>

        </Container>
        
      </Layout>
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
