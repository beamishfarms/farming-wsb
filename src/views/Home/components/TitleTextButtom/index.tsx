import React from 'react'

import styled from 'styled-components'

interface TitleTextButtom {
  title?: string,
  text?: string
  button?: string
}

const TitleTextButtom: React.FC<TitleTextButtom> = (props) => {

  return (
    <div>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledText>{props.text}</StyledText>
      <StyledButton>{props.button}</StyledButton>
    </div>
  );
};
 
const StyledTitle = styled.h3`
  
`
const StyledText = styled.p`
  
`
const StyledButton = styled.button`
  
`
export default TitleTextButtom;
