import React from "react"
import styled from "styled-components"
import {
  FiGithub,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi"

const Connect = () => {
  return (
    <ConnectContainer id="connect">
      <ConnectHeader>Connect With Me</ConnectHeader>
      <ConnectP>
        I'm currently open to discussions on software engineering opportunities.
        Feel free to reach out for any professional inquiries. Thanks!
      </ConnectP>
      <SocialLinks>
        <Link href="mailto:junling2@ualberta.ca">
          <Email />
        </Link>
        <Link href="https://www.linkedin.com/in/junling2/">
          <LinkedIn />
        </Link>
        <Link href="https://github.com/junling2">
          <GitHub />
        </Link>
        <Link href="https://www.facebook.com/junling.qu">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/junlingqu/">
          <Instagram />
        </Link>
      </SocialLinks>
    </ConnectContainer>
  )
}

export default Connect

const ConnectContainer = styled.div`
  background: #a3eaf2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 100vh;
`

const ConnectHeader = styled.h1`
  color: black;
  font-family: "Raleway";
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`

const ConnectP = styled.p`
  text-align: center;
  color: grey;
  max-width: 640px;
  font-size: 1.2rem;
`

const SocialLinks = styled.div`
  margin-top: 3rem;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Link = styled.a`
  margin-left: 2rem;
  margin-right: 2rem;
`
const GitHub = styled(FiGithub)`
  color: #f3cf7c;
  font-size: 4rem;
  transition: ease-in;
  transition: all 0.2s ease-in;

  &:hover {
    color: #1e90ff;
    transform: translateY(-5px);
  }
`
const Instagram = styled(FiInstagram)`
  color: #f3cf7c;
  font-size: 4rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: #1e90ff;
    transform: translateY(-5px);
  }
`
const Email = styled(FiMail)`
  color: #f3cf7c;
  font-size: 4rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: #1e90ff;
    transform: translateY(-5px);
  }
`
const LinkedIn = styled(FiLinkedin)`
  color: #f3cf7c;
  font-size: 4rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: #1e90ff;
    transform: translateY(-5px);
  }
`
const Facebook = styled(FiFacebook)`
  color: #f3cf7c;
  font-size: 4rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: #1e90ff;
    transform: translateY(-5px);
  }
`
