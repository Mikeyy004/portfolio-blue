"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "./components/header/Header"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ParticleBackground from "./components/particlebackground/ParticleBackground"
import FloatingElements from "./components/floatingelements/FloatingElements"

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: 0;
`

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 6px;
  width: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.primary};
  transform-origin: left;
  z-index: 50;
`

const ScrollPrompt = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  z-index: 10;
`

const MouseContainer = styled(motion.div)`
  width: 1.5rem;
  height: 2.5rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`

const MouseWheel = styled(motion.div)`
  width: 0.375rem;
  height: 0.375rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`

const ScrollText = styled(motion.p)`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
`

const MainContent = styled.main`
  position: relative;
  z-index: 20;
`

function App() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scaleX = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AppContainer>
      <Overlay />
      <ParticleBackground />
      <FloatingElements />

      <ScrollIndicator style={{ scaleX, opacity: scrollOpacity }} />

      <motion.div style={{ opacity }}>
        <ScrollPrompt>
          <MouseContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}>
            <MouseWheel
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </MouseContainer>
          <ScrollText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}>
            Scroll to explore
          </ScrollText>
        </ScrollPrompt>
      </motion.div>

      <MainContent>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </MainContent>
    </AppContainer>
  )
}

export default App

