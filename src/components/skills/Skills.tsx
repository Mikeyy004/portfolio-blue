"use client"

import type React from "react"
import { useRef } from "react"
import styled from "styled-components"
import { motion, useScroll, useTransform } from "framer-motion"
import type { SkillItem } from "../../types"

const SkillsSection = styled.section`
  padding: 5rem 1rem;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8rem 1rem;
  }
`

const Container = styled(motion.div)`
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

const SkillsGrid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SkillsContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.overlayLight};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(4px);
`

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const SkillName = styled.span`
  font-weight: 500;
`

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.colors.text.tertiary};
`

const SkillBarContainer = styled.div`
  height: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`

const SkillBar = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`

const PurpleSkillBar = styled(SkillBar)`
  background: linear-gradient(90deg, #6a0dad, #8a2be2);
`

const TechMarquee = styled(motion.div)`
  margin-top: 5rem;
  overflow: hidden;
  padding: 1.5rem 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.overlayLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(4px);
`

const MarqueeGradientLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 5rem;
  height: 100%;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.background}, transparent);
  z-index: 10;
`

const MarqueeGradientRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 5rem;
  height: 100%;
  background: linear-gradient(to left, ${({ theme }) => theme.colors.background}, transparent);
  z-index: 10;
`

const MarqueeContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
`

const MarqueeItem = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 2rem;
  color: ${({ theme }) => theme.colors.primaryLight}70;
`

const frontendSkills: SkillItem[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 90 },
  { name: "Styled Components", level: 85 },
  { name: "React Router", level: 80 },
]

const otherSkills: SkillItem[] = [
  { name: "UI/UX Design", level: 75 },
  { name: "Responsive Design", level: 90 },
  { name: "Git/GitHub", level: 85 },
  { name: "Testing", level: 70 },
  { name: "Performance Optimization", level: 80 },
  { name: "Accessibility", level: 75 },
]

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Styled Components",
  "React Router",
  "Redux",
  "GraphQL",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "Jest",
  "React Testing Library",
]

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  return (
    <SkillsSection id="skills" ref={containerRef}>
      <Container style={{ opacity, y }}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title>My Skills</Title>
          <Divider />
          <Description>
            I've developed a diverse set of skills throughout my journey as a front-end developer, focusing on creating
            responsive, accessible, and performant web applications.
          </Description>
        </SectionHeader>

        <SkillsGrid>
          <SkillsContainer
            id="frontend-development"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SkillsTitle>Frontend Development</SkillsTitle>
            <SkillsList>
              {frontendSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillHeader>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </SkillHeader>
                  <SkillBarContainer>
                    <PurpleSkillBar
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </SkillBarContainer>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillsContainer>

          <SkillsContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SkillsTitle>Other Skills</SkillsTitle>
            <SkillsList>
              {otherSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillHeader>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </SkillHeader>
                  <SkillBarContainer>
                    <SkillBar
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </SkillBarContainer>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillsContainer>
        </SkillsGrid>

        <TechMarquee
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <MarqueeGradientLeft />
          <MarqueeGradientRight />

          <MarqueeContent>
            {technologies.map((tech, index) => (
              <MarqueeItem key={index}>{tech}</MarqueeItem>
            ))}
            {technologies.map((tech, index) => (
              <MarqueeItem key={`repeat-${index}`}>{tech}</MarqueeItem>
            ))}
          </MarqueeContent>
        </TechMarquee>
      </Container>
    </SkillsSection>
  )
}

export default Skills