import { InputHTMLAttributes } from "react";
import { FieldHookConfig, useField , FormikProps } from "formik";
import * as S from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // error?: string;
  name : string;
  // props?:  FieldHookConfig<string> ;
}

const Input = ({ label,  ...props }: InputProps) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <>
      <label>
        {label}
        <S.Input {...field} { ...props} />
      </label>
      {meta.error && meta.touched && <S.ErrorMessage>{meta.error}</S.ErrorMessage>}     
    </>
  );
};
export default Input;
