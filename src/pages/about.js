import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import Fade from "react-reveal/Fade"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pagename = "About me"

    return (
      <Layout
        pagename={pagename}
        location={this.props.location}
        title={siteTitle}
      >
        <SEO title="About me" />

        <Container>
              <Fade bottom >
              <h2>
            <b>
              Who am I?<span className="orange">.</span>
            </b>
          <hr></hr>
          </h2>
          <Row>
            <Col md={8}>
            <p className="lead">
          I'm a 28 years old web developer and engineer based in Chile, I'm always looking for new opportunities and challenges.

          </p>
            </Col>
            <Col md={4}>
              Digital Marketing, Web development, Engineer
            </Col>
          </Row>

          <br></br>
         
          <h2>
            <b>
              Experience<span className="orange">.</span>
            </b>
          </h2>
          <hr></hr>
          <h3>
            Digital Marketing Manager <br></br>
            <small>GeoVictoria (2018 - 2019)</small>
          </h3>
          <Row>
            <Col md={8}>
              <p className="lead">
              I lead and implemented a series of Google Ads campaigns, web optimizations (SEO), landing page design and development for GeoVictoria a multi national assist control software company.
              </p>
              <p className="lead">
              One of the big challenges here was to understand in action, how the business process works, and how can I improve it using the tools that they already had. I was in charge of the technical part of every kind of implementation in the marketing area and we manage to get better results in a variety of process.
              </p>
              <p className="lead">
              We successfully implemented a new CRM for the sales area of the company and develop a few costume modules for the needs of the work flow.
              </p>
            </Col>
            <Col md={4}>
              HTML, CSS, Bootstrap, Javascript, Vuejs, Nuxtjs, Google Ads,
              Google Analytics, Zoho, Instapage, Mailchimp, Azure, Pipedrive, Wordpress,
              Bootstrap, Moz, SEO, Active Campaign, Adobe Photoshop, Adobe
              Illustrator
            </Col>
          </Row>
              

          <br></br>

          <h3>
            Web Developer <br></br>
            <small>MindGrowth (2019)</small>
          </h3>
          <Row>
            <Col md={8}>
              <p className="lead">
                Web development for MindGrowth a strategy planification
                consultant agency, I build the web using static web technology
                like Nuxt.js getting outstanding results in performance.
              </p>
            </Col>
            <Col md={4}>
              HTML, CSS, Bootstrap, Javascript, Vuejs, Nuxtjs, Google Analytics,
              Netlify
            </Col>
          </Row>

          <br></br>

          <h3>
            Web Developer <br></br>
            <small>CajaPyme (2019)</small>
          </h3>
          <Row>
            <Col md={8}>
              <p className="lead">
                Web development and ecommerce implementation for CajaPyme a
                surprise box full of chilean pyme's products. The implementation
                was in Wordpress using Woocomerce and a few extra plugins for
                the sales process.
              </p>
            </Col>
            <Col md={4}>HTML, CSS, Wordpress, Woocomerce, Transbank, Payku</Col>
          </Row>

          <br></br>
          <h3>
            Web Developer <br></br>
            <small>Derechos en Linea (2018)</small>
          </h3>
          <Row>
            <Col md={8}>
              <p className="lead">
              Web development for Derechos en Linea, group of professional and services that helps prosecutors manage their cases. The development was a really extense one, not because of the main web, but for the system that is running behind, it's a web app build with Voyager and Laravel, It lets the workers manage their cases and share documents between them.
              </p>
            </Col>
            <Col md={4}>
              HTML, CSS, Bootstrap, Javascript, Jquery, Vue, Laravel, Voyager,
              Php, Cpanel
            </Col>
          </Row>

          <br></br>
          <h3>
            Web Developer <br></br>
            <small>Turismo Mediterraneo (2017)</small>
          </h3>
          <Row>
            <Col md={8}>
              <p className="lead">
              Web development for Turismo Mediterraneo, tourism agency with allies around the world. One of my first webs that I develop using Php and Laravel, one of the big challenges was to make a dashboard that let the workers upload tours and edit them. The development of this web was really big for them and help the company to grow really fast.
              </p>
            </Col>
            <Col md={4}>
              HTML, CSS, Bootstrap, Javascript, Jquery, Vue, Laravel, Voyager,
              Php, Cpanel
            </Col>
          </Row>

          <br></br>
          <h3>
            Developer <br></br>
            <small>Smarti (2016)</small>
          </h3>
          <Row>
            <Col md={8}>
              <p className="lead">
              Intern in Smarti a TI consultant. I worked in projects using beacons, little Bluetooth gadgets that emits and receive signals in order to locate each other with the help of a radar (raspberry pi).
              </p>
            </Col>
            <Col md={4}>
              HTML, CSS, Php, Yii2, Jquery, Linux, Rasperry Pi, Python.
            </Col>
          </Row>

          <br></br>

          <h2>
            <b>
              Education<span className="orange">.</span>
            </b>
          </h2>
          <hr></hr>

          <br></br>
          <h3>
            Diego Portales University, Chile<br></br>
            <small>Ingeniería en Informática y Gestión (2013 - 2018)</small>
          </h3>
          <br></br>
          <h3>
            EF Education First, Miami Florida, USA<br></br>
            <small>English course (2013)</small>
          </h3>

          </Fade>
        </Container>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
