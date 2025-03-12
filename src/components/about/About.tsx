"use client"

import type React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa"
import type { TimelineItem, TechItem } from "../../types"

const AboutSection = styled.section`
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

const ContentGrid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

const JourneyContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.overlayLight};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(4px);
`

const JourneyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const Timeline = styled.div`
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.primary}30, transparent);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const TimelineItemContainer = styled(motion.div)<{ isEven: boolean }>`
  position: relative;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: ${({ isEven }) => (isEven ? "flex-start" : "flex-end")};
    padding-left: ${({ isEven }) => (isEven ? "0" : "50%")};
    padding-right: ${({ isEven }) => (isEven ? "50%" : "0")};
  }
`

const TimelineIcon = styled.div`
  position: absolute;
  top: 0;
  left: -1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  background-color: ${({ theme }) => theme.colors.overlayDark};
  color: ${({ theme }) => theme.colors.primary};
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 50%;
    transform: translateX(-50%);
  }
`

const TimelineContent = styled.div`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.overlayDark};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% - 3rem);
  }
`

const TimelineYear = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryLight};
  margin-bottom: 0.25rem;
`

const TimelineTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`

const TimelineDescription = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const TechStackTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.overlayDark};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}50;
    transform: translateY(-5px) scale(1.05);
  }
`

const TechLogo = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const TechName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`

const AboutMeBox = styled(motion.div)`
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.overlayDark};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  margin-top: 2rem;
`

const AboutMeTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const AboutMeText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    month: "July",
    title: "Started Coding Journey",
    description: "Began learning HTML, CSS, SASS and JavaScript",
    icon: <FaCode size={20} />,
  },
  {
    year: "2024",
    month: "October",
    title: "Moved on to Learn Libraries",
    description: "Moved on to learn Bootstrap and JQuery",
    icon: <FaLaptopCode size={20} />,
  },
  {
    year: "2024",
    month: "November",
    title: "Using APIs",
    description: "Integrated APIs and fetching data from Social Media Platforms",
    icon: <FaLightbulb size={20} />,
  },
  {
    year: "2025",
    month: "January",
    title: "Advanced Frontend",
    description: "Started learning React and Styled Components",
    icon: <FaRocket size={20} />,
  },
]

const techItems: TechItem[] = [
  { name: "React", logo: "/placeholder.svg?height=48&width=48" },
  { name: "TypeScript", logo: "/placeholder.svg?height=48&width=48" },
  { name: "JavaScript", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Styled Components", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Tailwind", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Next.js", logo: "/placeholder.svg?height=48&width=48" },
]

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title>About Me</Title>
          <Divider />
          <Description>
            I'm a passionate front-end developer with a keen eye for design and a love for creating seamless user
            experiences. With expertise in React, TypeScript, and modern CSS frameworks, I build responsive and
            accessible web applications.
          </Description>
        </SectionHeader>

        <ContentGrid>
          <JourneyContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <JourneyTitle>My Journey</JourneyTitle>
            <Timeline>
              {timelineItems.map((item, index) => (
                <TimelineItemContainer
                  key={index}
                  isEven={index % 2 === 0}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <TimelineIcon>{item.icon}</TimelineIcon>
                  <TimelineContent>
                    <TimelineYear>{item.year}</TimelineYear>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineDescription>{item.description}</TimelineDescription>
                  </TimelineContent>
                </TimelineItemContainer>
              ))}
            </Timeline>
          </JourneyContainer>

          <SkillsContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <TechStackTitle>Tech Stack</TechStackTitle>
            <TechGrid>
              {techItems.map((tech, index) => (
                <TechItem
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <TechLogo>
                    <img src={tech.logo || "/placeholder.svg"} alt={tech.name} />
                  </TechLogo>
                  <TechName>{tech.name}</TechName>
                </TechItem>
              ))}
            </TechGrid>

            <AboutMeBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AboutMeTitle>A bit more about me</AboutMeTitle>
              <AboutMeText>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                sharing knowledge with the developer community. I believe in writing clean, maintainable code and
                creating intuitive user interfaces.
              </AboutMeText>
              <AboutMeText>
                I'm constantly learning and adapting to the ever-evolving web development landscape, always looking for
                ways to improve my skills and stay ahead of industry trends.
              </AboutMeText>
            </AboutMeBox>
          </SkillsContainer>
        </ContentGrid>
      </Container>
    </AboutSection>
  )
}

export default About

