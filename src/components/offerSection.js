import React from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

const OfferContainer = styled.div`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.blackWhite};

  h2 {
    font-size: 42px;
    font-weight: 700;
    // text-align: center;
    margin-bottom: 60px;
  }

  .offer__item {
    margin-bottom: 60px;

    h3 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 30px;
    }

    p {
      font-size: 18px;
      line-height: 1.8;
      color: ${({ theme }) => theme.colors.whiteBlack};
    }
  }

  

    img {
      width: 100%;
      // max-width: 500px;
      // margin-right: 30px;
      border-radius: 10px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    }

    .offer__gallery-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    // .offer__gallery {
    //   width: 60%;
    // }
    
    .slider__nav-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    
    .slider__nav {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    
    .slider__nav:hover {
      background: #f0f0f0;
    }
    
    .slider__nav--left {
      margin-right: 20px;
      background-color: ${({ theme }) => theme.colors.blackWhite};
    }
    
    .slider__nav--right {
      margin-left: 20px;
      background-color: ${({ theme }) => theme.colors.blackWhite};
    }
    

  @media (max-width: 768px) {
    .offer__item {
      text-align: center;
    }

    .slider__nav-container {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
    }

    // .offer__gallery {
    //   flex-direction: column;

    //   img {
    //     margin-right: 0;
    //     margin-bottom: 30px;
    //   }
    // }
  }
`;


function Offer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: 'https://oswietlenie-sklep.pl/images/watermark/wpx_338b54c29198f0c0e48052581c1b00ab.jpg',
      alt: 'Mountain Cottage 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus mauris dolor, eu feugiat est rutrum a. Donec quis nulla id justo faucibus volutpat sit amet eu mauris. Quisque efficitur malesuada est, non hendrerit sem eleifend in. Nunc sagittis malesuada velit vitae aliquam. Fusce interdum nulla libero, vel pulvinar lectus egestas a.'
    },
    {
      src: 'https://img.shmbk.pl/rimgsph/1205424_5879d814-3c81-4889-86c2-b4807e44dcae_crop_1280_768_kawalerka-boho-salon-styl-vintage.jpg',
      alt: 'Mountain Cottage 2',
      text: 'Duis pellentesque, est ac mattis sagittis, ipsum leo blandit nibh, in molestie justo enim vitae nulla. Sed pellentesque vel est non viverra. Nunc laoreet tellus id urna consequat vestibulum. Nullam nec consectetur mauris, a elementum mauris. Fusce venenatis eros at ligula pharetra ullamcorper. Sed ac consequat purus.'
    },
    {
      src: 'https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg',
      alt: 'Mountain Cottage 3',
      text: 'Nulla ut orci aliquet, porttitor elit et, accumsan elit. Sed in libero dolor. Etiam bibendum enim libero, ac lacinia odio malesuada quis. Nam volutpat orci augue, nec lobortis augue sollicitudin ut. Nullam fringilla, tortor vel scelerisque malesuada, est lorem efficitur nunc, sit amet gravida turpis magna non nisi.'
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <OfferContainer>
      <Container>
        {/* <h2>Our Offer</h2> */}
        <Row>
        <Col md={6}>
          <div className="offer__item">
            <h2>Mountain Cottage</h2>
            <p>{images[activeIndex].alt}</p>
            <p>{images[activeIndex].text}</p>
          </div>
          <div className="offer__gallery-container">
            <div className="slider__nav-container">
              <div className="slider__nav slider__nav--left" onClick={handlePrev}>
                <FaChevronLeft />
              </div>
              <div className="slider__nav slider__nav--right" onClick={handleNext}>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </Col>
          <Col md={6}>
          <img src={images[activeIndex].src} alt={images[activeIndex].alt} text={images[activeIndex].text} />
            {/* <div className="offer__gallery">
              <img src={images[activeIndex].src} alt={images[activeIndex].alt} text={images[activeIndex].text} />
            </div> */}
          </Col>
        </Row>
      </Container>
    </OfferContainer>
  );
}
    
export default Offer;
