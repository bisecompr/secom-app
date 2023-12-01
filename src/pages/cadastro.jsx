import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import ApiBase from '../services/ApiBase';
import { useNavigate } from "react-router";


const Cadastro = () => {

  const navigate = useNavigate();
  
  //senha
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  


  function handleSubmit(event) {
      event.preventDefault();
      const novoUsuario = {
          nome: nome,
          email: email,
          senha: senha,
          cpf: cpf,
                    
      };
      addUsuario(novoUsuario);
    }
  
    function addUsuario(props) {
      const novoUsuario = {
          nome: `${props.nome}`,
          email: `${props.email}`,
          cpf: `${props.cpf}`,        
          senha: `${props.senha}`      
      };

      //mask
  
      ApiBase.post(`/user`, {novoUsuario}).then((response) =>
          alert("Cadastrado com sucesso!", window.location.reload(navigate('/login')))
        ).catch((error) => {
            alert(error.response.data.message)
            window.location.reload(false)
        })
      }
  
  
  
  return (
    <>
    <br />
      <Container>
        <Row>
          <Col>
          <Card>
                  <Card.Header align="center">
                    <h3 style={{fontFamily: "Great vibes"}}>Cadastro novo usuário</h3>
                  </Card.Header>
                  <Card.Body align="left">
                    <Card.Text>
                      <Form onSubmit={handleSubmit}>
                        <Container>
                          <Row>
                            <Col md={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                  autoFocus
                                  type="text"
                                  placeholder="Nome"
                                  value={nome}
                                  onChange={(e) => setNome(e.target.value)}
                                  required
                                />
                              </Form.Group>
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Email</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <FormControl
                                    type="email"
                                    placeholder="exemplo@email.com"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <Form.Label>CPF</Form.Label>

                                <Form.Control
                                    type="text"
                                    placeholder="CPF"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Senha</Form.Label>
                                <InputGroup className="mb-3">
                                    
                                    <FormControl
                                        type={passwordShown ? "text" : "password"}
                                        value={senha}
                                        placeholder="Senha"
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => setSenha(e.target.value)}
                                        required
                                    />
                                    <Button variant="outline-secondary" id="button-addon2" onClick={togglePassword}>
                                        Mostrar
                                    </Button>
                                </InputGroup>
                                
                            </Col>
                            
                            <br /><br /><br /><br />
                            
                            <Col className="d-grid gap-2">
                              <Button variant="success" type="submit" size="lg" >
                                Enviar dados
                              </Button>
                            </Col>
                          </Row>
                        </Container>
                      </Form>
                    </Card.Text>
                  </Card.Body>
                  
                </Card>
          
          </Col>
        </Row>
      </Container>
                
              
    
    </>  
  )
}

export default Cadastro