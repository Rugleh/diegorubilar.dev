import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

import Container from 'react-bootstrap/Container'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Album from "../components/album"

class IndexPage extends React.Component {
  render() {
    const siteTitle = ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Container>
          <br></br>
          
            <h1>
          Hey, I'm Diego Rubilar
        </h1>
        <br></br>
        <p className="lead">
          A web developer based in Santiago, Chile. Who wants to build a better and faster web experience for all of us. 
          In love with new technologies like JAMstack, everything about Javascript frameworks, Digital Marketing,
           performance code and how it can help us to get a way better SEO. </p>
        <br></br>

        <h2>Portafolio</h2>
        <br></br>

        <Album></Album>
        
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
