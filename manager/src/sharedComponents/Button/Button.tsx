import * as S from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: S.ButtonSize;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  margin?: S.ButtonMargin;
}

const Button = ({
  size,
  children,
  className,
  disabled,
  margin,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      size={size || "medium"}
      className={className}
      disabled={disabled}
      margin ={margin || 'right'}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
