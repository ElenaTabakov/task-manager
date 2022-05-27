import * as S from "./Button.styles";

interface ButtonProps extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
  size?: S.ButtonSize;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({ size, children, className, disabled, ...props }: ButtonProps) => {
  return (
    <S.Button
    size={size || 'medium'}
    className={className}
    disabled={disabled}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
