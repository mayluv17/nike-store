interface sizePillProps {
  size: string;
  isSelected: boolean;
  handleSelected: (size: string) => void;
}

const SizePill = ({ size, isSelected, handleSelected }: sizePillProps) => {
  return (
    <div
      onClick={(e) => handleSelected(size)}
      className={`py-1 hover:border-coral-red hover:text-coral-red px-3 text-sm border cursor-pointer ${
        isSelected ? "border-coral-red" : "border-slate-300"
      }
      ${isSelected ? "text-coral-red" : "border-slate-300"} rounded-sm`}
    >
      {size}
    </div>
  );
};

export default SizePill;
