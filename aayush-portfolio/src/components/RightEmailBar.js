import React from "react";
import styled from "styled-components";
import colors from "../colors";

const EmailBar = styled.div`
  position: fixed;
  right: 2vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;

  @media (max-width: 768px) {
    display: none; /* Hide email bar on smaller screens */
  }
`;

const EmailLink = styled.a`
  color: ${colors.lightSlate};
  font-size: 1rem;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin-bottom: 1rem;
  text-decoration: none;
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

function RightEmailBar() {
  return (
    <EmailBar>
      <EmailLink href="mailto:aayushduwal16@gmail.com">
        aayushduwal16@gmail.com
      </EmailLink>
      <Line />
    </EmailBar>
  );
}

export default RightEmailBar;
