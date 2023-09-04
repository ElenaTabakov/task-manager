import { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../../sharedStyles/global.styles";
import { useAuth } from "../../hooks/use-auth";
import { logoutUser, User } from "../../store/slices/usersSlice";
import CustomCalendar from "../../sharedComponents/Calendar/CustomCalendar";
import { HeaderProps } from "../../sharedComponents/Header/Header";
import { Grid, ScrollArea } from "@mantine/core";
import { Wrapper } from "../../styles/theme";
import * as St from './Manager.styles';

export default function TasksList({ setTheme }: HeaderProps) {
  const userEmail = useSelector(
    (state: RootState) => state.userSlice.userEmail
  );
  const dispatch = useDispatch();
  const { isAuth, user } = useAuth();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const [dateValue, setDateValue] = useState<Date>(new Date());

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
        <Wrapper marginTop={15} >
          <St.ManagerHeader>
              <span className="main-title">Hello {user.name} </span>
              {`${dateValue.getDate()} ${dateValue.toLocaleString(
                "default",
                { month: "long" }
              )} ${dateValue.getFullYear()}, ${days[dateValue.getDay()]}`}
          </St.ManagerHeader>
          <Grid gutterMd="xl">
            <S.ColBorder md={12} lg={4} className={"borderRight"}>
              <CustomCalendar
                setDateValue={setDateValue}
                dateValue={dateValue}
              />
            </S.ColBorder>
            <Grid.Col md={12} lg={8} className={"rightSide"} >
              <S.TasksWrapper
                type="always"
              >
                <Tasks dateValue={dateValue} />
              </S.TasksWrapper>
            </Grid.Col>
          </Grid>
        </Wrapper>
    </S.PageContainer>
  );
}
