import { useState } from "react";
import { ChangeEvent } from "react";
import Button from "../Button/Button";
import * as S from "./Form.styled";
import Input from "./Input/Input";

export interface User {
  id: number;
  email: string;
  password: string;
  isAuth: boolean;
}

export interface usersTest {
  users: User[];
}

const usersTest: usersTest = {
  users: [
    {
      id: 1,
      email: "a@test.tt",
      password: "123",
      isAuth: false,
    },
    {
      id: 2,
      email: "b@test.tt",
      password: "123",
      isAuth: false,
    },
  ],
};

interface LoginFormProps {
  loginBtnText: string;
}

const LoginForm = ({ loginBtnText }: LoginFormProps) => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: ""
  });
  const [isAuth, setIsAuth] = useState(false);

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
  };

  const onSubmit = () => {
    usersTest.users.map((localUser) => {
        if (localUser.email !== inputValue.email && localUser.password !== inputValue.password){
            console.log('ERROR');
            setIsAuth(false);
        } else {
            setIsAuth(true);
        }
    })

       
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
      {isAuth && "Yahoo"}
    </S.Form>
  );
};

export default LoginForm;
