import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png'
import { useNavigate } from "react-router";


const MenuAdmin = () => {

    const navigate = useNavigate();

    const logout = () => {

        sessionStorage.removeItem('_role')       
        window.location.reload(navigate('/home'))        
        
    }

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

                            </Nav>
                        
                        <div align="end"> 
                            <button className='btn btn-light' align="right" onClick={() => logout(window.scrollTo(0, 0))}>sair</button>                        
                        </div>
                        </Navbar.Collapse>                
                
            </Container>
        </Navbar>
  
            
        </>
    )
}

export default MenuAdmin