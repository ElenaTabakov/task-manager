import styled from "styled-components";
import { number } from "yup";

// export const theme = {
//   colors: {
//     primary: '#7986cb',
//     secondary: '#2b2b2b',
//     success: '#4caf50',
//     danger: '#f44336 ',

//     bg: '#E5E4E8',
//     font: '#19191B',
//   },

//   media: {
//     extraLarge: '(max-width: 1140px)',
//     large: '(max-width: 960px)',
//     medium: '(max-width: 720px)',
//     small: '(max-width: 540px)',
//   },

//   // in px
//   sizes: {
//     header: { height: 56 },
//     container: { width: 1200 },
//     footer: { height: 128 },
//     modal: { width: 540 },
//   },

//   // in ms
//   durations: {
//     ms300: 300,
//   },

//   // z-index
//   order: {
//     header: 50,
//     modal: 100,
//   },
// };

export type LightTheme = typeof lightTheme;
export type DarkTheme = typeof darkTheme;

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  primary: "#f86e6e",
  secondary: '#676bf1',
  link: '#676bf1',
}
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  primary: "#22a5a5",
  secondary: '#384444',
  link: '#21c6c6',
}

export interface WrapperProps  {
  marginTop? : number | 0;
  marginBottom? : number;
}

export const Main = styled.main`
  background: ${({ theme }) => theme.primary};
  background: linear-gradient(
    140deg,
    ${({ theme }) => theme.primary} 35%,
    ${({ theme }) => theme.secondary}  35%
  );
  min-height: 100vh;
  width: 100%;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
`;

export const Wrapper = styled.div<WrapperProps>`
  background:${({ theme }) => theme.body};
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  padding: 1.5rem 1rem;
  margin-top: ${({marginTop}) => `${marginTop}px` || 0}; 
  & a {
    margin: 0 5px;
    text-decoration: none;
    position: relative;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primary};

    &::after {
      content: "•";
      color: ${({ theme }) => theme.primary};
      font-size: 1.5rem;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translateX(-50%);
      pointer-events: none;
      transition: text-shadow 0.3s ease 0s, color 0.3s ease 0s;
      text-shadow: transparent 0px 0px;
      color: transparent;
    }
    &:hover {
      color: ${({ theme }) => theme.text};
      &::after {
        color: ${({ theme }) => theme.primary};
        text-shadow: 10px 0 ${({ theme }) => theme.primary}, -10px 0 ${({ theme }) => theme.primary};
      }
    }
    /* &:hover::after {
        color:#676bf1;
        text-shadow: 10px 0 #676bf1, -10px 0 #676bf1;
      } */
  }
`;
