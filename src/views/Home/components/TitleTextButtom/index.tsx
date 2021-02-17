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
      <Link to='/farm' style={{textDecoration: 'none'}} >
        <StyledDiv>
        <StyledButton >
        
         {props.button}
        
        </StyledButton>
        </StyledDiv>
      </Link>
    </div>
  );
};
 
const StyledTitle = styled.h3`
  font-size: 50px;
  margin: 0;
  max-width: 650px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 41px;
    text-align: center;
  }
`
const StyledText = styled.p`
font-size: 18px;
width: 480px;
@media (max-width: 768px) {
  width: 90%;
  text-align: center;
  margin: 0 auto;
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
const StyledDiv = styled.div`
@media (max-width: 768px) {
  display: flex;
  justify-content: center;
}
`
export default TitleTextButtom;
