import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "./sharedStyles/global.styles";
import Header from "./sharedComponents/Header/Header";
import * as St from "./styles/theme";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";
import { createContext, useState } from "react";
import Login from "./Pages/Login/Login";
import TasksList from "./Pages/Manager/Manager";
import { Register } from "./Pages/Register/Register";
import OnLogout from "./store/OnLogout";
import { Task } from "./Pages/Manager/components/Tasks/components/Task/Task.types";
import TaskContext from "./store/TaskContext";
import ProtectedRoute from "./sharedComponents/ProtectedRoute";
import { useSelector } from "react-redux";
import { userSlice } from "./store/slices/usersSlice";
import { RootState } from "./store/store";

function App() {
  const [theme, setTheme] = useState(true);
  const changeThemeHandler = () => {
    setTheme(!theme);
  };

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { isAuth } = useSelector((state: RootState) => state.userSlice);
  // const isLogged = userSlice.useSelector(isAuth);

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <TaskContext.Provider value={{ selectedTask, setSelectedTask }}>
        <St.Main>
          <S.PageContainer>
            <BrowserRouter>
              <OnLogout />
              <Header setTheme={changeThemeHandler} />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />

                <Route
                  path="tasks"
                  element={
                    <ProtectedRoute isLogged={isAuth}>
                      <TasksList setTheme={setTheme} />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route path="register" element={<Register />} />
              </Routes>
            </BrowserRouter>
          </S.PageContainer>
        </St.Main>
      </TaskContext.Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
