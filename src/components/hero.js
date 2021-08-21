import React from "react"
import styled from "styled-components"
import titleImage from "../images/heroBg.png"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH0>Hi, my name is</HeroH0>
          <HeroH1>Junling Qu.</HeroH1>
          <HeroP>
            I'm an engineer with a passion for learning new technologies and
            building practical solutions using code.
          </HeroP>
          <MailButton href="mailto:junling2@ualberta.ca">Contact Me</MailButton>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: url(${titleImage}) center center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -55px;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH0 = styled.text`
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  font-family: "Style Script";
  font-size: 2rem;
  color: #d64161;
`

const HeroH1 = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  font-family: "Raleway";
  margin-bottom: 1.5rem;
  margin-left: 0.6rem;
  letter-spacing: 1px;
`

const HeroP = styled.p`
  margin-bottom: 2rem;
  margin-left: 1rem;
  word-wrap: normal;
  max-width: 540px;
  font-weight: 100;
  font-size: 1.2rem;
  color: #696969;
  line-height: 1.5;
`

const MailButton = styled.a`
  margin-left: 1rem;
  background: transparent;
  border: 2px ridge #fff5ee;
  padding: 15px 25px;
  text-align: center;
  color: #fff5ee;
  font-size: 20px;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`
