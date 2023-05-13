import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print');
  // background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 961px) {
    background-attachment: fixed;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 0;
    filter: blur(10px);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    z-index: 1;
    position: relative;
    color: #fff;
  }

  .contact-form {
    label {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #fff;
      z-index: 4;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      resize: none;
      background: transparent;
      border-bottom: 2px solid #fff;
      color: #fff;
      z-index: 4;

      &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 2px solid #207216;
      }
    }

    button {
      padding: 1em 2em;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: #114426;
      background-color: #ffffff;
      transition: all 1000ms;
      font-size: 15px;
      position: relative;
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
  }

  .contact-info {
    margin-top: 2rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #fff;
    }
  }
  .container {
      z-index: 5;
  }
    strong {
      color: white;
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 10;
    font-weight: bold;
  }
  
  .popup.success {
    color: #207216;
  }
  
  .popup.error {
    color: #d32f2f;
  }
`;




function Contact() {
  
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Add event listener for touchstart to close the popup on touch events
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  const handleTouchStart = () => {
    setIsPopupVisible(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (isSending) {
      return; // Prevent multiple submissions
    }
    setIsSending(true);
  
    try {
      await emailjs.sendForm('service_5o9t4p5', 'template_i8nnxlz', form.current, '7q_A-MPmCuO_WYMrQ');
      console.log('Email sent successfully');
      setIsSuccess(true);
      form.current.reset();
    } catch (error) {
      console.log('Error sending email:', error);
      setIsSuccess(false);
    }
  
    setIsSending(false);
    setIsPopupVisible(true);

      // Reset the popup visibility after 2 seconds
    setTimeout(() => {
    setIsPopupVisible(false);
  }, 2000);
  };
    return (
      <ContactContainer>
        <Container>
          <Row>
            <Col md="6">
              <div className="contact-form">
                <h2>Napisz do nas!</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <label htmlFor="name">Imię</label>
                    <input type="text" id="name" name="from_name" required />
                  </div>
                  <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="user_email" required />
                  </div>
                  <div>
                    <label htmlFor="message">Wiadomość</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit" value="Send" disabled={isSending}>{isSending ? 'Wysyłanie...' : 'Wyślij'}</button>
                </form>
            </div>
          </Col>
          <Col md="6">
            <div className="contact-info">
              <h2>Dane Kontaktowe</h2>
              <p>
                <strong>Adres:</strong>  ul. Pigwowa 16, 34-300 Żywiec

              </p>
              <p>
                <strong>Email:</strong>  kontakt@eko-zakatek.pl
              </p>
              <p>
                <strong>Telefon:</strong>  +48 606 992 351
              </p>
              <p>
                <strong>Godziny:</strong>  Pon-Pt, 9am-5pm
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {isPopupVisible && (
        <div className={`popup ${isSuccess ? 'success' : 'error'}`}>
          {isSuccess ? 'Wiadomość została wysłana' : 'Error sending message. Please try again.'}
        </div>
          )}
    </ContactContainer>
  );
}

export default Contact;