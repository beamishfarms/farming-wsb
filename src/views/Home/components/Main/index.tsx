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
        <StyledTitle>Getting Started Has Never Been Easier</StyledTitle>
        <StyledText>Farming WSB token for LP providers on Uniswap WSB/ETH pool then locking UNI- V2 tokens</StyledText>
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
          title='Swap your tokens like a true degen on our new DEX aggregator' 
          text='Our branded DEX Aggregator provides you with the best price and liquidity routing by aggregating over 13 DEXs'
          button='GO TO APP'
          titlesize='24px'
          textsize='18px'
          textcolor='#B4B4B4'
          src='#'
          />
          <StyledGrid>
            <Img src={mobile}/>
          </StyledGrid>
        </Grid> }
        {tab === 'farming' && 
        <Grid >
        <TitleTextButtom 
        title='Farming made easy' 
        text='Farming WSB tokens is easy, all you have to do is provide liquidity on Uniswap for WSB/ETH pair and lock your UNI-V2 tokens in our farming pools'
        button='GO TO APP'
        titlesize='24px'
        textsize='18px'
        textcolor='#B4B4B4'
        src='/farm'
        />
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
