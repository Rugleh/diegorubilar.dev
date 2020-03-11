import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from "../components/layout"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
    const [state, setState] = React.useState({})

    
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
  
    return (
      <Layout
        pagename={"Contact"}
    
        >
          <Container>
        <Row>
        <Col md={8}>
   

          <h2> Need help? let me know?</h2>
          <br></br>

        <Form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="lead">
              <Form.Control placeholder="your name" type="text" name="name" onChange={handleChange} />
            </Form.Label>
          </Form.Group>
       
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label className="lead">
              
              <Form.Control placeholder="your email@example.com" type="email" name="email" onChange={handleChange} />
            </Form.Label>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
              <Form.Control as="textarea" rows="4" name="message" onChange={handleChange} />
              </Form.Label>
            </Form.Group>
          
          <Button className="custom-button" type="submit">
              Submit
            </Button>
        </Form>
        </Col>
        <Col md={4}>
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