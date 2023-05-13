import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Massage from '../images/massage.svg'
import Trip from '../images/trip.svg'
import Bakery from '../images/bakery.svg'

const BrandInfoContainer = styled.div`
background-color: #f5f5f5;
padding: 2rem;

.button {
  float: right;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #114426;
  transition: all 1000ms;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
  outline: 2px solid #114426;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #114426;
  box-shadow: 4px 5px 17px -4px #114426;
}

button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #114426;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.brand-info__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    flex: 1;
    width: fit-content;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
    max-height: 235px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: #207216;
    font-weight: bold;

  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: #207216;
    margin-bottom: 3rem;
  }
}
`;
const StyledTradeLink = styled(Link)`
  cursor: pointer;
  padding: 0.7rem 0.95rem;
  background-color: ${({ theme }) => theme.textColor};
  // background: linear-gradient(128.17deg,#36c557 -14.78%,#114426 110.05%);
  background: transparent;
  text-decoration: none;
  color: #0e5006;
  border-radius: 22px;
  display: inline-block;
  font-weight: 700;
  width: 100%;
  overflow-wrap: normal;
  width: min-content;
  white-space: wrap;
  margin-bottom: 30px;
  float: right;
  // border: 1px solid #0e5006;
  box-shadow: ${({ theme }) => theme.shadows.small};
  :hover,
  :focus {
    outline: 1.5px solid #0e5006;
    color: #0e5006;

  }
`

const StyledTradeLink2 = styled.a`
  cursor: pointer;
  padding: 0.7rem 0.95rem;
  background-color: ${({ theme }) => theme.textColor};
  // background: linear-gradient(128.17deg,#36c557 -14.78%,#114426 110.05%);
  background: transparent;
  text-decoration: none;
  color: #0e5006;
  border-radius: 22px;
  display: inline-block;
  font-weight: 700;
  width: 100%;
  overflow-wrap: normal;
  width: min-content;
  white-space: wrap;
  margin-bottom: 30px;
  float: right;
  // border: 1px solid #0e5006;
  box-shadow: ${({ theme }) => theme.shadows.small};
  :hover,
  :focus {
    outline: 1.5px solid #0e5006;
    color: #0e5006;

  }
`


function BrandInfo() {
    return (
      <BrandInfoContainer>
        <Container>
          <Row>
            <Col style={{position:'relative'}} sm="4">
              <div className="brand-info__item">
                <img 
                img src={Trip} alt="trip" />
                <div>
                  <h3>Wypoczynek z całą rodziną</h3>
                  <p>Zrelaksuj się w naszych górskich domkach i ciesz się niezapomnianym wypoczynkiem z całą rodziną. Odkryj uroki przyrody i twórz niezapomniane wspomnienia, które będą ciepło Was otaczać.</p>
                </div>
              </div>
              {/* <a class ="button" href="/about">Więcej</a> */}
              {/* <StyledTradeLink2 href="/noclegi">
              Więcej
            </StyledTradeLink2> */}
            <button className="button">
              Więcej
            </button>
            </Col>
            <Col style={{position:'relative'}} sm="4">
              <div className="brand-info__item">
                <img src={Massage} alt="massage" />
                <div>
                  <h3>Zero Waste</h3>
                  <p>W Eko Zakątku promujemy zrównoważony styl życia i zero waste. Naucz się praktycznych sposobów minimalizowania odpadków i twórz pozytywny wpływ na środowisko.</p>
                </div>
              </div>
              {/* <StyledTradeLink to="/zeroWaste">
             <div className="">
              Więcej
             </div>
            </StyledTradeLink> */}
            <button className="button">
              Więcej
            </button>
            </Col>
            <Col style={{position:'relative'}} sm="4">
              <div className="brand-info__item">
                  <img src={Bakery} alt="bakekry-training" />               
                   <div>
                  <h3>Warsztaty</h3>
                  <p>Rozwijaj swoje pasje i zdobywaj nowe umiejętności na naszych inspirujących warsztatach. Dołącz do nas, aby czerpać kreatywną energię i odkrywać tajniki ekologicznego stylu życia.</p>
                </div>
              </div>
              {/* <StyledTradeLink to="/warsztaty">
             <div className="">
              Więcej
             </div>
            </StyledTradeLink> */}
            <a href="https://www.eko-zakatek.pl/warsztaty">           
            <button className="button">
              Więcej
            </button> 
            </a>
            </Col>
          </Row>
        </Container>
      </BrandInfoContainer>
    );
  }
  
  export default BrandInfo;