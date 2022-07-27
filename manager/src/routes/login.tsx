import LoginForm from "../sharedComponents/FormElements/LoginForm";
import  *  as S from "../Screens/Pages.styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <S.PageContainer>
      <h2>Login</h2>
      <LoginForm loginBtnText="Log in" />

       <Link  to='/register'> Register</Link>
    </S.PageContainer>
  )
};

export default Login;
