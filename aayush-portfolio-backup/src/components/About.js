import React from "react";
import styled from "styled-components";
import colors from "../colors";

const AboutSection = styled.section`
  padding: 6rem 10vw 4rem 10vw;
  background: ${colors.lightNavy};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    padding: 5rem 5vw 3rem 5vw;
  }
  @media (max-width: 600px) {
    padding: 4rem 1.5rem 2rem 1.5rem;
    align-items: center;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  color: ${colors.green};
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  justify-content: center; /* Center content when wrapped */
`;

const Bio = styled.div`
  flex: 2;
  color: ${colors.lightestSlate};
  font-size: 1.1rem;
  line-height: 1.7;
  min-width: 300px; /* Ensure bio doesn't get too narrow */

  @media (max-width: 600px) {
    font-size: 1rem;
    min-width: auto;
  }
`;

const Skills = styled.div`
  flex: 1;
  min-width: 220px;

  @media (max-width: 600px) {
    width: 100%; /* Skills take full width when stacked */
    margin-top: 1.5rem; /* Add space above skills */
  }
`;

const SkillsTitle = styled.h3`
  color: ${colors.slate};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  color: ${colors.green};
  font-size: 1rem;
  @media (max-width: 600px) {
    text-align: left; /* Align skill list left on mobile */
  }
`;

const skills = [
  "JavaScript",
  "React.js (basic)",
  "HTML & CSS",
  "Node.js",
  "Git & GitHub",
  "Figma",
  "Python (basic)",
];

function About() {
  return (
    <AboutSection id="about" data-aos="fade-up">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <Bio>
          I'm an undergraduate BCA student at Kathford International College of
          Engineering and Management, passionate about web development and
          technology. I love building beautiful and functional web applications.{" "}
          <br />
          <br />I enjoy learning new technologies and collaborating on creative
          projects. My goal is to become a skilled full-stack developer and
          contribute to impactful digital solutions.
        </Bio>
        <Skills>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillsList>
            {skills.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </SkillsList>
        </Skills>
      </AboutContent>
    </AboutSection>
  );
}

export default About;
