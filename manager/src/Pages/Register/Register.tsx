import React from "react";
import { Link } from "react-router-dom";
import * as S from "../../sharedStyles/global.styles";
import { Wrapper } from "../../styles/theme";
import RegisterForm from "./components/RegisterForm";

export const Register = () => {
  return (
    <S.PageContainer>
      <Wrapper marginTop={50} marginBottom={0}>
      <h2>Register</h2>
      <RegisterForm registerBtnText="Send" />
      <Link to="/login">Login</Link>
      </Wrapper>
    </S.PageContainer>
  );
};
