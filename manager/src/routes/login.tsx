import { useEffect } from "react";
import LoginForm from "../sharedComponents/FormElements/LoginForm";
import * as S from "../Screens/Pages.styles";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Login = () => {
  // const { isAuth, users} = useAuth();
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);
  useEffect(() => {  
    console.log( isAuth );
    if ( isAuth == true){
      navigate('/tasks');
  } 

}, []);
  useEffect(() => {  
    console.log( isAuth );
    if ( isAuth == true){
      navigate('/tasks');
  } 

}, [isAuth]);

  return (
    <S.PageContainer>
      <h2>Login</h2>

      <LoginForm loginBtnText="Log in" />
      <Link to="/register"> Register</Link>
    </S.PageContainer>
  );
};

export default Login;
