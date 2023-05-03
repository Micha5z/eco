import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
`

const Title = styled.h1`
  /* font-size: 3rem; */
  margin-bottom: 4rem;
  font-size: 72px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const AboutPage = props => {

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
      
      <div style={{
          backgroundImage: `url("https://www.linguahouse.com/linguafiles/md5/d78bdd727a607ba439f19f061e67cd8f")`,
          height: '70vh',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: '-80px',
          // marginBottom: 60,
        }}>
          <div style={{
          height: '100%',
          width: '100%',
          background: 'black',
          opacity: 0.8,
        }}>
          <Title style={{ paddingBottom: '4rem' }}>
           simple new page 
          </Title>
          </div>
        </div>
 
          <Offer />
      </StyledAbout>
    </Layout>
  )
      }
export default AboutPage
