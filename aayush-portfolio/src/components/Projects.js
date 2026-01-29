import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components";
import colors from "../colors";

const ProjectsSection = styled.section`
  padding: 6rem 10vw 4rem 10vw;
  background: ${colors.lightestNavy};
`;

const SectionTitle = styled.h2`
  color: ${colors.green};
  font-size: 2rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
`;

const FeaturedProject = styled.div`
  display: flex;
  align-items: stretch;
  background: ${colors.lightNavy};
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(10, 25, 47, 0.2);
  overflow: hidden;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ProjectImageWrapper = styled.div`
  flex: 1.2;
  min-width: 0;
  background: ${colors.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  order: 2;
  @media (max-width: 900px) {
    order: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 0;
  @media (max-width: 900px) {
    max-height: 220px;
  }
`;

const ProjectInfo = styled.div`
  flex: 2;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 1;
  @media (max-width: 900px) {
    padding: 1.5rem 1rem;
    order: 2;
  }
`;

const ProjectLabel = styled.span`
  color: ${colors.green};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  color: ${colors.lightestSlate};
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const ProjectDesc = styled.p`
  color: ${colors.lightSlate};
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: ${colors.navy};
  color: ${colors.green};
  font-size: 0.95rem;
  padding: 0.2rem 0.9rem;
  border-radius: 3px;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProjectIconLink = styled.a`
  color: ${colors.lightSlate};
  font-size: 1.5rem;
  transition: color 0.2s;
  &:hover {
    color: ${colors.green};
  }
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

function Projects() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImageUrl, setFullscreenImageUrl] = useState("");

  const handleImageClick = (imageUrl) => {
    setFullscreenImageUrl(imageUrl);
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImageUrl("");
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <FeaturedProject data-aos="fade-up">
        <ProjectInfo>
          <ProjectLabel>Featured Project</ProjectLabel>
          <ProjectTitle>E-commerce Website</ProjectTitle>
          <ProjectDesc>
            A full-stack e-commerce platform with user authentication, product
            management, and a modern UI. Built as a college project.
          </ProjectDesc>
          <ProjectTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>PHP</Tag>
            <Tag>MySQL</Tag>
          </ProjectTags>
          <ProjectLinks>
            <ProjectIconLink
              href="https://github.com/aayushduwal/Aayush"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FaGithub />
            </ProjectIconLink>
            <ProjectIconLink
              href="https://elegance-aayush.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <FiExternalLink />
            </ProjectIconLink>
          </ProjectLinks>
        </ProjectInfo>
        <ProjectImageWrapper
          onClick={() => handleImageClick("/(elegance)home_page_ss.png")}
        >
          <ProjectImage
            src="/(elegance)home_page_ss.png"
            alt="E-commerce Website Screenshot"
          />
        </ProjectImageWrapper>
      </FeaturedProject>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <FullscreenOverlay onClick={handleCloseFullscreen}>
          <FullscreenImage
            src={fullscreenImageUrl}
            alt="Full Screen Project Screenshot"
          />
        </FullscreenOverlay>
      )}
    </ProjectsSection>
  );
}

export default Projects;
