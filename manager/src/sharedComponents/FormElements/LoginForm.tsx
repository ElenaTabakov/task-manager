import Button from "../Button/Button";
import * as S from "./Form.styled";
import Input from "./Input/Input";


interface LoginFormProps {
    loginBtnText: string
} 

const LoginForm = ({loginBtnText}:LoginFormProps) =>{
    
    const onSubmit = () => {

    }

    return (
        <S.Form>
            <Input type='text' placeholder="User"></Input>
            <Input type='password' placeholder="Password"></Input>
            <Button type='button' size='medium' onClick={onSubmit} >{loginBtnText}</Button>
        </S.Form>
    )
}

export default LoginForm;