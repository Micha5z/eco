import React from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

const OfferContainer = styled.div`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.blackWhite};

  h2 {
    font-size: 42px;
    font-weight: 700;
    // text-align: center;
    margin-bottom: 20px;
  }

  .offer__item {
    margin-bottom: 60px;

    h3 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
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
      width: 65px;
      height: 65px;
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
      opacity: 0.6;
    }
    
    .slider__nav--left {
      margin-right: 20px;
      // background-color: ${({ theme }) => theme.colors.blackWhite};
      background-color: #0a9e0d;
      background: linear-gradient(
        269deg,#36c557 -14.78%,#114426 110.05%);
    }
    
    .slider__nav--right {
      margin-left: 20px;
      // background-color: ${({ theme }) => theme.colors.blackWhite};
      background-color: #0a9e0d;
      background: linear-gradient(
        90deg,#36c557 -14.78%,#114426 110.05%);
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
    padding: 60px 0;
  }
`;


function Offer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/oferta_domkow_zdj%2Fbaner.webp?alt=media&token=1a5434f3-e0d9-49e8-9bf3-85fae81d7b28',
      alt: 'Wyjątkowy ekologiczny raj blisko natury!',
      text: 'Witamy w naszym ekologicznym rajskim azylu! Oferujemy Państwu wyjątkowy wypoczynek w dwóch sześcioosobowych domkach z zielonym dachem. Położone blisko lasu, z dala od miejskiego zgiełku, zapewniają one pełny komfort przez cały rok. Każdy domek jest w pełni wyposażony, a także posiada bezprzewodowe połączenie internetowe (WIFI) i aplikację mobilną do obsługi obiektu.'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/oferta_domkow_zdj%2Fsalon.webp?alt=media&token=853b8931-5c60-43ce-a470-ac4a569f3d04',
      alt: 'Komfort i prywatność w sercu natury!',
      text: 'Dla zapewnienia jeszcze większej prywatności, oferujemy opcję zakwaterowania bez kontaktu z obsługą dzięki elektronicznym zamkom. Każdy domek składa się z dwóch sypialni, salonu z kuchnią oraz przestronnego tarasu z meblami. Ręczniki i pościel są zapewnione, a na terenie działki znajduje się miejsce na ognisko i grill.'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/oferta_domkow_zdj%2Fsauna.webp?alt=media&token=c6a1bcfd-7631-4394-b498-0ac1d60a35e4',
      alt: 'Relaks i ekologiczne warsztaty w przyrodzie!',
      text: 'Dbamy o Twój relaks i regenerację, dlatego na terenie naszego obiektu znajdziesz saunę i jacuzzi usytuowane na wzniesieniu, skąd podziwiać można piękne widoki na Kotlinę Żywiecką i Jezioro Żywieckie. Dodatkowo, organizujemy warsztaty związane z ekologią i zero waste, takie jak pieczenie chleba czy tematyka rozwojowa dla kobiet.'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/oferta_domkow_zdj%2Fkrzes%C5%82o.webp?alt=media&token=2cbf7ec5-6711-4c08-89e3-1ea351340582',
      alt: 'Odkryj szlaki turystyczne w naszym eko zakątku!',
      text: 'Nasz eko zakątek to także doskonała baza wypadowa na szlaki turystyczne, prowadzące m.in. na Skrzyczne, Malinowską Skałę, Baranią Górę oraz ścieżkę edukacyjną w Dolinie Zimnika. Przyjdź i odkryj harmonię z naturą w naszym ekologicznym azylu!'
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
        <Row>
        <Col md={6}>
          <div className="offer__item">
            <h2>Eko Zakątek</h2>
            <h3>{images[activeIndex].alt}</h3>
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

          
          </Col>
        </Row>
      </Container>
    </OfferContainer>
  );
}
    
export default Offer;
