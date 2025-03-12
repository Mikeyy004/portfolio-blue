"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ContactInfoContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.overlayLight};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(4px);
`

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ContactInfoItem = styled(motion.div)`
  display: flex;
  gap: 1rem;
`

const ContactIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const ContactInfoContent = styled.div``

const ContactInfoLabel = styled.h4`
  font-weight: 700;
  margin-bottom: 0.25rem;
`

const ContactInfoValue = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`

const ConnectBox = styled(motion.div)`
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.overlayDark};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
`

const ConnectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const ConnectText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1.5rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.border.light};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const ContactFormContainer = styled(motion.div)``

const ContactFormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.overlayDark};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
`

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.primary}20;
  border: 1px solid ${({ theme }) => theme.colors.primary}50;
  text-align: center;
`

const SuccessText = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.overlayLight};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}50;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}30;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.overlayLight};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: ${({ theme }) => theme.transitions.default};
  resize: none;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}50;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}30;
  }
`

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 500;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: ${({ theme }) => theme.transitions.default};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const LoadingSpinner = styled.svg`
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title>Get In Touch</Title>
          <Divider />
          <Description>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
            form below or through my contact information.
          </Description>
        </SectionHeader>

        <ContactGrid>
          <ContactInfoContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfoTitle>Contact Information</ContactInfoTitle>

            <ContactInfoList>
              <ContactInfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
              >
                <ContactIconContainer>
                  <FaEnvelope size={24} />
                </ContactIconContainer>
                <ContactInfoContent>
                  <ContactInfoLabel>Email</ContactInfoLabel>
                  <ContactInfoValue>kudakwashemuderedzwa@gmail.com</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <ContactIconContainer>
                  <FaPhone size={24} />
                </ContactIconContainer>
                <ContactInfoContent>
                  <ContactInfoLabel>Phone</ContactInfoLabel>
                  <ContactInfoValue>+263 78 461 3680</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <ContactIconContainer>
                  <FaMapMarkerAlt size={24} />
                </ContactIconContainer>
                <ContactInfoContent>
                  <ContactInfoLabel>Location</ContactInfoLabel>
                  <ContactInfoValue>Harare, Zimbabwe</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoList>

            <ConnectBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ConnectTitle>Let's Connect</ConnectTitle>
              <ConnectText>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </ConnectText>
              <SocialLinks>
                <SocialLink
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn size={20} />
                </SocialLink>
                <SocialLink
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </SocialLink>
                <SocialLink
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter size={20} />
                </SocialLink>
              </SocialLinks>
            </ConnectBox>
          </ContactInfoContainer>

          <ContactFormContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <ContactFormTitle>Send Me a Message</ContactFormTitle>

            <ContactForm
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {isSubmitted ? (
                <SuccessMessage initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <SuccessText>Thank you for your message! I'll get back to you soon.</SuccessText>
                </SuccessMessage>
              ) : (
                <>
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
                          <path
                            d="M12 2C6.47715 2 2 6.47715 2 12C2 12.6343 2.06115 13.2539 2.17873 13.8527"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </LoadingSpinner>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane size={16} />
                      </>
                    )}
                  </SubmitButton>
                </>
              )}
            </ContactForm>
          </ContactFormContainer>
        </ContactGrid>
      </Container>
    </ContactSection>
  )
}

export default Contact

