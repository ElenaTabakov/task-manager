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
    color:${({theme}) => theme.primary}
  }
form{
  margin: 15px 0;
  }

`;
