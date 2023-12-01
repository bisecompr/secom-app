import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png'


const Menu = () => {


    return (
        <>  
        <Navbar bg="dark" variant="dark" expand='lg' sticky="top"> 
            <Container fluid>
                <Navbar.Brand href="/home" style={{marginLeft: 20, marginTop: 9}}>
                    <img
                        src={logo}
                        className="img-fluid"
                        width="48,49"
                        height="auto"
                        alt="Logo"
                    />
                                    
                </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" 
                                    style={{ maxHeight: '350px' }}
                                    navbarScroll
                                >
                                <Link className="nav-link" to="/benchmark">Benchmark</Link>
                                <Link className="nav-link" to="/campanhas">Campanhas</Link>
                                <Link className="nav-link" to="/login">Login</Link>

                            </Nav>
                            
                        </Navbar.Collapse>                
                
            </Container>
        </Navbar>
  
            
        </>
    )
}

export default Menu