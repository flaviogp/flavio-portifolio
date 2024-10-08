import { GrDocumentText } from "react-icons/gr";
import { Skill } from "../../utils/types";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

interface SkillDescriptionProps {
  skill: Skill | undefined;
  handleIconChoice: (arg: string) => string;
  setIsdescriptionAppears: (arg: string | null) => void;
}

const SkillDescription = ({
  skill,
  handleIconChoice,
  setIsdescriptionAppears,
}: SkillDescriptionProps) => {
  if (!skill) return;

  return (
    <>
      <button
        className="w-10 h-10"
        onClick={() => setIsdescriptionAppears(null)}
      >
        <FaRegArrowAltCircleLeft
          className="text-secondary-text-color"
          size={30}
        />
      </button>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2">
          <img
            src={handleIconChoice(skill.name)}
            alt={skill.name}
            className="w-8 h-8"
          />
          <h3 className="font-bold text-xl text-secondary-text-color">
            {skill?.name}
          </h3>
        </div>
        <p>{skill?.description}</p>

        <a
          href={skill.documentation as string}
          target="_blank"
          className="hover:border-b-2 flex gap-2 items-center"
        >
          <GrDocumentText />
          Documentação
        </a>
      </div>
    </>
  );
};

export default SkillDescription;
