import React from "react";
import styled from "styled-components";
import colors from "../colors";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 3rem 0 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem 0 0;
    justify-content: space-around;
  }
  @media (max-width: 480px) {
    padding: 1rem 0.5rem 0 0.5rem;
    justify-content: space-around;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
  @media (max-width: 480px) {
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;

const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const NavLink = styled.a`
  color: ${colors.lightestSlate};
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: ${colors.green};
  }
  @media (max-width: 480px) {
    padding: 0.2rem 0.4rem;
  }
`;

const ResumeButton = styled.a`
  border: 1px solid ${colors.green};
  color: ${colors.green};
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  margin-left: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${colors.green};
    color: ${colors.navy};
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    margin-left: 0.8rem;
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`;

const Navbar = () => (
  <Nav>
    <NavList>
      <NavItem>
        <NavLink href="#hero">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#projects">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact">Contact</NavLink>
      </NavItem>
      <NavItem>
        <ResumeButton
          href="Aayush_Duwal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </ResumeButton>
      </NavItem>
    </NavList>
  </Nav>
);

export default Navbar;
