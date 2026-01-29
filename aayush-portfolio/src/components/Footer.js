import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledFooter = styled.footer`
  background-color: ${colors.navy}; /* Using a dark background */
  padding: 2rem 1rem;
  text-align: center;
  color: ${colors.slate}; /* Lighter color for text */
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>&copy; {currentYear} Aayush Duwal. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
