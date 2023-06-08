import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';

import Contact from '../components/contact';

import Layout from '../layouts';
import SEO from '../components/seo';

const WorkshopContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blackWhite};
  padding: 1.2rem;
  margin-top: -110px;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-bottom: 4rem;
  font-size: 2rem;
  white-space: nowrap;
  overflow-wrap: normal;
  max-width: 1200px;

  @media (min-width: 960px) {
    font-size: 3.6rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.img`
  border-radius: 10px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    object-fit: cover;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Topic = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;


const WarsztatyPage = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <SEO title="Warsztaty" path={props.location.pathname} />
      <WorkshopContainer>
        <Container style={{paddingTop:100}}>
          <Title>Warsztaty</Title>
          <Section>
            <Row>
              <Col xs="12" lg="6">
                <Image
                  src="https://pliki.sadyogrody.pl/i/03/19/65/031965_r0_980.jpg"
                  alt="Workshop 1"
                />
              </Col>
              <Col xs="12" lg="6">
                <Topic>Warsztaty tematyczne</Topic>
                <Text>
                W naszym eko zakątku oferujemy nie tylko wyjątkowy wypoczynek wśród natury, ale również tematyczne warsztaty, dedykowane szczególnie kobietom w trudnych chwilach życiowych.<br/><br/>
                Pragniemy stworzyć przestrzeń, w której możesz znaleźć wsparcie, odnaleźć równowagę i rozwijać się zarówno duchowo, jak i emocjonalnie. Nasze warsztaty obejmują różnorodne tematy, takie jak medytacja, jogę, sztukę terapeutyczną, a także inne praktyki i techniki, które pomagają odnaleźć spokój i siłę wewnętrzną.<br/><br/>
                Zapraszamy Cię do odkrycia siły i potencjału, który tkwi w Tobie. Przyjdź do naszego eko zakątka i dołącz do naszych warsztatów, aby poszerzyć swoją wiedzę, znaleźć inspirację i zbudować więź z silną społecznością kobiet. Razem możemy pokonać trudności i wspólnie rozwijać się na drodze do pełniejszego i bardziej harmonijnego życia.
                </Text>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row>
              <Col xs="12" lg="6">
                <Topic>Joga</Topic>
                <Text>
                Podczas naszych warsztatów jogi, doświadczysz doskonałego połączenia ruchu, 
                oddechu i medytacji. Prowadzone przez doświadczonych instruktorów, zajęcia dopasowane są zarówno 
                dla początkujących, jak i zaawansowanych praktykujących. Odkryj moc i spokój, jakie płyną z 
                praktyki jogi, i naucz się narzędzi do codziennego odprężenia i równowagi.
                </Text>
              </Col>
              <Col xs="12" lg="6">
                <Image
                  src="https://i.wpimg.pl/730x0/m.fitness.wp.pl/shutterstock-207304351-bed1e0013.jpg"
                  alt="Workshop 2"
                />
              </Col>
            </Row>
          </Section>
        </Container>
      </WorkshopContainer>
      {/* <Contact /> */}
    </Layout>
  );
};

export default WarsztatyPage;