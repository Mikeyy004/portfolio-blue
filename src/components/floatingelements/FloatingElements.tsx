"use client"

import type React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const FloatingElementsContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 5;
  overflow: hidden;
`

const Circle = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  filter: blur(40px);
  opacity: 0.6;
`

const Square = styled(motion.div)<{ size: number; color: string; rotation: number }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ color }) => color};
  filter: blur(30px);
  opacity: 0.5;
  transform: rotate(${({ rotation }) => `${rotation}deg`});
`

const FloatingElements: React.FC = () => {
  return (
    <FloatingElementsContainer>
      {/* Large purple circle in top left */}
      <Circle
        size={300}
        color="rgba(138, 43, 226, 0.4)"
        initial={{ x: "-10vw", y: "-5vh" }}
        animate={{
          x: ["-10vw", "-5vw", "-10vw"],
          y: ["-5vh", "0vh", "-5vh"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Medium blue circle in bottom right */}
      <Circle
        size={200}
        color="rgba(93, 63, 211, 0.4)"
        initial={{ x: "70vw", y: "60vh" }}
        animate={{
          x: ["70vw", "65vw", "70vw"],
          y: ["60vh", "65vh", "60vh"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Small light purple circle in top right */}
      <Circle
        size={150}
        color="rgba(186, 85, 255, 0.4)"
        initial={{ x: "80vw", y: "10vh" }}
        animate={{
          x: ["80vw", "75vw", "80vw"],
          y: ["10vh", "15vh", "10vh"],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Square element in middle left */}
      <Square
        size={100}
        color="rgba(138, 43, 226, 0.3)"
        rotation={45}
        initial={{ x: "10vw", y: "40vh" }}
        animate={{
          x: ["10vw", "15vw", "10vw"],
          y: ["40vh", "45vh", "40vh"],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Square element in bottom left */}
      <Square
        size={120}
        color="rgba(93, 63, 211, 0.3)"
        rotation={30}
        initial={{ x: "30vw", y: "80vh" }}
        animate={{
          x: ["30vw", "25vw", "30vw"],
          y: ["80vh", "75vh", "80vh"],
          rotate: [30, 60, 30],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </FloatingElementsContainer>
  )
}

export default FloatingElements

