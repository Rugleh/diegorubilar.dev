import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Album from "../components/album"

import Fade from "react-reveal/Fade"
import Particles from "react-particles-js"



class Portafolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <div>
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
              Portafolio<span className="orange">.</span>
            </h1>
          </Fade>
        </div>
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portafolio" />

        
     
        <Container>
         
        <Album></Album>

        </Container>
        
      </Layout>

      </div>
    )
  }
}

export default Portafolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
