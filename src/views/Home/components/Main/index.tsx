import React from 'react'
import styled from 'styled-components'
import Img from '../Img'
import TitleTextButtom from '../TitleTextButtom'

import wsblanding from '../../../../img/wsblanding.png'

  

const Main: React.FC = () => {

  return (
    <>
      <StyledMain>
        <StyledTitle>Getting Started</StyledTitle>
        <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText>
        <Grid>
          <TitleTextButtom 
          title='AGGREGATOR' 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue non dui volutpat sagittis. Ut imperdiet sapien ut auctor mattis. Mauris volutpat sed quam fringilla auctor. Mauris convallis sapien at tincidunt sollicitudin. Quisque quis elementum tellus. Integer molestie commodo mi et accumsan. Phasellus egestas, quam nec cursus rhoncus, arcu ipsum lacinia turpis, sit amet aliquet nibh arcu sit amet erat. Fusce dictum ante in elementum ultricies.'
          button='GO TO APP'
          titlesize='24px'
          textsize='18px'
          textcolor='#B4B4B4'/>
          
          <Img src={wsblanding}/>
        </Grid>
      </StyledMain>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledTitle = styled.h3`
  font-size: 36px;
  text-align: center;
  margin: 0;
`
const StyledText = styled.p`
  font-size: 18px;
  color: #B4B4B4;
  width: 700px;
  text-align: center;
  margin: 13px auto 50px auto;
`

const StyledMain = styled.main`
  width: 80%;
  margin: 0 auto 140px auto;
`

export default Main;
