import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Fade from "react-reveal/Fade"

import Particles from "react-particles-js"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

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
              Blog<span className="orange">.</span>
            </h1>
          </Fade>
        </div>
          
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />

          {/* <Bio /> */}

          <div>
            <Row>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              
            
              return (
                <Col md={6}>
                    <Fade bottom >
                  <div key={node.fields.slug}>
                    <h3>
                      <Link to={`blog${node.fields.slug}`}>{title}</Link>
                    </h3>
                    <small className="lead"><b>{node.frontmatter.date}</b></small>
                    <p className="lead"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                </Fade>
                </Col>
              )
            })}
            </Row>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
