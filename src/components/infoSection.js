import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';


const BrandInfoContainer = styled.div`
background-color: #e2ffe3;
padding: 6rem 0;

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
  bottom: 5px;
  right: 15px;
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
    color: #154010;
    font-weight: bold;

  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: #154010;
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
                <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/svg%2FFamily%20going%20on%20a%20trip.svg?alt=media&token=c640b7ec-952e-4beb-b7dc-0e805c24a090" alt="trip" />
                <div>
                  <h3>Wypoczynek z całą rodziną</h3>
                  <p>Zrelaksuj się w naszych górskich domkach i ciesz się niezapomnianym wypoczynkiem z całą rodziną. Odkryj uroki przyrody i twórz niezapomniane wspomnienia, które będą ciepło Was otaczać.</p>
                </div>
              </div>
            <a href="https://www.eko-zakatek.pl/oferta">
            <button className="button">
              Więcej
            </button>
            </a>
            </Col>
            <Col style={{position:'relative'}} sm="4">
              <div className="brand-info__item">
                <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/svg%2FInternational%20business%20meeting.svg?alt=media&token=1bd97c5d-51e6-400e-8d7a-e402efa037e0" alt="massage" />
                <div>
                  <h3>Zero Waste</h3>
                  <p>W Eko Zakątku promujemy zrównoważony styl życia i zero waste. Naucz się praktycznych sposobów minimalizowania odpadków i twórz pozytywny wpływ na środowisko.</p>
                </div>
              </div>
              <a href="https://www.eko-zakatek.pl/zeroWaste">
            <button className="button">
              Więcej
            </button>
            </a>
            </Col>
            <Col style={{position:'relative'}} sm="4">
              <div className="brand-info__item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/svg%2FBakery%20owners%20making%20Bread.svg?alt=media&token=348d9ee1-45e7-4127-bc71-98a7637d4689" alt="bakekry-training" />               
                   <div>
                  <h3>Warsztaty</h3>
                  <p>Rozwijaj swoje pasje i zdobywaj nowe umiejętności na naszych inspirujących warsztatach. Dołącz do nas, aby czerpać kreatywną energię i odkrywać tajniki ekologicznego stylu życia.</p>
                </div>
              </div>
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