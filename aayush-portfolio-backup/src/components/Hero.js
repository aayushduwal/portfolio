import React from "react";
import styled from "styled-components";
import colors from "../colors";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10vw;
  background: transparent;

  @media (max-width: 900px) {
    padding: 0 5vw;
  }
  @media (max-width: 600px) {
    min-height: 80vh;
    padding: 0 1.5rem;
    align-items: center;
    text-align: center;
  }
`;

const Intro = styled.h3`
  color: ${colors.green};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${colors.lightestSlate};
  margin: 0 0 1rem 0;
  span {
    color: ${colors.green};
  }
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.2rem;
  color: ${colors.slate};
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  color: ${colors.lightSlate};
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: transparent;
  color: ${colors.green};
  border: 1.5px solid ${colors.green};
  padding: 0.9rem 2.2rem;
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
    padding: 0.9rem 0;
    font-size: 1rem;
  }
`;

function Hero() {
  return (
    <HeroSection id="hero" data-aos="fade-up">
      <Intro>Hi, my name is</Intro>
      <Name>
        <span>Aayush Duwal</span>.
      </Name>
      <Subtitle>I build things for the web.</Subtitle>
      <Description>
        I'm a BCA student at Kathford International College of Engineering and
        Management, passionate about web development and technology. I love
        building beautiful and functional web applications.
      </Description>
      <ContactButton href="#contact">Get In Touch</ContactButton>
    </HeroSection>
  );
}

export default Hero;
