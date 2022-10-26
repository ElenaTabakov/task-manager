import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import Button from "../Button/Button";
import * as S from "./Form.styled";
import Input from "./Input/Input";
// import { setUser} from "../../store/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { loginUser } from "../../store/slices/usersSlice";

interface LoginFormProps {
  loginBtnText: string;
}

const LoginForm = ({ loginBtnText }: LoginFormProps) => {
  const [errorLogin, setErrorLogin] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const navigate = useNavigate();

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   const inputName = e.target.name;

  //   setInputValue((prevState) => {
  //     return { ...prevState, [inputName]: value };
  //   });
  //   setErrorMessage((prevState) => {
  //     return {
  //       ...prevState,
  //       [inputName]: "",
  //     };
  //   });
  //   if (!value) {
  //     setErrorMessage((prevState) => {
  //       return {
  //         ...prevState,
  //         [inputName]: "Your " + inputName + " is empty",
  //       };
  //     });
  //   }
  //   setErrorLogin(false);
  // };
  const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);

  console.log(".." + isAuth);

  useEffect(() => {
    if (isAuth === true) {
      navigate("/tasks");
      // console.log('useEffect =>' + isAuth);
      setErrorLogin(false);
      // console.log('Email or Password is incorrect USEEFFECT')
    }
  }, [isAuth]);

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Reuired')
  })
  interface LoginFormValues {
    email: string;
    password: string;
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={( values : LoginFormValues) => {
        dispatch(loginUser({email: values.email, password: values.password}));
        if (!isAuth) {
          setErrorLogin(true);       
        }
      }}

      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        isValid,
        dirty,

      }) => (
        <S.Form onSubmit={handleSubmit}> 
          <Input
            label = 'Email'
            type="text"
            placeholder="Email"
            name="email"
            // onChange={handleChange}
            // error={errors.email}
            // value={values.email}
          ></Input>
          <Input
            label = 'Password'
            type="password"
            placeholder="Password"
            name="password"
            // onChange={handleChange}
            // value={values.password}
            // error={errors.password}
          ></Input>
          <Button
            type="submit"
            size="medium"    
            disabled={!values.email || !values.password}
          >
            {loginBtnText}
          </Button>
          {errorLogin && "Email or Password is incorrect"}
        </S.Form>
      )}
    </Formik>
  );
};

export default LoginForm;
