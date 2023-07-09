import { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../../sharedStyles/global.styles";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { logoutUser, User } from "../../store/slices/usersSlice";
import CustomCalendar from "../../sharedComponents/Calendar/CustomCalendar";
import { HeaderProps } from "../../sharedComponents/Header/Header";
import { Grid, ScrollArea } from "@mantine/core";
import { Wrapper } from "../../styles/theme";

export default function TasksList({ setTheme }: HeaderProps) {
  const userEmail = useSelector(
    (state: RootState) => state.userSlice.userEmail
  );
  const dispatch = useDispatch();
  const { isAuth, user } = useAuth();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const navigate = useNavigate();

  const [dateValue, setDateValue] = useState<Date>(new Date());

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, [isAuth]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <S.PageContainer>
      {isAuth ? (
        <Wrapper marginTop={15} >
          <h2 className="main-title">Hello {user.name} </h2>
          <Grid gutterMd="xl">
            <S.ColBorder md={12} lg={4} className={"borderRight"}>
              <CustomCalendar
                setDateValue={setDateValue}
                dateValue={dateValue}
              />
            </S.ColBorder>
            <Grid.Col md={12} lg={8} className={"rightSide"} >
              <h3>{`${dateValue.getDate()} ${dateValue.toLocaleString(
                "default",
                { month: "long" }
              )} ${dateValue.getFullYear()}, ${days[dateValue.getDay()]}`}</h3>
              <S.TasksWrapper
                // style={{  height: 200 }}
                type="always"
                // mx="auto"
              >
                <Tasks dateValue={dateValue} />
              </S.TasksWrapper>
            </Grid.Col>
          </Grid>
        </Wrapper>
      ) : (
        <Navigate to="/login" />
      )}
    </S.PageContainer>
  );
}
