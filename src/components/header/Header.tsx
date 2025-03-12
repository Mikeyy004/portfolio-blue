"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowRight } from "react-icons/fa"

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
`

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  background: radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, rgba(93, 63, 211, 0.2) 40%, transparent 70%);
  opacity: 0.9;
  filter: blur(60px);
  z-index: 1;
`

const GridLines = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 1;
`

const MouseGlow = styled.div<{ x: number; y: number }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.3;
  background: ${({ x, y }) => `radial-gradient(circle at ${x}px ${y}px, rgba(138, 43, 226, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`};
  z-index: 1;
`

const SocialLinks = styled(motion.div)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 10;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(138, 43, 226, 0.2);
    border-color: rgba(138, 43, 226, 0.5);
    transform: scale(1.1);
  }
`

const ContentContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroTag = styled(motion.div)`
  padding: 0.5rem 1.5rem;
  background: rgba(138, 43, 226, 0.1);
  border: 1px solid rgba(138, 43, 226, 0.3);
  border-radius: 9999px;
  margin-bottom: 2rem;
  backdrop-filter: blur(4px);
`

const HeroTagText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: ${({ theme }) => theme.shadows.textGlow};
`

const TypeContainer = styled(motion.div)`
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 300;
  margin-bottom: 2.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  span {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 36rem;
  text-align: center;
  line-height: 1.6;
`

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
`

const PrimaryButton = styled(motion.a)`
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
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
`

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 500;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(138, 43, 226, 0.1);
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}, transparent);
`

const ScrollText = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.text.tertiary};
`

const FloatingShapes = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`

const FloatingShape = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  filter: blur(40px);
  opacity: 0.5;
  z-index: 1;
`

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <HeroSection>
      <BackgroundGlow />
      <GridLines />
      <MouseGlow x={mousePosition.x} y={mousePosition.y} />

      <FloatingShapes>
        <FloatingShape
          size={200}
          color="rgba(138, 43, 226, 0.3)"
          initial={{ x: "10vw", y: "20vh" }}
          animate={{
            x: ["10vw", "15vw", "10vw"],
            y: ["20vh", "25vh", "20vh"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <FloatingShape
          size={150}
          color="rgba(93, 63, 211, 0.3)"
          initial={{ x: "80vw", y: "60vh" }}
          animate={{
            x: ["80vw", "75vw", "80vw"],
            y: ["60vh", "65vh", "60vh"],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <FloatingShape
          size={100}
          color="rgba(186, 85, 255, 0.3)"
          initial={{ x: "70vw", y: "20vh" }}
          animate={{
            x: ["70vw", "65vw", "70vw"],
            y: ["20vh", "15vh", "20vh"],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </FloatingShapes>

      <SocialLinks
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
          <FaGithub size={20} />
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
          <FaLinkedinIn size={20} />
        </SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
          <FaTwitter size={20} />
        </SocialLink>
      </SocialLinks>

      <ContentContainer>
        <HeroTag initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <HeroTagText>Front-End Developer</HeroTagText>
        </HeroTag>

        <Name initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Kudakwashe Muderedzwa
        </Name>

        <TypeContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
          <TypeAnimation
            sequence={[
              "Building modern web experiences",
              1000,
              "Creating responsive interfaces",
              1000,
              "Crafting interactive applications",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </TypeContainer>

        <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          I specialize in building exceptional digital experiences that are fast, accessible, and visually appealing.
          Let's bring your ideas to life.
        </Description>

        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <PrimaryButton href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            View My Work
            <FaArrowRight size={16} />
          </PrimaryButton>
          <SecondaryButton href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            Contact Me
          </SecondaryButton>
        </ButtonContainer>
      </ContentContainer>

      <ScrollIndicator initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }}>
        <ScrollText>Scroll</ScrollText>
        <ScrollLine
          animate={{
            height: [60, 40, 60],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero

