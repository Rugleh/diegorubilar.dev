
import React from "react"
import { Navbar, NavItem, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import "./menu.css"
import { Container } from "react-bootstrap"


const Menu = () => {
    return (
      <div>
        <Navbar
          className="main-navbar"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
         <Container>
            <Navbar.Brand as={Link} href="/" to="/"><span className="white">Diego</span> Rubilar<span className="orange">.</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav  className="lead">
                <NavItem className="nav-link" as={Link} href="/" to="/">
                  Home
                </NavItem>
                <NavItem className="nav-link" as={Link} href="/blog" to="/blog">
                  Blog
                </NavItem>
                <NavItem
                  className="nav-link"
                  as={Link}
                  href="/portafolio"
                  to="/portafolio"
                >
                  Portafolio
                </NavItem>
                <NavItem className="nav-link" as={Link} href="/about" to="/about">
                  About me
                </NavItem>
                <NavItem
                  className="nav-link"
                  as={Link}
                  href="/contact"
                  to="/contact"
                >
                  Contact
                </NavItem>
                
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
  }


export default Menu
