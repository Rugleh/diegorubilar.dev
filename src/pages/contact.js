
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"




class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pagename = "Contact"

    return (
      <Layout pagename={pagename} location={this.props.location} title={siteTitle}>
        <SEO title="Contact" />
        <br></br>
        <Container>
       
        <br></br>
       

        </Container>
        
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
