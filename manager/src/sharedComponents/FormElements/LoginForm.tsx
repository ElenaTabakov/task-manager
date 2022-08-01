import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../../store/store";
import Button from "../Button/Button";
import * as S from "./Form.styled";
import Input from "./Input/Input";
import { setUser , removeUser } from '../../store/slices/usersSlice'
import { useNavigate } from "react-router-dom";
import React from "react";


interface LoginFormProps {
  loginBtnText: string;
}

const LoginForm = ({ loginBtnText }: LoginFormProps) => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: ""
  });
  const [errorLogin, setErrorLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setInputValue((prevState) => {
      return { ...prevState, [inputName]: value };
    });
    setErrorMessage((prevState) => {
        return {
            ...prevState, [inputName]: ''
        };
    })
    if (!value) {
        setErrorMessage((prevState) => {
            return {
                ...prevState, [inputName]: "Your " + inputName + ' is empty'
            };
        })
    }
    setErrorLogin(false);
  };
  const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);
 
  console.log('..' + isAuth);


  useEffect(() => {  

      if ( isAuth === true){

        navigate('/tasks');
        console.log('useEffect =>' + isAuth);
        setErrorLogin(false);
    } 

  }, [isAuth]);

  const onSubmit = () => {

    dispatch(setUser({email: inputValue.email, password: inputValue.password}));
    if( !isAuth  ){
        setErrorLogin(true);
    }
    // console.log(user);
  };
  


  return (
    <S.Form>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
        error={errorMessage.email}
      ></Input>
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
        error={errorMessage.password}
      ></Input>
      <Button
        type="button"
        size="medium"
        onClick={onSubmit}
        disabled={!inputValue.email || !inputValue.password}
      >
        {loginBtnText}
      </Button>
      {errorLogin && "Email or Password is incorrect"}
    </S.Form>
  );
};

export default LoginForm;
