import React from 'react'

import styled from 'styled-components'

interface TitleTextButtom {
  title?: string,
  text?: string
  button?: string
  titlesize?: string
  textsize?: string
  textcolor?: string
}

const TitleTextButtom: React.FC<TitleTextButtom> = (props) => {

  return (
    <div>
      <StyledTitle style={{fontSize:props.titlesize}}>{props.title}</StyledTitle>
      <StyledText style={{fontSize:props.textsize, color:props.textcolor}}>{props.text}</StyledText>
      <StyledButton>{props.button}</StyledButton>
    </div>
  );
};
 
const StyledTitle = styled.h3`
  font-size: 50px;
  margin: 0;
  width: 480px;
`
const StyledText = styled.p`
font-size: 18px;
width: 480px;
`
const StyledButton = styled.button`
  height: 60px;
  width: 180px;
  border-radius: 100px;
  background-color: #FF0000;
  color: #FFFFFF;
  font-size: 18px;
  border: 0;
`
export default TitleTextButtom;
