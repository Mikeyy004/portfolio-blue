import type React from "react"

export interface TimelineItem {
  year: string
  month: string
  title: string
  description: string
  icon: React.ReactNode
}

export interface TechItem {
  name: string
  logo: string
}

export interface SkillItem {
  name: string
  level: number
}

export interface ProjectItem {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

