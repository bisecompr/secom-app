import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";


const Campanhas = () => {

  const navigate = useNavigate();


  return (
    <>
      <br />
      <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Campanhas 2023</Card.Title>
                        </Card.Header>
                        <Card.Img variant="top" onClick={() => navigate('/campanhas/2023')} style={{ cursor: 'pointer'}} src="https://www.mokeka.com.br/blog/wp-content/uploads/2023/07/campanha-publicitaria.jpg" />
                        <Card.Body>
                            <Card.Text>
                              Lista de todas as campanhas finalizadas de 2023.
                            </Card.Text>
                            <Col className="d-grid gap-2">
                                <Button variant="outline-primary" onClick={() => navigate('/campanhas/2023')}>Acessar campanhas</Button>
                            </Col>
                        </Card.Body>
                    </Card>

                </Col>
                              
            </Row>
        </Container>


    </>
  )
}

export default Campanhas