import React from 'react'
import styled from 'styled-components'


interface ImgProps {
  src?: string,

}

const Img: React.FC<ImgProps> = (props) => {

  return (
    <>
    <StyledImg src={props.src} alt={props.src}/>
    </>
  );
};

const StyledImg = styled.img`
  width: 100%;
  max-width: 800px;
  max-height: 700px;
`

export default Img;
