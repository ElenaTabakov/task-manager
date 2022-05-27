import styled  from "styled-components";

export const MainTitle = styled.div< {newColor: boolean}>`
   color: ${({newColor}) =>  newColor ? ' red' : 'green'};
`

// export const  Button = styled.button<{newColor: boolean}>`
//   ${({newColor}) => newColor ? 'font-size :2rem; background:red' : 'font-size :1rem;background:black; color:#fff'}
// `

export const Cube = styled.div<{size: {height:number, width: number}, bgColor: string}>`
  background: ${({bgColor}) => `${bgColor}`};
  height: ${({size}) =>  `${size.height}px`};
  width: ${({size}) =>  `${size.width}px`};
`
