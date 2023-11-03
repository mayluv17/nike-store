import { ReactNode, createElement } from "react";
import { IconType } from "react-icons";

interface TooltipProps {
  icon?: IconType;
  label: string;
  borderColor: string;
  textColor: string;
}
const Tooltip = ({ icon, label, borderColor, textColor }: TooltipProps) => {
  return (
    <div
      className={`mr-1 flex border items-center rounded-full border-${borderColor}-500 border-[0.5px] py-0.5 px-2 text-xs`}
    >
      {icon && createElement(icon, { color: textColor, className: "mr-1" })}
      <div className={`text-${textColor}-400`}>{label ? label : "Tooltip"}</div>
    </div>
  );
};

export default Tooltip;
