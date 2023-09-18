import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import Button from "../../../sharedComponents/Button/Button";
import * as S from "../../../sharedComponents/FormElements/Form.styles";
import Input from "../../../sharedComponents/FormElements/Input/Input";
// import { setUser} from "../../store/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { loginUser } from "../../../store/slices/usersSlice";
import * as St from "../../../sharedComponents/FormElements/Form.styles";

interface LoginFormProps {
  loginBtnText: string;
}

const LoginForm = ({ loginBtnText }: LoginFormProps) => {
  const [errorLogin, setErrorLogin] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);

  console.log(".." + isAuth);

  useEffect(() => {
    if (isAuth === true) {
      navigate("/tasks");
      setErrorLogin(false);
    }
  }, [isAuth, navigate, setErrorLogin]);

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
  });
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
      onSubmit={(values: LoginFormValues) => {
        dispatch(loginUser({ email: values.email, password: values.password }));
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
        <S.Form onSubmit={handleSubmit} className="login_form">
          <St.FullWrapper>
            <Input
              label="Email"
              type="text"
              placeholder="Email"
              name="email"
              // onChange={handleChange}
              // error={errors.email}
              // value={values.email}
            ></Input>
          </St.FullWrapper>
          <St.FullWrapper>
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
            ></Input>
          </St.FullWrapper>
          <St.FullWrapper>
            <Button
              type="submit"
              size="medium"
              disabled={!values.email || !values.password}
            >
              {loginBtnText}
            </Button>
          </St.FullWrapper>
          {errorLogin && "Email or Password is incorrect"}
        </S.Form>
      )}
    </Formik>
  );
};

export default LoginForm;
