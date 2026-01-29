import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import colors from "../colors";

const Sidebar = styled.div`
  position: fixed;
  left: 2vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;

  @media (max-width: 768px) {
    display: none; /* Hide sidebar on smaller screens */
  }
`;

const IconLink = styled.a`
  color: ${colors.lightSlate};
  margin: 0.5rem 0;
  font-size: 2rem;
  transition: color 0.2s;
  &:hover {
    color: ${colors.green};
  }
`;

const Line = styled.div`
  width: 2px;
  height: 80px;
  background: ${colors.lightSlate};
  margin-top: 0.5rem;
`;

function SocialSidebar() {
  return (
    <Sidebar>
      <IconLink
        href="https://github.com/aayushduwal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/aayush-duwal-753972244/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </IconLink>
      <IconLink
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </IconLink>
      <IconLink
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </IconLink>
      <Line />
    </Sidebar>
  );
}

export default SocialSidebar;
