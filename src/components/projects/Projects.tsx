"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa"
import type { ProjectItem } from "../../types"

const ProjectsSection = styled.section`
  padding: 5rem 1rem;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8rem 1rem;
  }
`

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.gradients.primary};
  margin: 0 auto 2rem;
`

const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 48rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.overlayLight};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(4px);
`

const ProjectsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.overlayDark};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}50;
  }
`

const ProjectImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`

const ProjectImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`

const ProjectLinks = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  opacity: 0;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}80;
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: ${({ theme }) => theme.transitions.default};

  ${ProjectCard}:hover & {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.text.secondary};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
`

const SeeAllButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const SeeAllButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 500;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    gap: 0.75rem;
  }
`

const projects: ProjectItem[] = [
  {
    title: "Sign-up form",
    description:
      "Clean and modern signup form built with Tailwind CSS for a seamless user experience. Features responsive design, intuitive input fields, and smooth validation for hassle-free registration.",
    image: "./Signup.png",
    technologies: ["React", "TypeScript", "Styled Components"],
    github: "https://github.com",
    demo: "https://signup-form-rust-gamma.vercel.app/",
  },
  {
    title: "Sign-up form",
    description:
      "Clean and modern signup form built with Tailwind CSS for a seamless user experience. Features responsive design, intuitive input fields, and smooth validation for hassle-free registration.",
    image: "./Signup.png",
    technologies: ["React", "TypeScript", "Styled Components"],
    github: "https://github.com",
    demo: "https://signup-form-rust-gamma.vercel.app/",
  },
  {
    title: "Sign-up form",
    description:
      "Clean and modern signup form built with Tailwind CSS for a seamless user experience. Features responsive design, intuitive input fields, and smooth validation for hassle-free registration.",
    image: "./Signup.png",
    technologies: ["React", "TypeScript", "Styled Components"],
    github: "https://github.com",
    demo: "https://signup-form-rust-gamma.vercel.app/",
  },
 
]

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title>My Projects</Title>
          <Divider />
          <Description>
            Here are some of my recent projects. Each one was built with a focus on performance, accessibility, and user
            experience.
          </Description>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectImageOverlay />

                <ProjectLinks initial={{ y: 20 }} animate={hoveredIndex === index ? { y: 0 } : { y: 20 }}>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={20} />
                  </ProjectLink>
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={18} />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectImageContainer>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechTags>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <SeeAllButtonContainer>
          <SeeAllButton
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            See All Projects
            <FaArrowRight size={16} />
          </SeeAllButton>
        </SeeAllButtonContainer>
      </Container>
    </ProjectsSection>
  )
}

export default Projects

