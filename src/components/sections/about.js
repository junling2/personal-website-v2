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
    <AboutContainer>
      <AboutContent>
        <AboutItems>
          <AboutH1>About Me</AboutH1>
          <AboutColumns>
            <div>
              <AboutP>
                Coming from an Electrical Engineering background, the
                satisfaction of solving technical problems has led me to utilize
                software development as a tool to create interesting, digital
                solutions.
              </AboutP>
              <AboutP>
                I've had the privilege of working in industries ranging from
                Public Utilities to CyberSecurity. I have found that I enjoy
                collaborating with other people and learning new things. I'm
                always honing my technical skills through personal projects and
                online resources.
              </AboutP>
              <AboutP>
                Here are some languages and technologies I've been working with
                recently:
              </AboutP>
              <SkillsList>
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </SkillsList>
            </div>
            <StyledPic>
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
        </AboutItems>
      </AboutContent>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 100vh;
`

const AboutContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`

const AboutItems = styled.div`
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

const AboutH1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-left: 5rem;
  letter-spacing: 1px;
  max-height: 100%;
`

const AboutColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;
  padding: 0 2rem;
  max-height: 100%;
  margin-left: 5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutP = styled.p`
  margin-bottom: 2rem;
  word-wrap: normal;
  max-width: 440px;
  font-weight: 100;
  font-size: 1rem;
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
    margin-bottom: 10px;
    padding-left: 20px;

    &:before {
      content: "‣";
      position: absolute;
      left: 0;
      color: brown;
      line-height: 12px;
    }
  }
`

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    margin: 50px auto 0;
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
