import React from 'react'
import NavIcon from './NavIcon';
import {Navbar,Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navm from './Navm'
import { Link } from "react-router-dom";

export default function Navbarr() {
    return (
      
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Container style={{justifyContent:'space-around'}}>
                    
                    <Navbar.Brand href="www.facebook.com"><NavIcon/></Navbar.Brand>
                    <Navbar.Brand >                        
                        
                        <input
                            type="text"
                            placeholder="Search"/>
                    </Navbar.Brand>
                    

                    <Nav style={{paddingLeft:200}} className="me-auto">
                  


                    <Nav.Link className='li' href="#Home"><i class="fas fa-home"></i></Nav.Link>
                    <Nav.Link className='li' href="#watch"><i class="far fa-play-circle"></i></Nav.Link>
                    <Nav.Link className='li' href="#groups"><i class="fas fa-users"></i></Nav.Link>
                    <Nav.Link className='li' href="#gaming"><i class="fas fa-gamepad"></i></Nav.Link>

                    </Nav>
                    </Container>
                    
                </Navbar>
                <Navm />
                
            </>
        </div>
       
            
    )
}
