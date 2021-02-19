import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/farm/WSBETHPool">
        <StyledButton>
          Farm
        </StyledButton>
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${props => props.theme.color.white};
  font-weight: 700;
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
  &.active {
    color: ${props => props.theme.color.white};
  }
`

const StyledButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 100px;
  background-color: #FF0000;
  color: #FFFFFF;
  font-size: 14px;
  border: 0;
  outline: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 60px;
    font-size: 12px;
    margin-top: -5px;
  }
`

export default Nav