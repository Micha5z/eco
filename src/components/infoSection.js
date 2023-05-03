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
    margin-bottom: 0.5rem;
    color: #207216;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: #207216;
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
            <Col sm="4">
              <div className="brand-info__item">
                <img 
                img src={Trip} alt="trip" />
                <div>
                  <h3>Our Commitment to Sustainability</h3>
                  <p>We believe in protecting the environment and have implemented various initiatives to reduce our carbon footprint, such as using renewable energy sources and reducing waste.</p>
                </div>
              </div>
              {/* <a class ="button" href="/about">Więcej</a> */}
              <StyledTradeLink2 href="/noclegi">
              Więcej
            </StyledTradeLink2>
            </Col>
            <Col sm="4">
              <div className="brand-info__item">
                <img src={Massage} alt="massage" />
                <div>
                  <h3>Discover Nature's Beauty</h3>
                  <p>Our cottages are nestled near the picturesque mountains and forests, providing a tranquil retreat for nature lovers. Explore the hiking trails, observe the wildlife, and immerse yourself in nature's beauty.</p>
                </div>
              </div>
              <StyledTradeLink to="/zeroWaste">
             <div className="">
              Więcej
             </div>
            </StyledTradeLink>
            </Col>
            <Col sm="4">
              <div className="brand-info__item">
                  <img src={Bakery} alt="bakekry-training" />               
                   <div>
                  <h3>Unwind and Recharge</h3>
                  <p>Escape the hustle and bustle of city life and indulge in some well-deserved relaxation. Our cottages offer a serene ambiance, comfortable amenities, and breathtaking views, ensuring a memorable getaway.</p>
                </div>
              </div>
              <StyledTradeLink to="/warsztaty">
             <div className="">
              Więcej
             </div>
            </StyledTradeLink>
            </Col>
          </Row>
        </Container>
      </BrandInfoContainer>
    );
  }
  
  export default BrandInfo;