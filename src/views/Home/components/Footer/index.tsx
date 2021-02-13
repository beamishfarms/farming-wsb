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
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText>
          <StyledIcon >
           <FooterIcon style={{width: '100%'}} />
          </StyledIcon>
          <StyledText2 >* license structure is subject to change as per the needs and wants of the market time to time. ** Referring to the ongoing 150-day Rewards for Holders and LPs. Sniper will be more expensive.</StyledText2>
        </Container>
      </StyledFooter>
      <CopyRight>Copyright © 2020 NEX. All Rights Reserved.</CopyRight>
    </>
  );
};

const StyledTitle = styled.h3`
  font-size: 36px;
  text-align: center;
  padding-top: 160px;
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
