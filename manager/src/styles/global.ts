import { createGlobalStyle, useTheme } from "styled-components";
import { LightTheme, DarkTheme } from "./theme";



export const GlobalStyles = createGlobalStyle<{theme: LightTheme | DarkTheme }>`
body {
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.50s linear; 
  }
h2{
    margin: 0;
    padding: 1.5rem 0;
    color:blueviolet;
    color:${({theme}) => theme.primary};
    &.main-title{
      color: #fff;
      background: ${({theme}) => theme.secondary};
      padding: 0.5rem 0;
      border-radius: 0.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  h3{
    margin: 0;
    padding: 1rem 0;
    color: ${({theme}) => theme.primary};  
  }
form{
  margin: 1rem 0;
  }

`;
