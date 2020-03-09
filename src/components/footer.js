
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
    return (
     <Container>
         <Row>
             <Col>
           
         <hr></hr>
         <p className="lead text-center">
         Made with Gatsby / React and Bootstrap with ❤︎ by <a href="https://www.twitter.com/rugleh">@Rugleh</a>
         </p>
           
             </Col>
         </Row>
     </Container>
    )
  }


export default Footer
