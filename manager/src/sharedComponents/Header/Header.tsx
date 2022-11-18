import React from "react";
import { Link, Router } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { Wrapper } from "../../styles/theme";
import { logoutUser } from "../../store/slices/usersSlice";
import { Grid, Switch, Group, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export interface HeaderProps {
  setTheme : React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({setTheme} : HeaderProps) => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Wrapper>
      <Grid  align="center">
        <Grid.Col span={9}  >
          
          <Link to="/">Home</Link>
          {isAuth ? (
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link to="/tasks">Tasks</Link>
         
        </Grid.Col>
        <Grid.Col span={3}>
          <Group position="right">
            <Switch
              size="md" 
              color="dark"          
              onLabel={<IconSun size={22} stroke={2.5} color={"yellow"} />}
              offLabel={<IconMoonStars size={22} stroke={2.5} color={"darkblue"} />}
              onChange={() => {setTheme((prev) => !prev)}}
            />
          </Group>
        </Grid.Col>
      </Grid>
    </Wrapper>
  );
};

export default Header;
