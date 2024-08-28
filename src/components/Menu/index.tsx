import { useState } from "react";
import Hamburguer from "./Hamburguer";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Hamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <nav
        className={`
          flex flex-col items-center gap-6 py-5 
          transition-width delay-75 overflow-hidden
          bg-secondary-color h-screen 
          absolute right-0 top-0 
          ${isMenuOpen ? "w-screen" : "w-0 "}
          
        `}
      >
        <div className="flex w-full justify-end px-5 ">
          <Hamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <menu className="flex flex-col w-full items-center font-bold py-6 gap-5 text-[white] ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#portifolio">Portifolio</a>
          </li>
          {/* <li>
            <a href="#blog">Blog</a>
          </li> */}
          {/* <li>
            <a href="#pages">Pages</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="border-b border-primary-text-color h-1 w-[50%]"></li>
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
