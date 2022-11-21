import Tasks from "../Screens/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../Screens/Pages.styles";
import * as St from "../sharedComponents/Button/Button.styles";
import { useAuth } from "../hooks/use-auth";
import Button from "../sharedComponents/Button/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/slices/usersSlice";
import CustomCalendar from "../sharedComponents/Calendar/CustomCalendar";
import Header from "../sharedComponents/Header/Header";
import { HeaderProps } from "../sharedComponents/Header/Header";
import { Grid } from "@mantine/core";
import { Wrapper } from "../styles/theme";

export default function TasksList({ setTheme }: HeaderProps) {
  // const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);

  const dispatch = useDispatch();
  const { isAuth, users } = useAuth();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, [isAuth]);

  console.log(users);
  return (
    <S.PageContainer>
      {/* <Header setTheme={setTheme}/> */}
      <h2>{/* Tasks of user id {id} email: {email} */}</h2>
      {isAuth ? (
        <Wrapper marginTop={50}>
          {/* <Button type="button" size="medium" onClick={handleLogout}>
            Logout
          </Button> */}
          <Grid>
            <Grid.Col span={5}><CustomCalendar /></Grid.Col>
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
