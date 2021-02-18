import React from 'react'
import styled from 'styled-components'

import FeatureCard from '../FeatureCard'

import wbs1 from '../../../../img/wsb1.png'
import wbs2 from '../../../../img/wsb2.png'
import wbs3 from '../../../../img/wsb3.png'

  

const Features: React.FC = () => {

  return (
    <>
    <StyledFeatures>
      <FeatureCard 
      img={wbs1} 
      title='TRADE LIKE A TRUE DEGEN' 
      text='WSB provides you with the tools to trade like a true degen, farm WSB and more' />
      <FeatureCard 
      img={wbs2} 
      title='DIAMOND HANDS ONLY' 
      text='If you HODL WSB you get the tendies, Do not sell your WSB to the suits!'/>
      <FeatureCard 
      img={wbs3} 
      title='A PROJECT BY SATOSHI STREET BETS COMMUNITY' 
      text='We’re all in this together retards, we will HODL until the end'/>
    </StyledFeatures>
    </>
  );
};


const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 1 / 3;
  gap: 16px;
  margin: 120px 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

export default Features;
