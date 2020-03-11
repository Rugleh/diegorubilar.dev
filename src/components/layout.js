import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import Footer from "../components/footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { globalHistory as history } from '@reach/router'

import Fade from "react-reveal/Fade"
import Particles from "react-particles-js"

class Layout extends React.Component {
  
  render() {
    const { location, navigate, } = history
    const { children, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    return (
      <div>
        <Menu></Menu>
        <Particles
          className="particles-blog"
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />

        <div className="absolute-blog">
          <Fade bottom>
            <h1 className="title">
            {this.props.pagename}<span className="orange">.</span>
            </h1>  
          </Fade>
        </div>

        <br></br>
        <br></br>
        <Container >
        <Row className="justify-content-md-center">
          <Col>
            <header>{header}</header>
            <main>{children}</main>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer></Footer>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default Layout
