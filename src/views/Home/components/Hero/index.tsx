import React from 'react'
import styled from 'styled-components'
import TitleTextButtom from '../TitleTextButtom/'
import Img from '../Img'
import Features from '../Features'

import wsblanding from '../../../../img/wsblanding.png'
import background from '../../../../img/bgwsb1.png'

const Hero: React.FC = () => {

  return (
    <>
      <StyledHero style={{backgroundImage: `url(${background})`}}> 
      <Container>
        <Grid>
          <TitleTextButtom />
          <Img src={wsblanding}/>
          <Features />
        </Grid>
      </Container>
      </StyledHero>

    </>
  );
};

const StyledHero = styled.div`
backgroundImage: 'url(${background})'
background-size: cover;
background-position: bottom center;
background-repeat: no-repeat;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr auto;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`


export default Hero;