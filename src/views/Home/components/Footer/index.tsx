import React from 'react'
import styled from 'styled-components'

import footer from '../../../../img/footer.png'
import FooterIcon from '../../../../icons/footericon'



  

const Footer: React.FC = () => {

  return (
    <>
      <StyledFooter style={{backgroundImage: `url(${footer})`}}> 
        <Container>
          <StyledTitle>Walkthrough</StyledTitle>
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText>
          <FooterIcon />
        </Container>
      </StyledFooter>
      
    </>
  );
};

const StyledTitle = styled.h3`
  
`
const StyledText = styled.p`
  
`

const StyledFooter = styled.div`
backgroundImage: 'url(${footer})'
background-size: cover;
background-position: bottom center;
background-repeat: no-repeat;
`

const Container = styled.div`
  width: 100%;
  height: 600px;
  margin: 0 auto;
`


export default Footer;
