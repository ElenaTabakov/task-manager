import LoginForm from "../sharedComponents/FormElements/LoginForm";
import  *  as S from "../Screens/Pages.styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../sharedComponents/Button/Button";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/usersSlice";

const Login = () => {

  const dispatch = useDispatch();
  const { id, isAuth, email } = useAuth();
  const handleLogout = () => {
    dispatch(removeUser()) ;
  };

  return (
    <S.PageContainer>
      <h2>Login</h2>
      {isAuth ? <Button type="button" size="medium" onClick={handleLogout}>Logout</Button> : <LoginForm loginBtnText="Log in" />}    
       <Link  to='/register'> Register</Link>
    </S.PageContainer>
  )
};

export default Login;
