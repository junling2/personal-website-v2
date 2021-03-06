import React, { useState } from "react"
import styled from "styled-components"
import { GoThreeBars } from "react-icons/go"
import { menuData } from "./data/menuData"
import { Button } from "./button"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <Nav
      background={navbar ? "rgba(105,105,105,0.7)" : "transparent"}
      backdrop={navbar ? "blur(8px)" : ""}
    >
      <NavLogo to="/#hero">JQ</NavLogo>
      <Bars />
      <NavMenu
        data-sal="slide-down"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        {menuData.map((menuItem, index) => (
          <NavLink to={menuItem.link} key={index}>
            {menuItem.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn
        data-sal="slide-left"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <Button round="true" to="/resume">
          Résumé
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${props => props.background};
  backdrop-filter: ${props => props.backdrop};
  transition: background-color 1s, box-shadow 1s;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: sticky;
  top: 0;
  z-index: 100;
`
const NavLogo = styled(AnchorLink)`
  color: #fff5ee;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1.5rem;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: #1e90ff;
  }
`

const NavLink = styled(AnchorLink)`
  position: relative;
  font-size: 1rem;
  color: #fff5ee;
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
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1em;
    background-color: #fff5ee;
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
  color: #fff5ee;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-right: 1.4rem;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 5px;
  height: 100%;
  margin-left: 4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.nav`
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
