import React from "react"
import styled from "styled-components"

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeader>Some Things I've Built</ProjectsHeader>
      <FeaturedProject>
        <div></div>
        <FeaturedContent>
          <FeaturedH0>Featured Project</FeaturedH0>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectP>
            this is a paragraph describing the project details
          </ProjectP>
          <ProjectTech>Next.js Django</ProjectTech>
          <ProjectLinks></ProjectLinks>
        </FeaturedContent>
      </FeaturedProject>
      <FeaturedProject>
        <FeaturedContent>
          <FeaturedH0>Featured Project</FeaturedH0>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectP>
            this is a paragraph describing the project details
          </ProjectP>
          <ProjectTech>Next.js Django</ProjectTech>
          <ProjectLinks></ProjectLinks>
        </FeaturedContent>
        <div></div>
      </FeaturedProject>
      <FeaturedProject>
        <div></div>
        <FeaturedContent>
          <FeaturedH0>Featured Project</FeaturedH0>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectP>
            this is a paragraph describing the project details
          </ProjectP>
          <ProjectTech>Next.js Django</ProjectTech>
          <ProjectLinks></ProjectLinks>
        </FeaturedContent>
      </FeaturedProject>
      <OtherTitle>Other Projects</OtherTitle>
      <OtherProjects>
        <ProjectCard>
          <OtherTop>
            <i></i>
            <ProjectLinks></ProjectLinks>
          </OtherTop>
          <ProjectTitle>Other 1</ProjectTitle>
          <ProjectP>hello my name is jeff, this is my project</ProjectP>
          <ProjectTech>deez nutz</ProjectTech>
        </ProjectCard>
        <ProjectCard>
          <OtherTop>
            <i></i>
            <ProjectLinks></ProjectLinks>
          </OtherTop>
          <ProjectTitle>Other 1</ProjectTitle>
          <ProjectP>hello my name is jeff, this is my project</ProjectP>
          <ProjectTech>deez nutz</ProjectTech>
        </ProjectCard>
        <ProjectCard>
          <OtherTop>
            <i></i>
            <ProjectLinks></ProjectLinks>
          </OtherTop>
          <ProjectTitle>Other 1</ProjectTitle>
          <ProjectP>hello my name is jeff, this is my project</ProjectP>
          <ProjectTech>deez nutz</ProjectTech>
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
const FeaturedH0 = styled.h4``

const ProjectTitle = styled.h1``

const ProjectP = styled.p``

const ProjectTech = styled.p`
  font-family: "Source Code Pro";
`

const ProjectLinks = styled.div``

const OtherTitle = styled.h2``

const OtherProjects = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ProjectCard = styled.div`
  background-color: red;
`

const OtherTop = styled.div``
