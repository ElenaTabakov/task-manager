import styled  from "styled-components";

export const MainTitle = styled.div< {newColor: boolean}>`
   color: ${({newColor}) =>  newColor ? ' red' : 'green'};
`

export const Button = styled.button<{newColor: boolean}>`
  ${({newColor}) => newColor ? 'font-size :2rem; background:red' : 'font-size :1rem;background:black; color:#fff'}
`

export const Cube = styled.div<{curHeight: boolean}>`
 ${({curHeight}) => curHeight ? 'height: 100px; width :100px;' : 'height:50px; width:50px;' }
  //  height:50px;
  // width:50px;
  background: blue;
`