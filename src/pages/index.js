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
  }
`

const StyledTradeLink = styled.a`
  cursor: pointer;
  padding: 0.7rem 0.95rem;
  background-color: ${({ theme }) => theme.textColor};
  background: linear-gradient(128.17deg,#36c557 -14.78%,#114426 110.05%);
  text-decoration: none;
  color: white;
  border-radius: 22px;
  display: inline-block;
  font-weight: 500;
  width: 100%;
  overflow-wrap: normal;
  width: min-content;
  white-space: wrap;
  margin-left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  :hover,
  :focus {
    border: 1px solid white;
    color: white;
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

        <div style={{
          backgroundImage: `url("https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg")`,
          height: '70vh',
          width: '100%',
          marginTop: '-80px',
          position: 'relative',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // marginBottom: 60,
        }}>
          <div style={{ zIndex: 1, position: 'absolute', top: 0, width: '100%' }}>
          <Title>
          Escape to an eco-friendly oasis is more than just a catchy slogan.
          </Title>
            <StyledTradeLink>
             <div className="" onClick={scrollToBottom}>
              Rezerwuj!
             </div>
            </StyledTradeLink>
            </div>

          <div style={{
            height: '100%',
            width: '100%',
            background: 'black',
            opacity: 0.8,
            position: 'absolute',
            top: 0,
        }}>
            
          </div>
        </div>
        <BrandInfo />
        <Offer />
        <Contact />
     </StyledBody>
    </Layout >
  )
}

export default IndexPage
