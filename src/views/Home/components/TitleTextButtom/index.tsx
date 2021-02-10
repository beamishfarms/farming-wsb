import React from 'react'

import styled from 'styled-components'

  

const TitleTextButtom: React.FC = (props) => {

  return (
    <div>
      <StyledTitle>Title</StyledTitle>
      <StyledText>Text</StyledText>
      <StyledButton>Button</StyledButton>
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
