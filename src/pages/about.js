import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';
import { Container, Col, Row } from 'reactstrap';
import Contact from '../components/contact';


import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const StyledAbout = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.colors.blackWhite};
  padding: 0rem 0rem 6rem 0;
  margin-top: -110px;
  
  // min-height: 90vh;
`

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 42px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  // text-align: center; 
  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
`
const Text = styled.p`
  // margin-bottom: 4rem;
  // text-align: center; 
  font-size: 1.2rem;
  pointer-events: none;

  @media (max-width: 960px) {
    font-size: 1rem;
  }
`

const AboutPage = props => {

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
        <Container style={{paddingTop:140}}>
          <Title>Witamy w naszym ekologicznym zakątku</Title>
                <Text>
                Jesteśmy zespołem pasjonatów, których połączyła miłość do natury i troska o środowisko. Nasza misja to stworzenie wyjątkowego miejsca, gdzie możesz odpocząć w harmonii z przyrodą i cieszyć się pełnym komfortem.
                </Text>
                <Text style={{fontWeight: '900'}}>
                Wierzymy w moc prostoty i autentyczności. Nasze domki z zielonym dachem to oaza spokoju, oddalona od zgiełku miasta. Projektujemy je tak, aby zapewnić Ci wygodę i swobodę w pięknych okolicznościach przyrody.                </Text>
                <Text>
                U nas znajdziesz wszystko, czego potrzebujesz, aby poczuć się jak w domu. Nasze domki są w pełni wyposażone, oferują dostęp do bezprzewodowego internetu i mają aplikację mobilną, która ułatwia kontakt z nami. Pościel, ręczniki, a nawet miejsce na ognisko i grill - wszystko jest tu dla Ciebie.                </Text>
                <Text style={{fontWeight: '900'}}>
                Ale to nie wszystko! Jesteśmy otwarci na rozwijanie się i dzielenie się wiedzą. Dlatego organizujemy różnorodne warsztaty tematyczne, takie jak joga, filozofia zero waste czy warsztaty kulinarne. To doskonała okazja, aby poszerzyć horyzonty, spotkać ciekawych ludzi i zdobyć nowe umiejętności.
                </Text>
                <Text>
                Dołącz do nas i zanurz się w wyjątkowej atmosferze naszego ekologicznego zakątka. Odkryj magię natury, wypoczywaj w pełni komfortowych domkach i ciesz się niezapomnianymi chwilami w otoczeniu pięknych krajobrazów.                </Text>
                <Text style={{fontWeight: '900'}}>
                Nie czekaj dłużej - zapraszamy Cię na niezapomniany ekologiczny wypoczynek w naszych domkach!
                </Text>
        </Container>
          {/* <Offer /> */}
      </StyledAbout>
      <Contact />
    </Layout>
  )
      }
export default AboutPage
