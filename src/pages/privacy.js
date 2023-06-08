import styled from 'styled-components'
import SEO from '../components/seo'
import React from 'react'
import Layout from '../layouts'
import { Container, Col, Row } from 'reactstrap';

const StyledTextContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blackWhite};
  margin-top: -110px;
  min-height: 90vh;
  padding: 1.2rem;
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
margin-bottom: 4rem;
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

const PrivacyPage = (props) => {
  return (
    <>
      <Layout path={props.location.pathname}>
        <SEO title='Polityka Prywatności' path={props.location.pathname} />
              <StyledTextContainer> 
                 <Container style={{paddingTop:80}}>
              <Title>Eko-Zakątek Polityka Prywatności</Title> 
              
              <Text>
              Niniejsza Polityka dotyczy plików "cookies” i odnosi się do stron internetowych na domenie eko-zakatek.pl
              <br/><br/>
              Pliki cookies (tzw. “ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym użytkownika i przeznaczone są do korzystania ze stron internetowych. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
              <br/><br/>
              Pliki cookies wykorzystywane są w celu:
              <br/><br/>
              dostosowania zawartości stron internetowych do preferencji użytkownika,
              <br/><br/>
              tworzenia statystyk, które pomagają zrozumieć, w jaki sposób użytkownicy korzystają ze stron internetowych,
              <br/><br/>
              utrzymanie sesji użytkownika (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie ponownie wpisywać loginu i hasła.
              <br/><br/>
              W ramach stron internetowych stosowane są dwa zasadnicze rodzaje plików cookies: “sesyjne” oraz “stałe”. Cookies “sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym użytkownika do czasu wyłączenia oprogramowania (przeglądarki internetowej).
              <br/><br/>
              “Stałe” pliki cookies przechowywane są w urządzeniu końcowym użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez użytkownika. W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym użytkownika. Użytkownicy stron internetowych mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej, bądź informować o ich każdorazowym zamieszczeniu w urządzeniu użytkownika stron internetowych. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania (przeglądarki internetowej). Operator Serwisu informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych.
              <br/><br/>
              Pliki cookies zamieszczane w urządzeniu końcowym użytkownika stron internetowych wykorzystywane mogą być również przez współpracujących z operatorem stron internetowych reklamodawców oraz partnerów.
              </Text>
        </Container>
      </StyledTextContainer>
      </Layout>  
    </>
  )
}

export default PrivacyPage