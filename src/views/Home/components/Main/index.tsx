import React, { useState } from 'react'
import styled from 'styled-components'
import Img from '../Img'
import TitleTextButtom from '../TitleTextButtom'

import mobile from '../../../../img/mobile1@2x.png'
import dollar from '../../../../img/dollar.png'
import farm1 from '../../../../img/farm1.png'
import Background from '../../../../components/Background'



const Main: React.FC = () => {
  
  const [tab, setTab] = useState('agregattor')

  const buttonColor = () => {
    if (tab === 'agregattor'){
      return 'none'
    }else if (tab === 'farming'){
      return '#FF0000'
    }
  }
  const buttonColor2 = () => {
    if (tab === 'agregattor'){
      return '#FF0000'
    }else if (tab === 'farming'){
      return 'none'
    }
  }

  return (
    <>
      <StyledMain style={{backgroundImage: `url(${dollar})`}}>
        <StyledTitle>Getting Started</StyledTitle>
        <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula dolor ut suscipit.</StyledText>
          <StyledBar >
          <StyledRedBar onClick={() => setTab('agregattor')} style={{background: buttonColor2()}}>
            <StyledText style= {{color: '#FFFFFF' }}>Aggregator</StyledText>
          </StyledRedBar>
          <StyledRedBar onClick={() => setTab('farming')} style={{background: buttonColor() }}>

          <StyledText style= {{color: '#FFFFFF'}}>Farming</StyledText>
          </StyledRedBar>
        </StyledBar>
        {tab === 'agregattor' && 
        <Grid >
          <TitleTextButtom 
          title='AGGREGATOR' 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue non dui volutpat sagittis. Ut imperdiet sapien ut auctor mattis. Mauris volutpat sed quam fringilla auctor. Mauris convallis sapien at tincidunt sollicitudin. Quisque quis elementum tellus. Integer molestie commodo mi et accumsan. Phasellus egestas, quam nec cursus rhoncus, arcu ipsum lacinia turpis, sit amet aliquet nibh arcu sit amet erat. Fusce dictum ante in elementum ultricies.'
          button='GO TO APP'
          titlesize='24px'
          textsize='18px'
          textcolor='#B4B4B4'/>
          <StyledGrid>
            <Img src={mobile}/>
          </StyledGrid>
        </Grid> }
        {tab === 'farming' && 
        <Grid >
        <TitleTextButtom 
        title='FARMING' 
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue non dui volutpat sagittis. Ut imperdiet sapien ut auctor mattis. Mauris volutpat sed quam fringilla auctor. Mauris convallis sapien at tincidunt sollicitudin. Quisque quis elementum tellus. Integer molestie commodo mi et accumsan. Phasellus egestas, quam nec cursus rhoncus, arcu ipsum lacinia turpis, sit amet aliquet nibh arcu sit amet erat. Fusce dictum ante in elementum ultricies.'
        button='GO TO APP'
        titlesize='24px'
        textsize='18px'
        textcolor='#B4B4B4'/>
        <StyledGrid>
          <Img src={farm1}/>
        </StyledGrid>
      </Grid>}
      </StyledMain>
    </>
  );
};

const StyledGrid = styled.div`
  max-height: 680px;
  max-width: 400px;
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin: 0 0 50px 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
  }
`

const StyledTitle = styled.h3`
  font-size: 36px;
  text-align: center;
  margin: 0;
`
const StyledBar = styled.div`
  height: 60px;
  border-radius: 100px;
  background-color: #1C1919;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 0 50px 0;

`
const StyledRedBar = styled.div`
  height: 50px;
  border-radius: 100px;
  background-color: #FF0000;
  width: 50%;
  cursor: pointer;

`
const StyledText = styled.p`
  font-size: 18px;
  color: #B4B4B4;
  width: 700px;
  text-align: center;
  margin: 13px auto 50px auto;
  @media (max-width: 768px) {
    width: 90%;
    width: auto;
  }
`

const StyledMain = styled.main`
  width: 80%;
  margin: 0 auto 140px auto;
  backgroundImage: 'url(${dollar})';
  background-position: bottom right;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 90%;
    
  }
`

export default Main;
