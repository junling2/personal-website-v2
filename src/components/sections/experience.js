import React from "react"
import styled from "styled-components"
import { MdWork, MdSchool } from "react-icons/md"

const Experience = () => {
  return (
    <WorkContainer>
      <WorkHeader>My Experiences</WorkHeader>
      <WorkTimeline>
        <Lines>
          <ShortLine />
          <WorkIcon />
          <Line />
          <WorkIcon />
          <Line />
          <WorkIcon />
          <Line />
          <SchoolIcon />
          <ShortLine />
        </Lines>
        <Entries>
          <Entry>
            <EntryTitle>Release QA Engineer @ Fortinet</EntryTitle>
            <EntryDate>Jul 2019 - Present</EntryDate>
            <EntryContent>
              did some stuff, kjauifhiawfnfiwnfinfisdnfjfn
              ajsnfsnfsndfkjnfjlskanfkjsanfjsf
              ajsfdnklsndfksanfakslnfdkalnfkanfklajnf.
            </EntryContent>
          </Entry>
          <Entry>
            <EntryTitle>Release QA Engineer @ Fortinet</EntryTitle>
            <EntryDate>Jul 2019 - Present</EntryDate>
            <EntryContent>
              did some stuff, kjauifhiawfnfiwnfinfisdnfjfn
              ajsnfsnfsndfkjnfjlskanfkjsanfjsf
              ajsfdnklsndfksanfakslnfdkalnfkanfklajnf.
            </EntryContent>
          </Entry>
          <Entry>
            <EntryTitle>Release QA Engineer @ Fortinet</EntryTitle>
            <EntryDate>Jul 2019 - Present</EntryDate>
            <EntryContent>
              did some stuff, kjauifhiawfnfiwnfinfisdnfjfn
              ajsnfsnfsndfkjnfjlskanfkjsanfjsf
              ajsfdnklsndfksanfakslnfdkalnfkanfklajnf.
            </EntryContent>
          </Entry>
          <Entry>
            <EntryTitle>Release QA Engineer @ Fortinet</EntryTitle>
            <EntryDate>Jul 2019 - Present</EntryDate>
            <EntryContent>
              did some stuff, kjauifhiawfnfiwnfinfisdnfjfn
              ajsnfsnfsndfkjnfjlskanfkjsanfjsf
              ajsfdnklsndfksanfakslnfdkalnfkanfklajnf.
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
  font-size: 3rem;
  font-weight: 900;
  margin-top: 6rem;
  margin-bottom: 1.3rem;
  letter-spacing: 1px;
`
const WorkTimeline = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

const Lines = styled.div`
  background: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ShortLine = styled.div`
  background: #fff5ee;
  width: 4px;
  border-radius: 2px;
  height: 50px;
`
const Line = styled.div`
  background: #fff5ee;
  width: 4px;
  border-radius: 2px;
  height: 150px;
`
const Entries = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
`
const Entry = styled.div`
  background: green;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-top: 2rem;
`

const EntryTitle = styled.h3`
  color: #1e90ff;
  margin-top: 1rem;
  margin-left: 1rem;
`
const EntryDate = styled.h4`
  color: grey;
  margin-top: 0.5rem;
  margin-left: 1rem;
`

const EntryContent = styled.p`
  color: grey;
  margin-left: 1rem;
  margin-top: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`

const WorkIcon = styled(MdWork)`
  color: #1e90ff;
  background: #fff5ee;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  padding: 10px 10px;
`
const SchoolIcon = styled(MdSchool)`
  color: #1e90ff;
  background: #fff5ee;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  padding: 10px 10px;
`
