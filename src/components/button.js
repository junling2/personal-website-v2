import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: transparent;
  border: 2px ridge white;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #ffffff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "4px" : "none")};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`
