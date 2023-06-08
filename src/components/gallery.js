import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';


const GalleryContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blackWhite};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  padding: 20px 5rem; 
  
  @media (max-width: 440px) {
    padding: 10px;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const ImageRow = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  max-height: 300px; /* Ograniczona wysokość wrappera */

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Proporcjonalne skalowanie */
    border-radius: 10px;
}


  }

`;

const FullscreenImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
`;

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.documentElement.style.overflow = 'hidden'; // Ukryj paski przewijania
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.documentElement.style.overflow = 'auto'; // Pokaż paski przewijania
  };

  return (
    <div>
      
      <GalleryContainer>
        {/* <Container>
          <Row> */}
            <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsalon3.jpeg?alt=media&token=70adbece-8b6b-4b1d-96a0-feeb8cdc3b23')}>
            <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsalon3.jpeg?alt=media&token=70adbece-8b6b-4b1d-96a0-feeb8cdc3b23" alt="Salon" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fdomki.jpeg?alt=media&token=80efdefc-b90e-493f-8e72-14ba74d5d079')}>
            <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fdomki.jpeg?alt=media&token=80efdefc-b90e-493f-8e72-14ba74d5d079" alt="Domki" />
          </ImageWrapper>
      
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fdomki-front.jpeg?alt=media&token=3742d5c9-1352-4ce2-9e91-bccadef374f3')}>
            <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fdomki-front.jpeg?alt=media&token=3742d5c9-1352-4ce2-9e91-bccadef374f3" alt="Domki front" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fkawa.jpeg?alt=media&token=b1e8c735-fcf1-4852-aac5-ed8203abdb7c')}>
            <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/oferta_domkow_zdj%2F26.webp?alt=media&token=a4819db7-ddaa-4d29-9e9c-7d2f0478f42b" alt="Kawka:)" />
          </ImageWrapper>
      
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fpatio.jpeg?alt=media&token=6493462e-19e4-4d3c-9d04-b80f00c6e7cb')}>
            <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fpatio.jpeg?alt=media&token=6493462e-19e4-4d3c-9d04-b80f00c6e7cb" alt="Patio" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fkorytarz2.jpeg?alt=media&token=ade0cbc8-fbbc-4097-a2c6-b1f60442e554')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fkorytarz2.jpeg?alt=media&token=ade0cbc8-fbbc-4097-a2c6-b1f60442e554" alt="Sypialnia" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fpok%C3%B3j.jpeg?alt=media&token=16aa22e3-93ea-44b2-857b-0b868f3a6f74')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fpok%C3%B3j.jpeg?alt=media&token=16aa22e3-93ea-44b2-857b-0b868f3a6f74" alt="Sypialnia" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsypialnia.jpeg?alt=media&token=0f144f44-0f13-4fb9-981b-0150055e4a16')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsypialnia.jpeg?alt=media&token=0f144f44-0f13-4fb9-981b-0150055e4a16" alt="Sypialnia" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsypialnia3.jpeg?alt=media&token=7801d3e7-1d10-4319-b31b-a8b62fc396ab')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsypialnia3.jpeg?alt=media&token=7801d3e7-1d10-4319-b31b-a8b62fc396ab" alt="Sypialnia" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2F%C5%82%C3%B3%C5%BCko.jpeg?alt=media&token=51683fa3-7a30-4cbb-b8ac-fbbb7dfe2e35')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2F%C5%82%C3%B3%C5%BCko.jpeg?alt=media&token=51683fa3-7a30-4cbb-b8ac-fbbb7dfe2e35" alt="Sypialnia" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2F%C5%82azienka.jpeg?alt=media&token=3d1a3df2-93d1-4ed9-bb8b-2fd35504c58a')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2F%C5%82azienka.jpeg?alt=media&token=3d1a3df2-93d1-4ed9-bb8b-2fd35504c58a" alt="Lazienka" />
          </ImageWrapper>
          
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsalon2.jpeg?alt=media&token=34d71340-373b-442e-8b70-b0e1788a34d2')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsalon2.jpeg?alt=media&token=34d71340-373b-442e-8b70-b0e1788a34d2" alt="Salon" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsauna2.jpeg?alt=media&token=3cc4d1e9-2d56-4ec7-8af9-a78a7cb70f31')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsauna2.jpeg?alt=media&token=3cc4d1e9-2d56-4ec7-8af9-a78a7cb70f31" alt="Sauna" />
          </ImageWrapper>
          <ImageWrapper onClick={() => openLightbox('https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsauna3.jpeg?alt=media&token=f538b879-99f3-444e-be8a-77fb4c9a5f1c')}>
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-zakatek.appspot.com/o/gallery%2Fsauna3.jpeg?alt=media&token=f538b879-99f3-444e-be8a-77fb4c9a5f1c" alt="Sauna" />
          </ImageWrapper>
{/* </Row>

        </Container> */}
            

      </GalleryContainer>
      {selectedImage && (
        <FullscreenImage src={selectedImage} alt="Selected Image" onClick={closeLightbox} />
      )}
    </div>
  );
}

export default Gallery;