import React from "react"
import styled from "styled-components"
import { MdWork, MdSchool } from "react-icons/md"

const Experience = () => {
  return (
    <WorkContainer id="experience">
      <WorkHeader
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="600"
      >
        My Experiences
      </WorkHeader>
      <WorkTimeline>
        <Entries>
          <Entry
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <WorkIcon />
            <EntryTitle>
              Test Automation Engineer <span>@ Fortinet</span>
            </EntryTitle>
            <EntryDate>Jul 2019 - Present</EntryDate>
            <EntryContent>
              Designed and implemented GUI testing framework for FortiClient
              firewall application and security fabric devices.
            </EntryContent>
          </Entry>
          <Entry
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <WorkIcon />
            <EntryTitle>
              Network Engineer Co-op <span>@ Telus Communications</span>
            </EntryTitle>
            <EntryDate>Jan 2018 - Sep 2018</EntryDate>
            <EntryContent>
              Assisted in creating network automation scripts and documented
              best practices for utilizing third party applications to
              orchestrate performance testing.
            </EntryContent>
          </Entry>
          <Entry
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <WorkIcon />
            <EntryTitle>
              Electrical Engineer Co-op <span>@ BC Hydro</span>
            </EntryTitle>
            <EntryDate>Sep 2017 - Jan 2018</EntryDate>
            <EntryContent>
              Performed engineering safety analysis and evaluation of proposed
              construction designs in close proximity to existing electrical
              transmission systems.
            </EntryContent>
          </Entry>
          <Entry
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <SchoolIcon />
            <EntryTitle>
              BSc. in Electrical Engineering{" "}
              <span>@ University of Alberta</span>
            </EntryTitle>
            <EntryDate>2014 - 2019</EntryDate>
            <EntryContent>
              5 year co-op program with selected courses in Embedded Systems,
              Intelligent Systems, Data Communications, and Power Systems.
              Capstone project incorporated a data communication system with a
              flying drone to aid in early detection of forest fires in Alberta.
            </EntryContent>
          </Entry>
        </Entries>
      </WorkTimeline>
    </WorkContainer>
  )
}

export default Experience

const WorkContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`

const WorkHeader = styled.h1`
  color: #fff5ee;
  font-size: clamp(1rem, 6vw, 3rem);
  font-weight: 900;
  margin-top: 5rem;
  margin-bottom: 1.3rem;
  letter-spacing: 1px;
`
const WorkTimeline = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    background: #fff5ee;
    color: #fff5ee;
    width: 3px;
    height: 125%;
    border-radius: 2px;
    transform: translateX(-30px) translateY(30px);

    @media screen and (max-width: 627px) {
      display: none;
    }
  }
`
const Entry = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const EntryTitle = styled.h3`
  color: #1e90ff;
  margin-top: 1rem;
  margin-left: 1rem;

  span {
    color: #d64161;
  }
`
const EntryDate = styled.h4`
  color: grey;
  margin-top: 0.5rem;
  font-family: "Source Code Pro";
  margin-left: 1rem;
`

const EntryContent = styled.p`
  color: #fff5ee;
  margin-left: 1rem;
  margin-top: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`

const WorkIcon = styled(MdWork)`
  position: absolute;
  transform: translateX(-51px);
  color: #1e90ff;
  background: #fff5ee;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  padding: 10px 10px;

  @media screen and (max-width: 627px) {
    display: none;
  }
`
const SchoolIcon = styled(MdSchool)`
  position: absolute;
  transform: translateX(-51px);
  color: #1e90ff;
  background: #fff5ee;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  padding: 10px 10px;

  @media screen and (max-width: 627px) {
    display: none;
  }
`
