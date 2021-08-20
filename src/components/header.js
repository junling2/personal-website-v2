import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GoThreeBars } from "react-icons/go"
import { menuData } from "./data/menuData"
import { Button } from "./button"

const Header = () => {
  return (
    <Nav>
      <NavLogo to="/">JQ</NavLogo>
      <Bars />
      <NavMenu>
        {menuData.map((menuItem, index) => (
          <NavLink to={menuItem.link} key={index}>
            {menuItem.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button round="true" to="/resume.pdf">
          Résumé
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: sticky;
  z-index: 100;
`
const NavLogo = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-left: 1rem;
  font-size: 2.2rem;
  height: 100%;
  cursor: pointer;
`

const NavLink = styled(Link)`
  position: relative;
  font-size: 1.2rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 100%;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: white;
    opacity: 1;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-110%, 0, 0);
  }

  &:hover::after,
  &:focus::after {
    transform: translate3d(0, 0, 0);
  }
`
const Bars = styled(GoThreeBars)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  margin-left: 3.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
