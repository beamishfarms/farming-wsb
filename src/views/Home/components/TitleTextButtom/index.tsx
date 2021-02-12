import React from 'react'
import { Link } from 'react-router-dom';
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
      <Link to='/farm' >
        <StyledButton >
        
         {props.button}
        
        </StyledButton>
      </Link>
    </div>
  );
};
 
const StyledTitle = styled.h3`
  font-size: 50px;
  margin: 0;
  width: 480px;
  @media (max-width: 768px) {
    width: 90%;
    
  }
`
const StyledText = styled.p`
font-size: 18px;
width: 480px;
@media (max-width: 768px) {
  width: 90%;
  
}
`
const StyledButton = styled.button`
  height: 60px;
  width: 180px;
  border-radius: 100px;
  background-color: #FF0000;
  color: #FFFFFF;
  font-size: 18px;
  border: 0;
  outline: 0;
  cursor: pointer;
`
export default TitleTextButtom;
