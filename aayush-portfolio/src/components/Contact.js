import React from "react";
import styled from "styled-components";
import colors from "../colors";

const ContactSection = styled.section`
  padding: 6rem 10vw 6rem 10vw;
  background: ${colors.navy};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 5rem 5vw 5rem 5vw;
  }
  @media (max-width: 600px) {
    padding: 4rem 1.5rem 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: ${colors.green};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const ContactHeading = styled.h3`
  color: ${colors.lightestSlate};
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const ContactText = styled.p`
  color: ${colors.slate};
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 500px;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 100%;
  }
`;

const EmailLink = styled.a`
  display: inline-block;
  background: transparent;
  color: ${colors.green};
  border: 1.5px solid ${colors.green};
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${colors.green};
    color: ${colors.navy};
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem 0;
    font-size: 1rem;
    word-break: break-word;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding: 0.8rem 0;
  }
`;

function Contact() {
  return (
    <ContactSection id="contact" data-aos="fade-up">
      <SectionTitle>Contact</SectionTitle>
      <ContactHeading>Get In Touch</ContactHeading>
      <ContactText>
        I'm currently open to new opportunities, collaborations, or just a
        friendly chat. Feel free to reach out if you want to connect!
      </ContactText>
      <EmailLink href="mailto:aayushduwal16@gmail.com">
        aayushduwal16@gmail.com
      </EmailLink>
    </ContactSection>
  );
}

export default Contact;
