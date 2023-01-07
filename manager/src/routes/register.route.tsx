import React from 'react';
import { Link } from 'react-router-dom';
import  *  as S from "../screens/Pages.styles";
import RegisterForm from '../sharedComponents/FormElements/RegisterForm';

export const Register = () => {
  return (
    <S.PageContainer>
        <h2>Register</h2>
        <RegisterForm registerBtnText="Send"/>
        <Link to='/login'>Login</Link>
    </S.PageContainer>
  )
}
