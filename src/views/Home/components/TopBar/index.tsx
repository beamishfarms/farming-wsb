import React from 'react'
import styled from 'styled-components'
import Logo from '../../../../components/Logo'
import Container from '../../../../components/Container'
import SocialNav from '../SocialNav'


import Nav from '../NavBar/Nav'



const TopBar: React.FC = () => {

  return (
    <>
      <StyledTopBar>
        <Container size="lg">
          <StyledTopBarInner>
            <div style={{ flex: 1 }}>
              <Logo />
            </div>
            <Nav />
            <SocialNav />
          </StyledTopBarInner>
        </Container>
        
      </StyledTopBar>
    </>
  );
};

const StyledTopBar = styled.div`
  background: #11171E;
  width: 100%;
  height: 75px;
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${props => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${props => props.theme.siteWidth}px;
  width: 100%;
`

export default TopBar;
