import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as S from "./screens/Pages.styles";
import Header from "./sharedComponents/Header/Header";
import * as St from "./styles/theme";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";
import { useState } from "react";
import Login from "./routes/login.route";
import TasksList from "./routes/tasks.route";
import { Register } from "./routes/register.route";

function App() {
  const [theme, setTheme] = useState(true);
  const changeThemeHandler = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <St.Main>
        <S.PageContainer>
          <BrowserRouter>
            <Header setTheme={changeThemeHandler} />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="tasks" element={<TasksList setTheme={setTheme} />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </BrowserRouter>        
        </S.PageContainer>
      </St.Main>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
