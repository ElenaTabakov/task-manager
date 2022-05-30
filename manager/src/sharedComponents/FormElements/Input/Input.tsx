import { InputHTMLAttributes } from "react";
import * as S from "./Input.styles";



interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, ...rest }: InputProps) => (
 <>
    <S.Input {...rest} error={!!error} />
    {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </>
);
export default Input;
