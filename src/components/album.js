import React from "react"

import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import { StaticQuery, graphql } from "gatsby"

import Fade from "react-reveal/Fade"
import { FaVuejs } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { FaLaravel } from "react-icons/fa"
import { FaWordpress } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"


import "./album.css"

import Image from "gatsby-image"

function Album() {
  return (
    <StaticQuery
      query={albumQuery}
      render={data => {
        
        return (
          <div>
            <Fade bottom>
              <CardDeck>
                <Card>
                  <div>
                    <Image
                      fixed={data.mindgrowth.childImageSharp.fixed}
                      alt="mindgrowth"
                      style={{
                        height: "200px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>MindGrowth</Card.Title>
                    <Card.Text className="lead">
                      Web development for{" "}
                      <a href="https://www.mindgrowth.cl">MindGrowth</a>, a
                      strategic planification consultant focussing in chilean
                      pymes bussiness.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <FaNodeJs></FaNodeJs> <FaVuejs></FaVuejs>{" "}
                    <FaBootstrap></FaBootstrap>
                  </Card.Footer>
                </Card>
                <Card>
                  <div>
                    <Image
                      fixed={data.cajapyme.childImageSharp.fixed}
                      alt="cajapyme"
                      style={{
                        height: "200px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>CajaPyme</Card.Title>
                    <Card.Text className="lead">
                      Web development and ecommerce implementation for{" "}
                      <a href="https://www.cajapyme.cl">CajaPyme</a>, a surprise
                      box full of chileans entrepreneur products
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <FaWordpress></FaWordpress>{" "}
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  </Card.Footer>
                </Card>
                <Card>
                  <div>
                    <Image
                      fixed={data.dosha.childImageSharp.fixed}
                      alt="dosha"
                      style={{
                        height: "200px",
                        width: "100%",
                        align: "middle",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Dosha Imbalance</Card.Title>
                    <Card.Text className="lead">
                      Open source{" "}
                      <a href="https://doshaimbalance.netlify.com">
                        Ayurveda Quiz
                      </a>
                      , it was develop for the HealthyGamer Community for free.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <DiJavascript1></DiJavascript1> <FaBootstrap></FaBootstrap>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Fade>
            <br></br>
            <Fade bottom>
              <CardDeck>
                <Card>
                  <div>
                    <Image
                      fixed={data.derechos.childImageSharp.fixed}
                      alt="derechos"
                      style={{
                        height: "200px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Derechos en Linea</Card.Title>
                    <Card.Text className="lead">
                      Web development and backend platform for{" "}
                      <a href="https://www.derechosenlinea.cl">
                        Derechos en Linea
                      </a>
                      , group of professional and services that helps
                      prosecutors manage their cases
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <FaLaravel></FaLaravel> <FaVuejs></FaVuejs>{" "}
                    <FaBootstrap></FaBootstrap>
                  </Card.Footer>
                </Card>
                <Card>
                  <div>
                    <Image
                      fixed={data.turismo.childImageSharp.fixed}
                      alt="turismo"
                      style={{
                        height: "200px",
                        width: "100%",
                        align: "middle",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Turismo Meditarraneo</Card.Title>
                    <Card.Text className="lead">
                      Web development for{" "}
                      <a href="https://www.turismomediterraneo.cl">
                        Turismo Meditarraneo
                      </a>
                      , turism agency based in Santiago, Chile with alliances
                      around the world.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <FaLaravel></FaLaravel> <FaVuejs></FaVuejs>{" "}
                    <FaBootstrap></FaBootstrap>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Fade>
          </div>
        )
      }}
    />
  )
}

const albumQuery = graphql`
  query AlbumQuery {
    mindgrowth: file(absolutePath: { regex: "/portafolio/mindgrowth.png/" }) {
      childImageSharp {
        fixed(width: 959, height: 521) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cajapyme: file(absolutePath: { regex: "/portafolio/cajapyme.png/" }) {
      childImageSharp {
        fixed(width: 1611, height: 1251) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dosha: file(absolutePath: { regex: "/portafolio/dosha.png/" }) {
      childImageSharp {
        fixed(width: 1611, height: 1251) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    derechos: file(absolutePath: { regex: "/portafolio/derechos.png/" }) {
      childImageSharp {
        fixed(width: 1408, height: 1251) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    turismo: file(absolutePath: { regex: "/portafolio/turismo.png/" }) {
      childImageSharp {
        fixed(width: 1609, height: 1251) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Album
