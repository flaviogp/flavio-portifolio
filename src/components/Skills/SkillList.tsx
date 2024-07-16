import { useEffect, useState } from "react";
import * as C from "../../utils/categoryList";
import SkillItem from "./SkillItem";

interface SkillListProps {
  category: string;
}

const SkillList = ({ category }: SkillListProps) => {
  const [skill, setSkill] = useState<C.Skill[]>([]);

  useEffect(() => {
    const handleReturnSkillList = (): C.Skill[] => {
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

      return skill as C.Skill[];
    };
    setSkill(handleReturnSkillList());
  }, [setSkill, category]);

  return (
    <div className="w-[90vw] flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {skill.map((skill) => (
        <SkillItem title={skill.name.toLowerCase()} key={skill.name} />
      ))}
    </div>
  );
};

export default SkillList;
