interface SkillItemProps {
  title: string;
  handleShowDescription: (arg: string | null) => void;
  handleIconChoice: (arg: string) => string;
}

const SkillItem = ({
  title,
  handleShowDescription,
  handleIconChoice,
}: SkillItemProps) => {
  return (
    <a
      className=" bg-secondary-color p-3 rounded-xl flex flex-col justify-between items-center space-y-3 min-w-32 h-48 cursor-pointer"
      onClick={() => handleShowDescription(title)}
    >
      <h3 className="font-bold">{title}</h3>
      <div className="">
        <img
          src={handleIconChoice(title)}
          alt={title}
          className="object-cover max-h-24 max-w-24"
        />
      </div>
    </a>
  );
};

export default SkillItem;
