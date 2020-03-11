import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Fade from "react-reveal/Fade"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pagename = "Contact"

    return (
      <Layout
        pagename={pagename}
        location={this.props.location}
        title={siteTitle}
      >
        <SEO title="Contact" />
        <br></br>
        <Container>
     
      <Row>
        <Col md={6}>
   

          <h2> Need help? let me know?</h2>
          <br></br>

          <Form name="contact" method="POST" data-netlify="true">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="lead">Your Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Jhon Smith" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="lead">Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </Form.Group>
          
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="lead">Comment</Form.Label>
              <Form.Control as="textarea" rows="4" />
            </Form.Group>
            <Button className="custom-button" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
        <Col md={6}>
        <h2> Basic Info</h2>
        <br></br>

          <p className="lead"> Santiago, Chile </p>
          <p className="lead"> diegorubilartagle@gmail.com </p>
        </Col>
      </Row>
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
