import { InputHTMLAttributes } from "react";



interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}



const Input = ({error, ...rest}: InputProps) => (
    <div className="input-container">
        <input {...rest}  />
        {error && <div className="error-text">{error}</div> }
    </div>
)
export default Input;