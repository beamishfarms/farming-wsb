import React from 'react'
import styled from 'styled-components'
import Img from '../Img'
import TitleTextButtom from '../TitleTextButtom'

import wsblanding from '../../../../img/wsblanding.png'

  

const Main: React.FC = () => {

  return (
    <>
      <Container>
        <StyledTitle>Getting Started</StyledTitle>
        <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText>
        <Grid>
          <TitleTextButtom 
          title='Aggregator' 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue non dui volutpat sagittis. Ut imperdiet sapien ut auctor mattis. Mauris volutpat sed quam fringilla auctor. Mauris convallis sapien at tincidunt sollicitudin. Quisque quis elementum tellus. Integer molestie commodo mi et accumsan. Phasellus egestas, quam nec cursus rhoncus, arcu ipsum lacinia turpis, sit amet aliquet nibh arcu sit amet erat. Fusce dictum ante in elementum ultricies.'
          button='GO TO APP'/>
          <Img src={wsblanding}/>
        </Grid>
      </Container>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledTitle = styled.h3`
  
`
const StyledText = styled.p`
  
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default Main;
