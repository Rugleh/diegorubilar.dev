import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Fade from "react-reveal/Fade"


class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const pagename = "Blog"


    return (
      <div>
        
        <Layout pagename={pagename} location={this.props.location} title={siteTitle}>
          <SEO title="Blog" />

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
