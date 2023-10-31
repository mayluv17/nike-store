import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
}
const MobileMenu = ({ navLinks }: MobileMenuProps) => {
  return (
    <ul
      className={`flex absolute left-0 top-0 mt-20 border-t-2 border-gray-300 bg-white p-4 flex-col w-full flex-1 gap-4 ease-in-out`}
    >
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="font-montserrat leading-normal text-lg text-slate-gray"
          >
            {item.label}
          </a>
        </li>
      ))}
      <li>
        <a
          href=""
          className="flex items-center gap-2 font-montserrat leading-normal text-lg text-slate-gray"
        >
          <AiOutlineHeart /> Favorites
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 font-montserrat leading-normal text-lg text-slate-gray">
          <AiOutlineShoppingCart /> Cart
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
