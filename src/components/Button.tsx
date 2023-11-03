import { createElement } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  className?: string;
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth: boolean;
  icon?: IconType;
}

const Button = ({
  className,
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  icon,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"} ${className}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
      {icon && createElement(icon, { color: textColor, className: "mr-1" })}
    </button>
  );
};

export default Button;