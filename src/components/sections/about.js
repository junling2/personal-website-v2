import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  const skills = [
    "JavaScript",
    "React Native",
    "Python",
    "Django",
    "Java",
    "PostgreSQL",
  ]

  return (
    <AboutContainer id="about">
      <AboutH1
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="600"
      >
        About Me
      </AboutH1>
      <AboutColumns>
        <div>
          <AboutP
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            Coming from an Electrical Engineering background, the satisfaction
            of solving technical problems has led me to utilize software
            development as a tool to create interesting, digital solutions.
          </AboutP>
          <AboutP
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            I've had the privilege of working in industries ranging from Public
            Utilities to CyberSecurity. I have found that I enjoy collaborating
            with other people and learning new things. I'm always honing my
            technical skills through personal projects and online resources.
          </AboutP>
          <AboutP
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            Here are some languages and technologies I've been working with
            recently:
          </AboutP>
          <SkillsList
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </SkillsList>
        </div>
        <StyledPic
          data-sal="fade"
          data-sal-easing="ease"
          data-sal-duration="600"
        >
          <div className="container">
            <StaticImage
              className="img"
              src="../../images/placeholder.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Headshot"
              placeholder="blurred"
            />
          </div>
        </StyledPic>
      </AboutColumns>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  background: #fff5ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AboutH1 = styled.h1`
  font-size: clamp(1rem, 6vw, 3rem);
  font-weight: 900;
  margin-top: 5rem;
  margin-bottom: 1.3rem;
  letter-spacing: 1px;
`

const AboutColumns = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutP = styled.p`
  font-family: "Quicksand", "Raleway";
  margin-bottom: 1rem;
  word-wrap: normal;
  max-width: 440px;
  font-weight: lighter;
  color: #696969;
  line-height: 1.5;
`

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
  li {
    position: relative;
    color: #1e90ff;
    font-family: "Source Code Pro";
    margin-bottom: 10px;
    padding-left: 20px;

    &:before {
      content: "‣";
      position: absolute;
      left: 0;
      margin-top: 0.2rem;
      color: black;
      line-height: 12px;
    }
  }
`

const StyledPic = styled.div`
  justify-self: center;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  .container {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 10px;

    .img {
      position: relative;
      border-radius: 10px;
      mix-blend-mode: multiply;
    }
  }
`
