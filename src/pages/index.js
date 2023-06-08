import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from "../components/bg"
// import { UncontrolledCarousel } from 'reactstrap';
import BrandInfo from '../components/infoSection';
import Offer from '../components/offerSection';
import Contact from '../components/contact';
import Slider from '../components/slider';
import 'bootstrap/dist/css/bootstrap.css';

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  // @media (max-width: 960px) {
  //   margin-bottom: 0;
  // }
`;

const items = [
  {
    src: 'https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg',
        altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg',
        altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg',    
        altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  margin-bottom: 2rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  padding-top: 200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  margin-top: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    padding-top: 150px;
  }
`
const SubTitle = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  margin-top: 20px;

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
`

const StyledTradeLink = styled.a`
  display: block;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1rem;
  padding: 1.2rem 1.7rem;
  background-color: ${({ theme }) => theme.textColor};
  background: linear-gradient(269deg,#36c557 -14.78%,#114426 110.05%);
  text-decoration: none;
  color: white;
  border-radius: 55px;
  font-weight: 600;
  width: 100%;
  overflow-wrap: normal;
  width: min-content;
  white-space: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  :hover,
  :focus {
    border: 1px solid white;
    color: white;
  }
`

const BGImage = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/oferta_domkow_zdj%2Fbaner2.webp?alt=media&token=778ca00c-8c45-45f9-a109-d08af8c833fd");
  // height: 70vh;
  width: 100%;
  margin-top: -110px;
  position: relative;
  // background-attachment: fixed;
  min-height: 480px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 961px) {
    background-attachment: fixed;
  }
`

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

const IndexPage = props => {
  return (
    <Layout path={props.location.pathname}>
      <SEO title='Wynajem domków Ostry' path={props.location.pathname} description='Wynajmij swój eko domek' />
      <BG />
      <StyledBody>
       {/* <StyledCarouselContainer>
         <FullWidthCarousel items={items} />
        </StyledCarouselContainer> */}
        {/* <Slider /> */}
        <BGImage>
          <div style={{ zIndex: 1, position: 'absolute', top: 0, width: '100%' }}>
            <Title>
            Twój górski azyl czeka na Ciebie!
            </Title>
            <SubTitle>Wynajmij wyjątkowy domek w Eko Zakątku i poczuj<br/>magię natury!</SubTitle>
            <StyledTradeLink onClick={scrollToBottom}>
              Rezerwuj
            </StyledTradeLink>
          </div>
          <div style={{
            height: '100%',
            width: '100%',
            background: 'black',
            opacity: 0.6,
            position: 'absolute',
            top: 0,
          }}>
          </div>
        </BGImage>
        <Offer />
        <BrandInfo />
        <Contact />
     </StyledBody>
    </Layout >
  )
}

export default IndexPage
