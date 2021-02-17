import React from 'react'
import styled from 'styled-components'

import footer from '../../../../img/footer.png'
import FooterIcon from '../../../../icons/footericon'



  

const Footer: React.FC = () => {

  return (
    <>
      <StyledFooter style={{backgroundImage: `url(${footer})`}}> 
        <Container>
          <StyledTitle>Contract Audited By</StyledTitle>
          
          <StyledIcon >
            <a style={{margin: '0 auto'}} href="https://chainsulting.de">

           <FooterIcon style={{width: '100%'}} />
            </a>
          </StyledIcon>
          
        </Container>
      </StyledFooter>
      <CopyRight>Copyright 2021 WSB. All Rights Reserved.</CopyRight>
    </>
  );
};

const StyledTitle = styled.h3`
  font-size: 36px;
  text-align: center;
  
`
const StyledText = styled.p`
  font-size: 18px;
  width: 700px;
  text-align: center;
  margin: 0 auto 50px auto;
  @media (max-width: 768px) {
    width: 90%;

  }
`
const StyledText2 = styled.p`
  font-size: 18px;
  width: 800px;
  text-align: center;
  margin: 50px auto 50px auto;
  color: #B4B4B4;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`
const StyledIcon = styled.div`
  display: flex;
  alignItems: center
  justifyContent: center;
  @media (max-width: 768px) {

  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    
  }

`
const CopyRight = styled.p`
  font-size: 18px;
  color: rgba(180, 180, 180, 0.5);
  text-align: center;
  padding: 20px 0;
  margin: 0 auto;
  width: 90%;
`


export default Footer;
