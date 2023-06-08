import styled from 'styled-components'
import SEO from '../components/seo'
import React from 'react'
import Layout from '../layouts'
import { Container, Col, Row } from 'reactstrap';

const StyledTextContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blackWhite};
  margin-top: -110px;
  padding: 1.2rem;
  min-height: 90vh;
`
const Text = styled.p`
font-size: 1.2rem;
line-height: 1.5;
text-align: left;

@media (min-width: 768px) {
  text-align: left;
}
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
const Pointer = styled.p`
margin-bottom: 1rem;
font-size: 1.5rem;
overflow-wrap: normal;
max-width: 1200px;

@media (min-width: 960px) {
  font-size: 2rem;
}
  
`;

const RulesPage = (props) => {
  return (
    <>
      <Layout path={props.location.pathname}>
        <SEO title='Zasady' path={props.location.pathname} />
              <StyledTextContainer> 
                 <Container style={{paddingTop:140}}>
              <Title>Regulamin obiektu</Title> 
                  <Text>
• Obowiązuje całkowity zakaz palenia we wszystkich domkach
</Text>
<Text>• Zakaz używania w domkach otwartego ognia – świeczki, lampki
naftowe, gazowe itd.</Text>
<Text>• Zakaz używania własnych kuchenek elektrycznych i gazowych, oraz
grzałek elektrycznych</Text>
<Text>• Odwiedziny osób niezameldowanych w domkach – wyłącznie po
wcześniejszym poinformowaniu recepcji, i tylko w godzinach od
8:00 do 22:00</Text>
<Text>• Dzieci i młodzież mogą przebywać w domach tylko pod opieką
dorosłych</Text>
<Text>• Bezwzględna cisza nocna obowiązuje w godz. 22:00 - 06:00</Text>
<Text>• Zakaz urządzania imprez w domkach</Text>
<Text>• jesteśmy przyjaźnie nastawieni dla zwierząt ale prosimy o i sprzątanie
nieczystości po swoich pupilach</Text>
<Text>• Podczas pobytu w osadzie będą państwo mogli bezpłatnie godzinę
dziennie korzystać z jacuzzi lub sauny. Prosimy o uzgodnienie z
nami terminów</Text>
        </Container>
      </StyledTextContainer>
      </Layout>  
    </>
  )
}

export default RulesPage