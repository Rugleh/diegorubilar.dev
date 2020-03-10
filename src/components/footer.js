
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {

    return (
     <Container className="sticky-bottom">
         
        <br></br>
         <p className={
              window.location.pathname === "/" ? "white" : "grey"
            }>
         Made with Gatsby / React and Bootstrap with ❤︎ by <a href="https://twitter.com/rugleh">@Rugleh</a>
         </p>
           
         
     </Container>
    )
  }


export default Footer
