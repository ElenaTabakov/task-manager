import Tasks from "../Screens/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../Screens/Pages.styles";
import { useAuth } from "../hooks/use-auth";
import { useEffect, useState } from "react";
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
  const currentDay = new Date();
  const d = currentDay.getDate();
  const dd = d < 10 ? '0' + d : d;
  const m = currentDay.getMonth() + 1;
  const mm = m < 10 ? '0' + m : m;
  const y = currentDay.getFullYear();
  const fullDate =  mm + '-' + dd + '-' + y ;
  // console.log(fullDate);


  const [dateValue, setDateValue] = useState<string>(fullDate);

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
            <S.ColBorder span={5} className={'borderRight'}><CustomCalendar setDateValue={setDateValue} dateValue={dateValue}/></S.ColBorder>
            <Grid.Col span={7}><Tasks dateValue = {dateValue}/></Grid.Col>
          </Grid>
        </Wrapper>
      ) : (
        <Navigate to="/login" />
      )}
      {/* <Navigate to="/" /> */}
    </S.PageContainer>
  );
}
