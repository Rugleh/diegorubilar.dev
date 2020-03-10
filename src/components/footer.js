
import React from "react"
import Container from "react-bootstrap/Container"
import { globalHistory as history } from '@reach/router'


const Footer = () => {
    
    const { location, navigate } = history
    console.log( location.pathname ) 
    return (
     <Container className="sticky-bottom">
         
        <br></br>
         <p className={ 
             location.pathname === "/" ? "white" : "grey" 
            }>
         Made with Gatsby / React and Bootstrap with ❤︎ by <a href="https://twitter.com/rugleh">@Rugleh</a>
         </p>
           
         

     </Container>   
    )

    
  }


export default Footer
