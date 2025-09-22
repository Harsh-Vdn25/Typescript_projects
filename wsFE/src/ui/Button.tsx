interface ButtonProps {
  type: "submit" | "button";
  variant: "primary" | "secondary";
  text: string;
  size: "sm" | "md" | "lg";
  onClick: () => void;
  className?: string;
}

const commonDetails = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-3 text-md",
  lg: "px-6 py-4 text-lg",
};

const buttonDetails = {
  primary: "bg-black text-black ",
  secondary: "bg-white text-black",
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`${props.className} ${buttonDetails[props.variant]} 
    ${commonDetails[props.size]}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
