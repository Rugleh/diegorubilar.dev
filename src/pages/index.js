import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

import Container from "react-bootstrap/Container"

import SEO from "../components/seo"
import Particles from "react-particles-js"
import Menu from "../components/menu"
import Footer from "../components/footer"

import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import Fade from "react-reveal/Fade"

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Menu></Menu>

        <Particles
          className="particles"
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
        <Container>
          
            <div className="absolute">
            <Fade bottom >
           
              <h1 className="title">
           Hi, I'm <span className="orange">Diego</span>
           
              </h1>
            </Fade>
            <Fade bottom >
              <p className="lead paragraph">
                As a front end{" "}
                <span className="orange">
                  <b>web developer</b>
                </span>{" "}
                and engineer I want to build a better and faster web experience
                for everyone, based in Santiago, Chile.
              </p>
              </Fade>
              
            <Fade bottom big>
              <div className="icons">
                <a href="https://twitter.com/rugleh">
                  <FaTwitter></FaTwitter>
                </a>{" "}
                <a href="https://instagram.com/rugleh">
                  <FaInstagram></FaInstagram>
                </a>{" "}
                <a href="linkedin.com/in/diego-rubilar-tagle-637b2242">
                  <FaLinkedin></FaLinkedin>
                </a>{" "}
                <a href="https://github.com/rugleh">
                  <FaGithub></FaGithub>
                </a>
              </div>
              </Fade>

            </div>

        </Container>

        <Footer></Footer>
      </div>
    )
  }
}

export default IndexPage
