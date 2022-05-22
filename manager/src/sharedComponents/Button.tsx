interface ButtonProps extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: string;
  bg?: string;
  onClick: () => void;
  children?: React.ReactNode;
  width: string;
}
const Button = ({ color, bg, children, onClick, width }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color: color,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
