import React from 'react';
import { Link } from 'react-router-dom';
import  *  as S from "../Screens/Pages.styles";

export const Register = () => {
  return (
    <S.PageContainer>
        <h2>Register</h2>
        <Link to='/login'>Login</Link>
    </S.PageContainer>
  )
}
