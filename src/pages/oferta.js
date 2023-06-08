import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import { Container, Row, Col } from 'reactstrap';


import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-top: 140px;
  margin-top: -110px;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const OfferPage = props => {

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="Oferta" path={props.location.pathname} />
      <StyledAbout>
        <Container>
          <Row>
          <Col md="4">          
          <div style={{}}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/svg%2FDreaming.svg?alt=media&token=ec38bffb-8011-49e8-8c65-21368d2ae468" alt="oferta" />
          </div>
          </Col>
          <Col md="4">
          <div style={{marginBottom:'60px'}}>
          <Title>Cennik</Title> 
                <h3>Domek North:</h3>
                  <ul>
                    <li>500 zł za nocleg dla 4-6 osób</li>
                    <li>400 zł za nocleg dla 3 osób</li>
                  </ul>

                  <h3>Domek South:</h3>
                      <ul>
                        <li>500 zł za nocleg dla 4-6 osób</li>
                        <li>400 zł za nocleg dla 3 osób</li>
                      </ul>

                      <h3>Mini Spa:</h3>
                      <ul>
                        <li>Sauna - 1 godzina w cenie</li>
                        <li>Jacuzzi - 1 godzina w cenie</li>
                      </ul>        
          </div>
          </Col>
          <Col md="4">
          <p>Zapewniamy wysoki standard usług oraz niezapomniane doświadczenia w otoczeniu przyrody. Ceny podane są za noclegi w naszych komfortowych domkach oraz za korzystanie z Mini Spa. Skontaktuj się z nami, aby sprawdzić dostępność i dokonać rezerwacji.</p>
          <p>Uwaga: W okresach szczególnie atrakcyjnych turystycznie, ceny mogą ulec zmianie. Zachęcamy do wcześniejszych rezerwacji, aby zapewnić sobie wymarzony pobyt.</p>
          <p>Jeśli masz jakiekolwiek pytania dotyczące naszego cennika lub innych usług, nie wahaj się skontaktować z naszym zespołem. Jesteśmy tutaj, aby uczynić Twój pobyt niezapomnianym!</p>
          </Col>
          </Row>
        </Container>

          <Gallery/>
          <Offer />
          <Contact />
          
      </StyledAbout>
    </Layout>
  )
      }
export default OfferPage
