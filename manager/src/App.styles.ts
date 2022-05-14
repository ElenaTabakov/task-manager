import styled  from "styled-components";

export const MainTitle = styled.div< {newColor: boolean}>`
   color: ${({newColor}) =>  newColor ? ' red' : 'green'};
`

export const Button = styled.button<{newColor: boolean}>`
  ${({newColor}) => newColor ? 'font-size :2rem; background:red' : 'font-size :1rem;background:black; color:#fff'}
`

export const Cube = styled.div<{size: number}>`
  background: blue;
  height: ${({size}) =>  `${size}px`};
  width: ${({size}) =>  `${size}px`};
`
