import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";

const Benchmark = () => {

    const navigate = useNavigate();


  return (
    <div>
        
        <br />
        <Container>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Redes Sociais</Card.Title>
                        </Card.Header>
                        <Card.Img variant="top" onClick={() => navigate('/benchmark/redes')} style={{ cursor: 'pointer'}} src="https://www.insper.edu.br/wp-content/uploads/2022/04/M%C3%ADdias-sociais-2.jpg" />
                        <Card.Body>
                            <Card.Text>
                            Benchmark e perfomance de todas as redes sociais utilizadas em campanhas de 2023.
                            </Card.Text>
                            <Col className="d-grid gap-2">
                                <Button variant="primary" onClick={() => navigate('/benchmark/redes')}>Acessar Redes</Button>
                            </Col>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>AdServer</Card.Title>
                        </Card.Header>

                        <Card.Img variant="top" onClick={() => navigate('/benchmark/adserver')} style={{ cursor: 'pointer'}} src="https://www.abcdacomunicacao.com.br/wp-content/uploads/Publicidade-Digital-567x375.jpg" />
                        <Card.Body>
                            <Card.Text>
                            Benchmark e perfomance de todas os portais e verticais que utilizaram adserver em campanhas de 2023.
                            </Card.Text>
                            <Col className="d-grid gap-2">
                                <Button variant="success" onClick={() => navigate('/benchmark/adserver')}>Acessar AdServer</Button>
                            </Col>
                        </Card.Body>
                    </Card>
                
                </Col>
            </Row>
        </Container>
        

    </div>
  )
}

export default Benchmark