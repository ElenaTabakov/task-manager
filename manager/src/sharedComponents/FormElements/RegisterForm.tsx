import { Formik } from "formik";
import React , { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button";
import * as S from "./Form.styled";
import Input from "./Input/Input";
import * as yup from "yup";
import { registerUser } from "../../store/slices/usersSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";



interface RegisterFormProps {
    registerBtnText: string;
}

const RegisterForm = ({registerBtnText} : RegisterFormProps) => {

  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const statusRegister = useSelector((state: RootState) => state.userSlice.statusRegister);
  const navigate = useNavigate();

  interface RegisterFormValues {
    email: string;
    password: string;
    name: string;
  }
  const validationSchema = yup.object().shape({
    name: yup.string().min(3, "Too short name").required("Name is required"),
    email: yup.string().email('Invilid email').required('Email is required'),
    password: yup.string().min(4, 'Min 4 symbols').required('Password is required')
  });

  useEffect(() => {
    if(statusRegister === 'succeeded') {
        navigate('/login');
    }
}, [statusRegister] )
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validateOnBlur
      onSubmit={(values: RegisterFormValues) => {    
         dispatch(registerUser({email: values.email, name: values.name, password: values.password}))  
         console.log( values.email, values.name, values.password) 
      }}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        dirty,
      }) => (
        <S.Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            onChange={handleChange}
            error={errors.name}
            value={values.name}
          ></Input>
          <Input
          autoComplete="off"
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            error={errors.email}
            value={values.email}
          ></Input>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={values.password}
            error={errors.password}
          ></Input>
          <Button
            type="submit"
            size="medium"
            disabled={!values.email || !values.password}
          >
            {registerBtnText}
          </Button>
          {/* {errorLogin && "Email or Password is incorrect"} */}
        </S.Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
