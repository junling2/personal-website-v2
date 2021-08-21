import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  border: 2px ridge #fff5ee;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "7px 15px")};
  color: #fff5ee;
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "4px" : "none")};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`
