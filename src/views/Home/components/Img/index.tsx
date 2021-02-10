import React from 'react'
import styled from 'styled-components'


interface ImgProps {
  src?: string,

}

const Img: React.FC<ImgProps> = (props) => {

  return (
    <>
      <img src={props.src} alt={props.src} />
    </>
  );
};

// const StyledImg = styled.img`
//   min-width: 190px  
//   min-height: 190px
// `

export default Img;
