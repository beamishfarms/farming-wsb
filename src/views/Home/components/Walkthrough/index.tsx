import React from 'react'
import styled from 'styled-components'


  

const Walkthrough: React.FC = () => {

  return (
    <>
      <Container>
        <StyledTitle>Walkthrough</StyledTitle>
        <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/4KGsgpFiswQ" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        title='Porter Robinson'
        ></iframe>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const StyledTitle = styled.h3`
  
`
const StyledText = styled.p`
  
`

export default Walkthrough;
