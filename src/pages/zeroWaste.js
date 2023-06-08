import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Container, Col, Row } from 'reactstrap';

const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
`
const Title = styled.h1`
margin-bottom: 2.2rem;
font-size: 2rem;
overflow-wrap: normal;
max-width: 1200px;

@media (min-width: 960px) {
  font-size: 3.6rem;
}
`
const StyledTextContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blackWhite};
  margin-top: -110px;
  padding: 1.2rem;
  min-height: 90vh;

  @media (max-width: 960px) {
    text-align: center;
  }
`
const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ZeroWastePage = props => {

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="Zero Waste" path={props.location.pathname} />
      <StyledTextContainer>
      <Container style={{paddingTop:100}}>
      <Title>Zero Waste</Title>
      <h2 style={{paddingTop:10, paddingBottom:20}}>Witamy w świecie zero waste i zrównoważonego stylu życia!</h2>
        <Text>Filozofia zero waste to podejście, które dąży do minimalizacji wytwarzania odpadów i maksymalnego wykorzystania zasobów. Wierzymy, że każdy ma moc wpływu na ochronę naszej planety poprzez podejmowanie świadomych decyzji w codziennym życiu. </Text>
        <Text>W naszych domkach kładziemy duży nacisk na zrównoważone praktyki, aby zapewnić Ci wyjątkowe doświadczenie w zgodzie z naturą. Wyposażyliśmy nasze domki w ekologiczne produkty i rozwiązania, które minimalizują nasz wpływ na środowisko. Oferujemy selektywne kosze na śmieci, ekologiczne środki czystości oraz zachęcamy do oszczędnego korzystania z wody i energii.
        </Text>
        <Text>Chcemy Cię także inspirować do podejmowania działań zero waste w swoim codziennym życiu. Na naszych warsztatach i wydarzeniach tematycznych dzielimy się praktycznymi poradami dotyczącymi minimalizmu, recyklingu, kompostowania i wielu innych aspektów zrównoważonego stylu życia. Wierzymy, że małe zmiany w nawykach mogą mieć ogromny wpływ na naszą planetę. </Text>
        <Text>Przyjdź do nas i doświadcz wyjątkowego wypoczynku wśród natury, jednocześnie ucząc się, jak chronić środowisko i zmniejszać ilość wytwarzanych odpadów. Zostań częścią społeczności, która dąży do tworzenia pozytywnych zmian i wspólnie budujmy lepszą przyszłość. </Text>
        <Text>Dołącz do naszej filozofii zero waste i odkryj, jak małe działania mogą mieć wielki wpływ!
        </Text>
      </Container>

      </StyledTextContainer>
    </Layout>
  )
      }
export default ZeroWastePage
