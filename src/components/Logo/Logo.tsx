import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/img/farmer.png';
import Layerx from '../../icons/layerx'

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <img src={logo} height="40" style={{ marginTop: -4 }}/>
      <StyledLink href="/">Farming WSB</StyledLink>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[100]};
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  margin-left: ${(props) => props.theme.spacing[2]}px;
`;

export default Logo;
