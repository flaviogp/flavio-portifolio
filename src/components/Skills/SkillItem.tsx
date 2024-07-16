import selectIcon from "../../utils/selectIcon";

interface SkillItemProps {
  title: string;
}

const SkillItem = ({ title }: SkillItemProps) => {
  const handleIconChoice = (icon: string) => {
    const img = selectIcon(icon.toLowerCase());
    return img;
  };

  return (
    <button
      className=" bg-secondary-color p-3 rounded-xl flex flex-col justify-between items-center space-y-3 min-w-32 h-48"
      //   onClick={}
    >
      <h3 className="font-bold">{title}</h3>
      <div className="">
        <img
          src={handleIconChoice(title)}
          alt={title}
          className="object-cover max-h-24 max-w-24"
        />
      </div>
    </button>
  );
};

export default SkillItem;
