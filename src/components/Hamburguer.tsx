import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
interface HamburguerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
}

const Hamburguer = ({ isMenuOpen, setIsMenuOpen }: HamburguerProps) => {
  const handleSetMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="">
      <button onClick={handleSetMenuClick}>
        {!isMenuOpen ? <FaBars size={18} /> : <FaXmark size={18} />}
      </button>
    </div>
  );
};

export default Hamburguer;
