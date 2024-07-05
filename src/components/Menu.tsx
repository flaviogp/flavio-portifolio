import { useState } from "react";
import Hamburguer from "./Hamburguer";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuOpenStyles = ` w-[50vw] p-5 
    `;

  const MenuCloseStyles = `w-0 overflow-hidden`;

  return (
    <div>
      <Hamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <nav
        className={`bg-secondary-color h-[100vh] absolute right-0 top-0 flex flex-col items-center gap-6 ${
          isMenuOpen ? MenuOpenStyles : MenuCloseStyles
        }`}
      >
        <div className="flex w-full justify-end">
          <Hamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <menu className="flex flex-col w-full items-center font-bold py-6 gap-5 text-[white] border-b">
          <li>Home</li>
          <li>Portifolio</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </menu>
        <ul className="flex gap-6">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
