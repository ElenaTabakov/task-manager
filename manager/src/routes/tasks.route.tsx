import Tasks from "../screens/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../screens/Pages.styles";
import { useAuth } from "../hooks/use-auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser, User } from "../store/slices/usersSlice";
import CustomCalendar from "../sharedComponents/Calendar/CustomCalendar";
import { HeaderProps } from "../sharedComponents/Header/Header";
import { Grid, ScrollArea } from "@mantine/core";
import { Wrapper } from "../styles/theme";

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
        <Wrapper marginTop={15}>
          <h2 className="main-title">Hello {user.name} </h2>
          <Grid>
            <S.ColBorder span={5} className={"borderRight"}>
              <CustomCalendar
                setDateValue={setDateValue}
                dateValue={dateValue}
              />
            </S.ColBorder>
            <Grid.Col span={7} className={"rightSide"}>
              <h3>{`${dateValue.getDate()} ${dateValue.toLocaleString(
                "default",
                { month: "long" }
              )} ${dateValue.getFullYear()}, ${days[dateValue.getDay()]}`}</h3>
              <S.TasksWrapper
                // style={{  height: 200 }}
                type="always"
                // styles={(theme) => ({
                //   scrollbar: {
                //     "&, &:hover": {
                //       background:
                //         theme.colorScheme === "dark"
                //           ? theme.colors.dark[6]
                //           : theme.colors.gray[0],
                //     },

                //     '&[data-orientation="vertical"] .mantine-ScrollArea-thumb':
                //       {
                //         backgroundColor: theme.colors.dark[6],
                //       }
                //   },

                //   corner: {
                //     opacity: 1,
                //     background:
                //       theme.colorScheme === "dark"
                //         ? theme.colors.dark[6]
                //         : theme.colors.gray[0],
                //   },
                // })}
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
