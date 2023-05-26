import * as S from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: S.ButtonSize;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  margin?: S.ButtonMargin;
  bgColor?:  S.ButtonBgColor ;
  padding?: string ;
}

const Button = ({
  size,
  children,
  className,
  disabled,
  margin,
  bgColor,
  padding,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      size={size || "medium"}
      className={className}
      disabled={disabled}
      margin ={margin || 'right'}
      type = {'button' || 'reset' || 'submit'}
      bgColor = {bgColor || 'primary'}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
