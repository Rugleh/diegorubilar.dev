import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

import Container from 'react-bootstrap/Container'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js';
import Menu from "../components/menu"
import Footer from "../components/footer"

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





class IndexPage extends React.Component {
  render() {
    const siteTitle = ""

    return (
      <div>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Menu></Menu>

        
        <Particles className="particles"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#E7EFC5",
                blur: 5
              }
            }
          }
        }}/>
        <Container>
        <div className="absolute">
            <h1 className="title">
         Hi! I'm <span className="orange">Diego</span> 
        </h1>
   
        <p className="lead paragraph">
         As a front end <span className="orange"><b>web developer</b></span> and engineer I want to build a better and faster web experience for everyone, based in Santiago, Chile.</p>
        <div className="icons">
        < FaTwitter></FaTwitter> <FaInstagram></FaInstagram> <FaLinkedin></FaLinkedin> <FaGithub></FaGithub>
        </div>
        </div>
        </Container>
        

       
        
      
        <Footer></Footer>

        </div>
      
    )
  }
}

export default IndexPage
