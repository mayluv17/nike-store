import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-8 max-lg:hidden">
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
              <div className="relative">
                <AiOutlineShoppingCart />
                <div className="absolute rounded top-0 right-[-3px] w-[3px] h-[3px] bg-red-500"></div>
              </div>{" "}
              Cart
            </a>
          </li>
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          className="hidden max-lg:block"
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
        {isMobileMenuOpen && <MobileMenu navLinks={navLinks} />}
      </nav>
    </header>
  );
};

export default Nav;
