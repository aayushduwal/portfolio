import { useState } from "react";
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
  background: ${colors.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 320px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  flex: 2;
  padding: 2rem;
`;

const ProjectLabel = styled.span`
  color: ${colors.green};
  font-size: 0.9rem;
`;

const ProjectTitle = styled.h3`
  color: ${colors.lightestSlate};
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const ProjectDesc = styled.p`
  color: ${colors.lightSlate};
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: ${colors.navy};
  color: ${colors.green};
  padding: 4px 10px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectIconLink = styled.a`
  color: ${colors.lightSlate};
  font-size: 1.4rem;

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
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

function Projects() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openImage = (url) => {
    setImageUrl(url);
    setIsFullscreen(true);
  };

  const closeImage = () => {
    setIsFullscreen(false);
    setImageUrl("");
  };

  const projects = [
    {
      title: "E-commerce Website",
      desc: "Full-stack e-commerce platform with authentication and product management.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/aayushduwal/Aayush",
      live: "https://elegance-aayush.vercel.app",
      image: "/elegance-home-page.png",
    },
    {
      title: "ProConnect",
      desc: "Professional networking app with profiles, posts, and portfolios.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
      image: "/proconnect.png",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>

      {projects.map((project, index) => (
        <FeaturedProject key={index}>
          <ProjectInfo>
            <ProjectLabel>Featured Project</ProjectLabel>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.desc}</ProjectDesc>

            <ProjectTags>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </ProjectTags>

            <ProjectLinks>
              <ProjectIconLink href={project.github} target="_blank">
                <FaGithub />
              </ProjectIconLink>
              <ProjectIconLink href={project.live} target="_blank">
                <FiExternalLink />
              </ProjectIconLink>
            </ProjectLinks>
          </ProjectInfo>

          <ProjectImageWrapper onClick={() => openImage(project.image)}>
            <ProjectImage src={project.image} alt={project.title} />
          </ProjectImageWrapper>
        </FeaturedProject>
      ))}

      {isFullscreen && (
        <FullscreenOverlay onClick={closeImage}>
          <FullscreenImage src={imageUrl} />
        </FullscreenOverlay>
      )}
    </ProjectsSection>
  );
}

export default Projects;
