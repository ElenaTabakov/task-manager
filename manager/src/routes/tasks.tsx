import Tasks from "../Screens/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../Screens/Pages.styles";
import * as St from "../sharedComponents/Button/Button.styles";
import { useAuth } from "../hooks/use-auth";
import Button from "../sharedComponents/Button/Button";
import { removeUser } from "../store/slices/usersSlice";
import { useEffect } from "react";

export default function TasksList() {
  // const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);

  const dispatch = useDispatch();
  const { id, isAuth, email } = useAuth();
  const handleLogout = () => {
    dispatch(removeUser()) ;
  };

  // useEffect(() => {
  //   if ( isAuth === true){

  //     dispatch(removeUser) 
  // } 
     
  // },[isAuth]);

  return (
    <S.PageContainer>
      <h2>
        Tasks of user id {id} email: {email}
      </h2>
      {isAuth ? (
        <>
          <Button type="button" size="medium" onClick={handleLogout}>
            Logout
          </Button>
          <Tasks />
          
        </>
      ) : (
        <Navigate to="/login" />
      )}
      {/* <Navigate to="/" /> */}
    </S.PageContainer>
  );
}
