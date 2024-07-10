import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";
import languages from "../../assets/languages.png";
import libsAndFrameworks from "../../assets/frameworks.png";
import tools from "../../assets/tools.png";

interface SkillItemProps {
  title: string;
  role: "backend" | "frontend" | "languages" | "libsAndFrameworks" | "tools";
  handleClick: (arg: string) => void;
}

const SkillItem = ({ title, role, handleClick }: SkillItemProps) => {
  const handleIconChoice = (role: string) => {
    switch (role) {
      case "backend":
        return backend;
      case "frontend":
        return frontend;
      case "languages":
        return languages;
      case "libsAndFrameworks":
        return libsAndFrameworks;
      case "tools":
        return tools;
    }
  };

  return (
    <button
      className=" bg-secondary-color p-3 rounded-xl flex flex-col justify-between items-center space-y-3 min-w-32 h-48"
      onClick={() => handleClick(role)}
    >
      <h3 className="font-bold">{title}</h3>
      <div className="w-full">
        <img
          src={handleIconChoice(role)}
          alt={title}
          className="object-cover"
        />
      </div>
    </button>
  );
};

export default SkillItem;
