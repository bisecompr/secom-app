import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { Card, Col, Container, FloatingLabel, InputGroup, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

import ApiBase from "../services/ApiBase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  //loading
  const [showLoader, setShowLoader] = useState(false)
  const onSubmit = () => {
    setShowLoader(true)
  }

  const navigate = useNavigate(); 

  function validateForm() {
    return email.length > 0 && senha.length > 0;
  }


  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
      setPasswordShown(!passwordShown);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      senha: senha
    }
    login(data)
  }

  const login = data => {

    console.clear();
    console.log(data);  
    
    ApiBase.post('/login', {data})
        .then((result) => {
          
          console.log(result)
          sessionStorage.setItem('_id', result.data.user._id)
          sessionStorage.setItem('token', result.data.token)
          sessionStorage.setItem('_role', result.data.user._role)
          sessionStorage.setItem('email', result.data.user.email)
          console.log('Resultado: ', result.data);

          
          if (result.data.user._role === 'Admin'){
            window.location.reload(navigate('/benchmark'))
          }
          
        }).catch((error) => {
          alert(error.response.data.message)
          window.location.reload(navigate('/login'))
        })
       
  }

  return (
    <>
      
      <Container>
        <br />
        
        <Row className="row d-flex justify-content-center">
            <Col className="col-md-6">
            <Card border="dark">

              <Card.Header>


                <h3 style={{fontFamily: "Great vibes"}}>LOGIN BENCHMARK SECOM</h3> 
              </Card.Header>
              <Card.Body>
          <br />

                <Form onSubmit={handleSubmit}>
                  <FloatingLabel controlId="email" label="Email:" className="col-md-12">
                          <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  </FloatingLabel>
          <br />
                                         
                          <div>
                            <InputGroup controlId="password" className="md-3">
                              <FloatingLabel controlId="senha" label="Senha:" className="w-75">
                                <Form.Control type={passwordShown ? "text" : "password"} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha:"/>
                              </FloatingLabel>

                              <Button variant="outline-secondary" id="button-addon2" onClick={togglePassword}>
                                        Mostrar
                              </Button>
                            </InputGroup>
                          </div>
                      
          <br />
                  <Container>
                    <Row className="row d-flex justify-content-center">
                      <Col md={4}>
                        <div className="d-grid">
                          <Button type="submit" disabled={!validateForm()} onClick={onSubmit}>
                            {!showLoader ? 'Entrar' : <Spinner animation="border" />}
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <br />

                  <Container>
                    <Row className="row d-flex justify-content-center">
                      <Col md={4}>
                        <div className="d-grid">
                          <Button variant="danger" onClick={() => navigate('/cadastro')}>
                            Cadastrar
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              </Card.Body>
            </Card>

            </Col>

        </Row>

      </Container>
    </>
    
  );
}