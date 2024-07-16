import Categoryitem from "./CategoryItem";
import { role } from "../../utils/types";

interface CategorySkillListProps {
  setisOpenSkillList: (arg: role) => void;
}

const CategorySkillList = ({ setisOpenSkillList }: CategorySkillListProps) => {
  const handleClick = (role: role) => {
    setisOpenSkillList(role);
  };

  return (
    <div className="w-[90vw] flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      <Categoryitem
        title="Languages"
        role="languages"
        handleClick={handleClick}
      />
      <Categoryitem
        title="Front End"
        role="frontend"
        handleClick={handleClick}
      />
      <Categoryitem title="Back End" role="backend" handleClick={handleClick} />
      <Categoryitem
        title="Libraries and Frameworks"
        role="libsAndFrameworks"
        handleClick={handleClick}
      />
      <Categoryitem title="Tools" role="tools" handleClick={handleClick} />
    </div>
  );
};

export default CategorySkillList;
