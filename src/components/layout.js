import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import Footer from "../components/footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    return (
      <div>
        <Menu></Menu>
        <br></br>
        <br></br>
        <Container>
        <Row>
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
