type variants = "primary" | "secondary";

export interface ButtonProps {
  variant: variants;
  size: "sm" | "md" | "lg";
  text: string;
  type?:"submit" | "reset" | "button" | undefined;
  startIcon?: any;
  endIcon?: any;
  loading?:boolean;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyles = "rounded-md";

const sizeStyles = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-4",
};

const Button = (props: ButtonProps) => {
  return (
      <button
        className={`${variantStyles[props.variant]} ${defaultStyles} ${
          sizeStyles[props.size]
        } flex flex-row gap-1 justify-center items-center ${props.loading?"opacity-75":""}`}
        disabled={props.loading}
        onClick={props.onClick}
        type={props.type}
      >
        {props.startIcon && <span >{props.startIcon}</span>}
        {props.text}
        {props.endIcon &&<span >{props.endIcon}</span>}
      </button>
  );
};

export default Button;
