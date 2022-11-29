import Tasks from "../Screens/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../Screens/Pages.styles";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser, User } from "../store/slices/usersSlice";
import CustomCalendar from "../sharedComponents/Calendar/CustomCalendar";
import { HeaderProps } from "../sharedComponents/Header/Header";
import { Grid } from "@mantine/core";
import { Wrapper } from "../styles/theme";
import { LightTheme, DarkTheme } from "../styles/theme";

export default function TasksList({ setTheme }: HeaderProps) {
  // const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);
  const userEmail = useSelector((state: RootState) => state.userSlice.userEmail);
  const dispatch = useDispatch();
  const { isAuth , user } = useAuth();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, [isAuth]);

  
  return (
    <S.PageContainer>
      {/* <Header setTheme={setTheme}/> */}
     
      {isAuth ? (
        <Wrapper marginTop={50}>
           <h2>Tasks of user {user.name} </h2>
    
          {/* <Button type="button" size="medium" onClick={handleLogout}>
            Logout
          </Button> */}
          <Grid>
            <S.ColBorder span={5} className={'borderRight'}><CustomCalendar /></S.ColBorder>
            <Grid.Col span={7}><Tasks /></Grid.Col>
          </Grid>
        </Wrapper>
      ) : (
        <Navigate to="/login" />
      )}
      {/* <Navigate to="/" /> */}
    </S.PageContainer>
  );
}
