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
      title='TITLE HERE' 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue non dui volutpat sagittis. Ut imperdiet sapien ut auctor mattis.' />
      <FeatureCard 
      img={wbs2} 
      title='TITLE HERE' 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue non dui volutpat sagittis. Ut imperdiet sapien ut auctor mattis.'/>
      <FeatureCard 
      img={wbs3} 
      title='TITLE HERE' 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue non dui volutpat sagittis. Ut imperdiet sapien ut auctor mattis.'/>
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
`

export default Features;
