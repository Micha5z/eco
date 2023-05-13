import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';

import Contact from '../components/contact';

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const Title = styled.h1`
  margin-bottom: 4rem;
  font-size: 72px;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const Section = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  // align-items: center;
  // justify-content: space-between;
  // margin: 4rem 0;
  // max-width: 1200px;

  // @media (max-width: 768px) {
  //   flex-direction: column;
  // }
`;

const Image = styled.img`
  width: 100%;
  // max-width: 80%;
  // height: auto;
  // margin: 0 auto;
  // transform: translateX(0%);
  border-radius: 10px;

  // &.fade-left {
  //   transition: opacity 1s ease-out;
  //   opacity: 0;  
  // }

  // &.fade-right {
  //   transition: opacity 1s ease-out;
  //   opacity: 0;
  //   }
  

  //   &.fade-left.animate {
  //     opacity: 1;
  //         }
    
  //     &.fade-right.animate {
  //       opacity: 1;
  //     } 
      
  //     @media (max-width: 768px) {
  //   // max-width: 100%;
  // }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const WarsztatyPage = props => {
  
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const leftImage = leftImageRef.current;
    const rightImage = rightImageRef.current;

    const handleScroll = () => {
      const leftImageTop = leftImage.getBoundingClientRect().top;
      const rightImageTop = rightImage.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (leftImageTop < windowHeight / 2) {
        leftImage.classList.add('animate');
      }

      if (rightImageTop < windowHeight / 2) {
        rightImage.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO title="Workshops" path={props.location.pathname} />
        <Container >
        <Title>Warsztaty</Title>  
    <Section>
      <Row style={{ columnGap: 40, width: '100%', margin: 0, padding: 0 }}>
        <Col style={{ padding: 0 }}>
          <Image
            src="https://pliki.sadyogrody.pl/i/03/19/65/031965_r0_980.jpg"
            alt="Workshop 1"
            ref={leftImageRef}
            // className="fade-left animate"
          />
        </Col>
        <Col style={{ padding: 0 }}>
        <h2>Warsztaty tematyczne</h2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            eros convallis, pulvinar quam eu, molestie urna. Vivamus sit amet
            nibh at ipsum aliquam blandit a a mi.
          </Text>
        </Col>
      </Row>
    </Section>
    <Section>
      <Row style={{ columnGap: 40, width: '100%', margin: 0, padding: 0 }}>
        <Col style={{ padding: 0 }}>
        <h2>Joga</h2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            eros convallis, pulvinar quam eu, molestie urna. Vivamus sit amet
            nibh at ipsum aliquam blandit a a mi.
          </Text>
        </Col>
        <Col style={{ padding: 0 }}>
          <Image
            src="https://i.wpimg.pl/730x0/m.fitness.wp.pl/shutterstock-207304351-bed1e0013.jpg"
            alt="Workshop 2"
            ref={rightImageRef}
            // className="fade-right animate"
            // style={{
            //   float:'right'
            // }}
          />
        </Col>
      </Row>
    </Section>
  </Container>
    <Contact />
    </Layout>
  )
}

export default WarsztatyPage
