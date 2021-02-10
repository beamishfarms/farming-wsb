import React from 'react'
import styled from 'styled-components';
import background from "../../img/background.png";


const Background: React.FC = (props) => {
  return(
  <StyledBackground style={{backgroundColor: '#141B23'}}> 
    {props.children}
  </StyledBackground>

  )
}

const StyledBackground = styled.div`
  
`;

export default Background