import { MdMenu, MdOutlineClose } from "react-icons/md";

interface HamburguerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
}

const Hamburguer = ({ isMenuOpen, setIsMenuOpen }: HamburguerProps) => {
  const handleSetMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="">
      <button onClick={handleSetMenuClick}>
        {!isMenuOpen ? <MdMenu size={20} /> : <MdOutlineClose size={20} />}
      </button>
    </div>
  );
};

export default Hamburguer;
