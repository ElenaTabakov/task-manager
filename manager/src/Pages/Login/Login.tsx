import { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import * as S from "../../sharedStyles/global.styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../../styles/theme";

const Login = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  // const user = useSelector((state: RootState) => state.userSlice.users);
  //   useEffect(() => {
  //     if (isAuth){
  //       navigate('/tasks');
  //   }
  // }, []);

  useEffect(() => {
    console.log(isAuth);
    if (isAuth === true) {
      navigate("/tasks");
    }
  }, [isAuth, navigate]);

  return (
    <S.PageContainer>
      <Wrapper marginTop={50} marginBottom={0}>
        <h2>Login</h2>
        <LoginForm loginBtnText="Log in" />
        <Link to="/register"> Register</Link>
      </Wrapper>
    </S.PageContainer>
  );
};

export default Login;