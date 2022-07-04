import LoginForm from "../sharedComponents/FormElements/LoginForm";
import  *  as S from "../Screens/Pages.styles";

const Login = () => {
  return (
    <S.PageContainer>
      <h2>Login</h2>
      <LoginForm loginBtnText="Log in" />
    </S.PageContainer>
  )
};

export default Login;
