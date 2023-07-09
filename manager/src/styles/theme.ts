import styled from "styled-components";


export type LightTheme = typeof lightTheme;
export type DarkTheme = typeof darkTheme;

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#999',
  background: '#363537',
  primary: "#ff7d91",
  secondary: '#676bf1',
  pink: '#E25CD2',
  yellow: '#FFC75B',
  link: '#FF9273',
  purple:'#B1A9DF'
}
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#f1f1f1',
  background: '#999',
  primary: "#22a5a5",
  secondary: '#386E90',
  link: '#21c6c6',
  pink: '#95B1B0',
  yellow: '#C78567',
  purple:'#B1A9DF'
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
  border-radius: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  padding: 1rem;
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
  }
`;
