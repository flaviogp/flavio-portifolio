import { useEffect, useState } from "react";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import SkillItem from "./SkillItem";

import * as C from "../../utils/categoryList";
import { role, Skill } from "../../utils/types";

interface SkillListProps {
  category: string;
  setIsOpenSkillList: (arg: role) => void;
}

const SkillList = ({ category, setIsOpenSkillList }: SkillListProps) => {
  const [skill, setSkill] = useState<Skill[]>([]);

  useEffect(() => {
    const handleReturnSkillList = (): Skill[] => {
      let skill;
      switch (category) {
        case "languages":
          skill = C.languages;
          break;
        case "frontend":
          skill = C.frontend;
          break;

        case "backend":
          skill = C.backend;
          break;

        case "tools":
          skill = C.tools;
          break;

        case "libsAndFrameworks":
          skill = C.libsAndFrameworks;
          break;
      }

      return skill as Skill[];
    };
    setSkill(handleReturnSkillList());
  }, [setSkill, category]);

  return (
    <div className="flex flex-col space-y-4">
      <button className="w-10 h-10" onClick={() => setIsOpenSkillList(null)}>
        <FaRegArrowAltCircleLeft
          className="text-secondary-text-color"
          size={30}
        />
      </button>
      <div className="w-[90vw] flex justify-center gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {skill.map((skill) => (
          <SkillItem title={skill.name} key={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
