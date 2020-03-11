import React from "react"
import Menu from "../components/menu"
import Footer from "../components/footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { globalHistory as history } from "@reach/router"

import Fade from "react-reveal/Fade"
import Particles from "react-particles-js"

class Layout extends React.Component {
  render() {
    const { location } = history
    const { children } = this.props
 
    let header
    const pathArray = location.pathname.split("/")
    console.log(pathArray)

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
            <Container>
              <Row className="justify-content-md-center">
                <Col md={8}>
                  <h1
                    className={
                      pathArray[1] === "blog" && pathArray[2] != null
                        ? "blog-title"
                        : "page-title"
                    }
                  >
                    {this.props.pagename}
                    <span className="orange">.</span>
                  </h1>
                  <p className="blog-date">{this.props.date}</p>
                </Col>
              </Row>
            </Container>
          </Fade>
        </div>

        <br></br>
        <br></br>
        <Container>
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
