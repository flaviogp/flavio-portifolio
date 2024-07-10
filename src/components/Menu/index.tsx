import { useState } from "react";
import Hamburguer from "./Hamburguer";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuOpenStyles = ` w-[50vw] px-5
    `;

  const MenuCloseStyles = `w-0 overflow-hidden`;

  return (
    <div>
      <Hamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <nav
        className={`py-5 transition-width delay-75 bg-secondary-color h-[100vh] absolute right-0 top-0 flex flex-col items-center gap-6 ${
          isMenuOpen ? MenuOpenStyles : MenuCloseStyles
        }`}
      >
        <div className="flex w-full justify-end">
          <Hamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <menu className="flex flex-col w-full items-center font-bold py-6 gap-5 text-[white] border-b">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Portifolio</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </menu>
        <ul className="flex gap-6">
          <li>
            <a href="https://www.linkedin.com/in/flaviogp/" target="_blank">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a href="https://github.com/flaviogp" target="_blank">
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
