import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HamburguerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
}

const Hamburguer = ({ isMenuOpen, setIsMenuOpen }: HamburguerProps) => {
  const handleSetMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="">
      <button onClick={handleSetMenuClick}>
        {!isMenuOpen ? (
          <FontAwesomeIcon icon={faBars} size="xl" color="white" />
        ) : (
          <FontAwesomeIcon icon={faX} size="xl" color="white" />
        )}
      </button>
    </div>
  );
};

export default Hamburguer;
