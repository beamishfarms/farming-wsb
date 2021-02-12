import React from 'react'
import styled from 'styled-components'


import Img from '../Img'


interface ImgProps {
  img?: string,
  title?: string,
  text?: string
}
  

const FeatureCard: React.FC<ImgProps> = (props) => {

  return (
    <>
      <StyledCard>
        <Flex>
          <div style={{width:'240px', height:'190px', marginTop:'-25px'}}>
            <Img src={props.img} />
          </div>
          
          <StyledTitle>{props.title}</StyledTitle>
          <StyledText >{props.text}</StyledText>
        </Flex>
      </StyledCard>
    </>
  );
};

const StyledTitle = styled.h3`
  
`
const StyledText = styled.p`
  width: 90%;
  margin: 0 auto;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center
`
const StyledCard = styled.div`
  background-color: #11171E;
  min-height: 332px;
  padding: 10px;
`


export default FeatureCard;
