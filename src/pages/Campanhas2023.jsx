import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Campanhas2023 = () => {

  return (
    <>
    <br />
      <Container>
        <Row className="g-4">

          <Col md={3}>
          
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias/2023/03/baixe-as-artes-oficiais-das-comemoracoes-ao-dia-internacional-da-mulher/2023_8m-artes_painel.jpg/@@images/ec51a5bd-35b3-4a72-b29b-2a4af0ea8730.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Dia Internacional da Mulher</Card.Title>
              <Card.Text>
                Início: 08/03/2023 <br/>
                Término: 31/03/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://bit.ly/dash_secom_mulheres', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias/2023/11/igualdade-racial-e-secom-integrarao-grupo-de-trabalho-para-promover-comunicacao-antirracista-na-administracao-publica-federal/copia-de-consciencia-negra_youtube_2560x1440px.png/@@images/6d18b55a-03e8-41ba-a4a0-cfdffcd5075b.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Igualdade Racial</Card.Title>
              <Card.Text>
                Início: 21/03/2023 <br/>
                Término: 26/03/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="danger" disabled>Sem Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/02/chuvas_litoral_sp_fev_2023-10.jpg?w=732&h=412&crop=1')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Enfrentamento ao desastre SP</Card.Title>
              <Card.Text>
                Início: 21/03/2023 <br/>
                Término: 31/03/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="danger" disabled>Sem Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias/2023/03/governo-federal-lanca-grupo-de-trabalho-para-sanar-efeitos-da-estiagem-no-rs/230313_secom_impactos-da-seca-no-rs_foto-marcelocamargo-agbr.jpg/@@images/4f30f3da-8b79-4834-96ac-625ec0333f61.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Estiagem no RS</Card.Title>
              <Card.Text>
                Início: 24/03/2023 <br/>
                Término: 12/04/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="danger" disabled>Sem Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/fatos/brasil-contra-fake/quem-espalha-fake-news-espalha-destruicao-1/banner_2_1148x598px.png/@@images/dbe41824-1fad-421c-b416-73811465c55d.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Combate a Fake News</Card.Title>
              <Card.Text>
                Início: 26/03/2023 <br/>
                Término: 23/04/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="danger" disabled>Sem Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias/2023/02/missao-yanomami-governo-federal-segue-com-acoes-de-socorro-na-regiao/Yanomamis1.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Yanomami</Card.Title>
              <Card.Text>
                Início: 26/03/2023 <br/>
                Término: 23/04/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="danger" disabled>Sem Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/obrasilvoltou/imagens/header/linebannera/@@images/image')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Posicionamento (100 dias)</Card.Title>
              <Card.Text>
                Início: 08/04/2023 <br/>
                Término: 15/05/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://app.powerbi.com/view?r=eyJrIjoiNzgxM2RiYWYtZTY2MC00YzU5LWJlODItYTIxMmJmMjJiYzk1IiwidCI6ImZhODFlZTU5LWZlMTMtNDk2YS1hMWFhLTAzOTYxMDMxYzA1NyJ9', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2023/maio/governo-federal-lanca-campanha-para-desmistificar-informacoes-sobre-o-imposto-de-renda/irpf-2023-banner-site_prancheta-1.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>IRPF</Card.Title>
              <Card.Text>
                Início: 08/05/2023 <br/>
                Término: 27/05/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://lookerstudio.google.com/reporting/2134c27a-5fba-40ba-99a9-b916b14297ed/page/p_zir2psudtc', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secretariageral/pt-br/desintrusao-tiatb/imagens/Operacao.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }} 
            />
            <Card.Body>
              <Card.Title>Desintrusão Terras Indígenas</Card.Title>
              <Card.Text>
                Início: 12/05/2023 <br/>
                Término: 31/05/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="danger" disabled>Sem Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias/2023/05/governo-abre-dialogo-com-a-sociedade-para-definicao-de-politicas-publicas-para-os-proximos-quatro-anos/ppa.jfif/@@images/45424227-6a8b-4b6f-9a5e-1373a10ddb16.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }} 
            />
            <Card.Body>
              <Card.Title>PPA PARTICIPATIVO</Card.Title>
              <Card.Text>
                Início: 10/05/2023 <br/>
                Término: 14/07/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://app.powerbi.com/view?r=eyJrIjoiZDI1YTlkZjEtNTQ1YS00ODc2LWFlMmMtZjJhODc4ZGViYjE3IiwidCI6IjliZTY0ZGY2LTc3MDItNDljYy04NzU0LWQ5MmI2NmU2OWQ4YSJ9', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://pbs.twimg.com/media/Fwayw6HaQAIemz9.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Combate ao Abuso e Exploração Sexual infantil</Card.Title>
              <Card.Text>
                Início: 18/05/2023 <br />
                Término: 06/06/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://app.powerbi.com/view?r=eyJrIjoiZmI5OTRlZTgtYzdiMy00ZTJmLTgyZDktODcxMWY0ZjAyYTI3IiwidCI6ImZhODFlZTU5LWZlMTMtNDk2YS1hMWFhLTAzOTYxMDMxYzA1NyJ9', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://josiasgomes.com.br/wp-content/uploads/2023/05/IMG-20230524-WA0024.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Combate a Violência nas Escolas</Card.Title>
              <Card.Text>
                Início: 26/05/2023 <br />
                Término: 15/06/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://app.powerbi.com/view?r=eyJrIjoiOTY4OWE5ODQtMjI1Zi00ZjQyLThiNmUtM2FiOTk4NDFjODllIiwidCI6IjliZTY0ZGY2LTc3MDItNDljYy04NzU0LWQ5MmI2NmU2OWQ4YSJ9', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias-regionalizadas/lei-paulo-gustavo/lei-paulo-gustavo-tem-r-42-6-milhoes-destinados-ao-setor-cultural-de-rondonia/230510_lpg_banner.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>LEI PAULO GUSTAVO</Card.Title>
              <Card.Text>
                Início: 21/06/2023 <br />
                Término: 11/07/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://lookerstudio.google.com/u/0/reporting/06845a33-9df8-4c11-b7ed-e197f3f48dd0/page/p_fi2iax1g7c', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://agenciadenoticias.ms.gov.br/wp-content/uploads/2023/07/Parque-Estadual-das-Varzeas-do-Rio-Ivinhema-Foto-Bruno-Rezende-03-730x480.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Queimadas Bioma Pantanal</Card.Title>
              <Card.Text>
                Início: 21/06/2023 <br />
                Término: 11/07/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://app.powerbi.com/view?r=eyJrIjoiMzJkNmI2MTEtMjc2ZC00N2Y3LWJlMmQtYzUwZDBkMDIwZjU0IiwidCI6IjliZTY0ZGY2LTc3MDItNDljYy04NzU0LWQ5MmI2NmU2OWQ4YSJ9', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2023/junho/ministerio-do-trabalho-e-emprego-lanca-campanha-de-combate-ao-trabalho-analogo-a-escravidao/capturar.png/@@images/b2984beb-529d-4dd6-a187-a3d2a41351e3.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Combate ao Trabalho Escravo</Card.Title>
              <Card.Text>
                Início: 15/06/2023 <br />
                Término: 30/06/2023
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://lookerstudio.google.com/reporting/f1fd9c6f-bff8-43e5-a5c7-e7d411427978', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/esporte/pt-br/acoes-e-programas/futebol-feminino/v2_bannerdestaque_1130x753px.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Futebol Feminino</Card.Title>
              <Card.Text>
                Início: 28/07/2023 <br />
                Término: 06/08/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://app.powerbi.com/view?r=eyJrIjoiMzRlMzMwMzUtZjM2Zi00NzA1LWI4YjgtYWIzNmYwMjk4MjI1IiwidCI6ImZhODFlZTU5LWZlMTMtNDk2YS1hMWFhLTAzOTYxMDMxYzA1NyJ9', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2023/07/brasil-recebe-encontros-internacionais-para-debater-futuro-da-amazonia/31072023_dialogos32.jpeg/@@images/2e5bdb78-34e8-468b-8e13-ba8a0ec2e1b8.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Cúpula da Amazônica</Card.Title>
              <Card.Text>
                Início: 28/07/2023 <br />
                Término: 13/08/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://lookerstudio.google.com/reporting/1f18dc67-99ee-4ba3-bc98-dd9a3534fdfa/page/p_x472salv7c', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias/2023/09/governo-lanca-campanha-publicitaria-do-plano-safra-e-incentiva-agro-produtivo-e-sustentavel/09092023_plano_safra_campanha32.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }} 
            />
            <Card.Body>
              <Card.Title>PLANO SAFRA (MDA)</Card.Title>
              <Card.Text>
                Início: 10/08/2023 <br />
                Término: 31/08/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://app.powerbi.com/view?r=eyJrIjoiOWRhMTMwZmUtOWZlMS00Mzg4LTlmMDYtODY0MWJhYTJiZDlkIiwidCI6IjliZTY0ZGY2LTc3MDItNDljYy04NzU0LWQ5MmI2NmU2OWQ4YSJ9', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/mulheres/pt-br/central-de-conteudos/campanhas/2023/campanha-nacional-agosto-lilas/agosto-lilas/@@govbr.institucional.banner/d04aede6-0213-4f76-8dcf-64e37d958093/@@images/4119050f-e9a0-4521-9930-ad952eb226a3.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'left',
              }} 
            />
            <Card.Body>
              <Card.Title>Agosto Lilás</Card.Title>
              <Card.Text>
                Início: 21/08/2023 <br />
                Término: 12/09/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://bit.ly/dash_secom_agostolilas', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://alemdatela.com/wp-content/uploads/2023/07/canalgov_tvbrasil_secom-Large.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Canal GOV</Card.Title>
              <Card.Text>
                Início: 12/08/2023 <br />
                Término: 15/09/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://lookerstudio.google.com/reporting/44be228c-2121-4212-8963-7058a2a68823', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://alemdatela.com/wp-content/uploads/2023/07/canalgov_tvbrasil_secom-Large.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Canal GOV</Card.Title>
              <Card.Text>
                Início: 12/08/2023 <br />
                Término: 15/09/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://lookerstudio.google.com/reporting/44be228c-2121-4212-8963-7058a2a68823', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/secom/pt-br/assuntos/noticias/2023/08/governo-realiza-desfile-comemorativo-ao-7-de-setembro/230829_secom_sete-de-setembro.jpg/@@images/e7e1197d-1e57-4e77-a647-f652ea70b374.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>7 de setembro</Card.Title>
              <Card.Text>
                Início: 01/09/2023 <br />
                Término: 06/09/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="danger" disabled>Sem Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://informaparaiba.com.br/wp-content/uploads/2023/07/d64fb482129d882696e9598e5a73b071_post_large.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>PLANO SAFRA (MAPA)</Card.Title>
              <Card.Text>
                Início: 12/09/2023 <br />
                Término: 30/09/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://bit.ly/dash_secom_safrao', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>

          <Col md={3}>
           <Card>
           <div
              style={{ 
                width:'100%',
                height:"210px",
                borderRadius: '5px',
                backgroundImage: `url('https://www.gov.br/mdh/pt-br/assuntos/noticias/2023/setembro/conselho-tutelar-participe-das-eleicoes-no-dia-1o-de-outubro-e-contribua-para-o-bem-estar-das-criancas-e-adolescentes-do-brasil/99fb0eee-fcba-4d7a-a93c-6f0b3abbc706.jpeg/@@images/ccffd1ac-a6a3-47cf-86d9-4204fedefe1a.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
            />
            <Card.Body>
              <Card.Title>Conselhos Tutelares</Card.Title>
              <Card.Text>
                Início: 20/09/2023 <br />
                Término: 30/09/2023 
              </Card.Text>
              <Col className="d-grid gap-2">
                  <Button variant="primary" onClick={()=> window.open('https://lookerstudio.google.com/u/0/reporting/ed2831b3-152b-4417-a270-55fd9c54495e', '_blank')}>Acessar Dashboard</Button>
               </Col>
            </Card.Body>
          </Card>          
          </Col>



        </Row>
      </Container>

    </>
  )
}

export default Campanhas2023