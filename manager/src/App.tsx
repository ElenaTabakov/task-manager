import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "./Screens/Pages.styles";
import Header from "./sharedComponents/Header/Header";
import * as St from "./styles/theme";
import styled, { ThemeProvider, useTheme } from "styled-components";
import {GlobalStyles} from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";
import { useState } from "react";
import Login from "./routes/login";
import TasksList from "./routes/tasks";
import { Register } from "./routes/register";

function App() {
  const [theme, setTheme] = useState(true);
  const changeThemeHandler = () => {
    setTheme(!theme);
    console.log('theme' + theme);
  };
  
  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <St.Main>
        <S.PageContainer>
          
          <BrowserRouter>
          <Header setTheme={changeThemeHandler} />
            <Routes>
              <Route path="/" />
              <Route path="login" element={<Login />} />
              <Route path="tasks" element={<TasksList setTheme={setTheme} />} />
              <Route path="register" element={<Register />} />
              {/* <Route path="/"  />
              <Route path="login" />
              <Route path="tasks"  />
              <Route path="register" /> */}
              {/* <Route path="*" element={<p>There's nothing here!</p>} /> */}
            </Routes>
            
          </BrowserRouter>
        </S.PageContainer>
      </St.Main>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
