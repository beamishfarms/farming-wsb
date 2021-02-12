import React from 'react'
import styled from 'styled-components'

import cross from '../../../../img/cross.png'

  

const Walkthrough: React.FC = () => {

  return (
    <>
    <StyledWalkthrough style={{backgroundImage: `url(${cross})`}}>

    
      <Container>
        <StyledTitle>Walkthrough</StyledTitle>
        <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText>
        <StyledIframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/4KGsgpFiswQ" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        title='Porter Robinson'
        ></StyledIframe>
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

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    
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
  width: 90vw;

}
`

export default Walkthrough;
