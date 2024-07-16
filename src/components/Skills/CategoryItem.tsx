import selectIcon from "../../utils/selectIcon";
import { role } from "../../utils/types";

interface CategoryItemProps {
  title: string;
  role: role;
  handleClick: (arg: role) => void;
}

const CategoryItem = ({ title, role, handleClick }: CategoryItemProps) => {
  const handleIconChoice = (role: string) => {
    const img = selectIcon(role);
    return img;
  };

  return (
    <button
      className=" bg-secondary-color p-3 rounded-xl flex flex-col justify-between items-center space-y-3 min-w-32 h-48"
      onClick={() => handleClick(role)}
    >
      <h3 className="font-bold">{title}</h3>
      <div className="">
        <img
          src={handleIconChoice(role as string)}
          alt={title}
          className="object-cover max-h-24 max-w-24"
        />
      </div>
    </button>
  );
};

export default CategoryItem;
