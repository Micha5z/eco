import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('https://img.freepik.com/free-photo/beautiful-scenery-river-surrounded-by-greenery-forest_181624-40482.jpg?w=996&t=st=1682258054~exp=1682258654~hmac=89c9bfa9493b23eac21614ce07e41897da7a9ca0beba7b307dc9f80ddd527eff');
  background-size: cover;
  background-position: center;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
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
      background-color: #207216;
      color: #fff;
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background-color 0.3s;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
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
`;


function Contact() {
    return (
      <ContactContainer>
        <Container>
          <Row>
            <Col md="6">
              <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit">Submit</button>
                </form>
            </div>
          </Col>
          <Col md="6">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                <strong>Address:</strong>  123 Main St, Anytown USA
              </p>
              <p>
                <strong>Email:</strong>  info@example.com
              </p>
              <p>
                <strong>Phone:</strong>  555-123-4567
              </p>
              <p>
                <strong>Hours:</strong>  Mon-Fri 9am-5pm
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ContactContainer>
  );
}

export default Contact;