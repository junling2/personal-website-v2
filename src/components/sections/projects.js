import React from "react"
import styled from "styled-components"
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeader>Some Things I've Built</ProjectsHeader>
      <FeaturedProject>
        <div>
          <StyledPic
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <div className="container">
              <StaticImage
                className="img"
                src="../../images/benri.png"
                width={500}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Headshot"
                placeholder="blurred"
              />
            </div>
          </StyledPic>
        </div>
        <FeaturedContent>
          <FeaturedH0>Featured Project</FeaturedH0>
          <ProjectTitle>BenriExpress</ProjectTitle>
          <ProjectP>Food delivery application</ProjectP>
          <ProjectTech>ReactNative Firebase</ProjectTech>
          <ProjectLinks>
            <a href="https://github.com/junling2/BenriExpress" target="_blank">
              <GitLink />
            </a>
          </ProjectLinks>
        </FeaturedContent>
      </FeaturedProject>
      <FeaturedProject>
        <FeaturedContent>
          <FeaturedH0>Featured Project</FeaturedH0>
          <ProjectTitle>Bar Down</ProjectTitle>
          <ProjectP>E-commerce website for soccer products</ProjectP>
          <ProjectTech>MongoDB Express React Node</ProjectTech>
          <ProjectLinks>
            <a href="https://github.com/junling2/BarDown" target="_blank">
              <GitLink />
            </a>
          </ProjectLinks>
        </FeaturedContent>
        <div>
          <StyledPic
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <div className="container">
              <StaticImage
                className="img"
                src="../../images/bardown.png"
                width={500}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Headshot"
                placeholder="blurred"
              />
            </div>
          </StyledPic>
        </div>
      </FeaturedProject>
      <OtherTitle>Other Projects</OtherTitle>
      <OtherProjects>
        <ProjectCard>
          <OtherTop>
            <OtherIcon />
            <ProjectLinks>
              <a href="https://github.com/junling2/Aery" target="_blank">
                <GitLink />
              </a>
            </ProjectLinks>
          </OtherTop>
          <ProjectTitle>Aery</ProjectTitle>
          <ProjectP>App for displaying Air Quality Index information</ProjectP>
          <ProjectTech>Android GoogleMapsAPI</ProjectTech>
        </ProjectCard>
        <ProjectCard>
          <OtherTop>
            <OtherIcon />
            <ProjectLinks>
              <a
                href="https://github.com/junling2/AlgorithmicTrading"
                target="_blank"
              >
                <GitLink />
              </a>
            </ProjectLinks>
          </OtherTop>
          <ProjectTitle>AlgoTrading</ProjectTitle>
          <ProjectP>Script to suggest stocks based on momentum</ProjectP>
          <ProjectTech>Python IEXCloudAPI</ProjectTech>
        </ProjectCard>
        <ProjectCard>
          <OtherTop>
            <OtherIcon />
            <ProjectLinks>
              <a
                href="https://github.com/junling2/travelAppTest"
                target="_blank"
              >
                <GitLink />
              </a>
            </ProjectLinks>
          </OtherTop>
          <ProjectTitle>Travel App Test</ProjectTitle>
          <ProjectP>Selenium TestNG framework for demo web app</ProjectP>
          <ProjectTech>Selenium TestNG</ProjectTech>
        </ProjectCard>
      </OtherProjects>
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  background: #fff5ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`

const ProjectsHeader = styled.h1`
  color: black;
  font-size: clamp(1rem, 6vw, 3rem);
  font-weight: 900;
  margin-top: 5rem;
  margin-bottom: 4rem;
  letter-spacing: 1px;
`

const FeaturedProject = styled.div`
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
const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
`
const FeaturedH0 = styled.h4`
  margin-left: 1rem;
  color: #1e90ff;
`

const ProjectTitle = styled.h1`
  margin-left: 1rem;
  margin-top: 0.6rem;
  margin-bottom: 1rem;
`

const ProjectP = styled.p`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`

const ProjectTech = styled.p`
  font-family: "Source Code Pro";
  margin-left: 1rem;
  margin-bottom: 1rem;
`

const ProjectLinks = styled.div`
  display: flex;
  margin-right: 1rem;
  margin-left: 1rem;
`

const GitLink = styled(FiGithub)`
  font-size: 1.6rem;
  margin-right: 1rem;
  color: dimgray;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: #1e90ff;
  }
`

const ExtLink = styled(FiExternalLink)`
  font-size: 1.6rem;
  color: dimgray;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: #1e90ff;
  }
`

const OtherTitle = styled.h2`
  margin-bottom: 1rem;
`

const OtherProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ProjectCard = styled.div`
  background-color: mistyrose;
  border-radius: 5px;
  margin-right: 0.6rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const OtherTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

const OtherIcon = styled(FiFolder)`
  font-size: 3rem;
  margin-left: 1rem;
  color: #1e90ff;
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
