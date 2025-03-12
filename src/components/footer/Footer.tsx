"use client"

import type React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from "react-icons/fa"

const FooterContainer = styled.footer`
  padding: 3rem 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(138, 43, 226, 0.3);
`

const FooterContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: ${({ theme }) => theme.shadows.textGlow};
`

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(138, 43, 226, 0.5),
    transparent
  );
  margin: 1rem 0;
`

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: 0.875rem;
`

const MadeWith = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: 0.875rem;
`

const HeartIcon = styled(FaHeart)`
  color: ${({ theme }) => theme.colors.primary};
`

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>KM</FooterLogo>

        <FooterNav>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterNav>

        <SocialLinks>
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={18} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedinIn size={18} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTwitter size={18} />
          </SocialLink>
        </SocialLinks>

        <Divider />

        <FooterBottom>
          <Copyright>© {currentYear} Kudakwashe Muderedzwa. All rights reserved.</Copyright>
          <MadeWith>
            Made with <HeartIcon /> using React & Styled Components
          </MadeWith>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer

