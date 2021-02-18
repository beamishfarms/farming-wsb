import React from 'react'
import styled from 'styled-components'

import cross from '../../../../img/cross.png'
import SocialNav from '../SocialNav'
import Telegram from '../../../../icons/red/Telegram.svg'
import Twitter from '../../../../icons/red/Twitter.svg'
import Discord from '../../../../icons/red/Discord.svg'  
import walkthrough from '../../../../img/walkthrough.jpg'
  

const Walkthrough: React.FC = () => {

  return (
    <>
    <StyledWalkthrough style={{backgroundImage: `url(${cross})`}}>

    
      <Container>
        <StyledTitle>Join our community</StyledTitle>
        {/* <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText> */}
        {/* <StyledIframe 
        width="100%" 
        height="720" 
        src="https://www.youtube.com/embed/4KGsgpFiswQ" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        title='Porter Robinson'
        ></StyledIframe> */}
        
        <StyledNavDiv >
          <img width='75%' src={Telegram} alt={Telegram} style={{}}/>
          <img width='75%' src={Twitter} alt={Twitter} />
          <img width='75%' src={Discord} alt={Discord} />
        </StyledNavDiv>
          {/* <img width='100%' src={walkthrough} alt="img"/> */}
       
        <div style={{ height: '150px'}}></div>
      </Container>
      </StyledWalkthrough>
    </>
  );
};

const StyledWalkthrough = styled.div`
backgroundImage: 'url(${cross})'
background-size: cover;
background-position: top left;
background-repeat: no-repeat;
`
const StyledNavDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap:50px;

margin: 150px auto;
width: 50%;
@media (max-width: 768px) {
  width: 90%;
  margin: 50px auto;
}

`

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const StyledTitle = styled.h3`
  font-size: 36px;
  text-align: center;
  margin: 0;
`
const StyledText = styled.p`
  color: #B4B4B4;
  width: 700px;
  text-align: center;
  margin: 0 auto 60px auto;
  @media (max-width: 768px) {
    width: 90%;
    
  }
`
const StyledIframe = styled.iframe`
@media (max-width: 768px) {
  width: 90%;
  min-height: 200px;
  height: 40vh;
}
`

export default Walkthrough;
