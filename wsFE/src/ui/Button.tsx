interface ButtonProps {
  type: "submit" | "button";
  variant: "primary" | "secondary";
  text: string;
  size?: "sm" | "md" | "lg";
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-3 py-1 text-sm rounded-lg",
  md: "px-5 py-2.5 text-base rounded-xl",
  lg: "px-7 py-3 text-lg rounded-2xl",
};

const variantClasses = {
  primary:
    "bg-black text-white hover:bg-gray-700 active:bg-indigo-800 disabled:bg-indigo-400",
  secondary:
    "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50",
};

export const Button = (props: ButtonProps) => {
  const { type, variant, text, size = "md", onClick, className = "", disabled } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${className}
        font-medium shadow-sm transition-all duration-200 
        focus:outline-none 
        disabled:cursor-not-allowed
      `}
    >
      {text}
    </button>
  );
};
