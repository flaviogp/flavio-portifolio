import { useState } from "react";
import SkillItem from "./SkillItem";

type role =
  | "backend"
  | "frontend"
  | "languages"
  | "libsAndFrameworks"
  | "tools"
  | null;

const SkillList = () => {
  const [isOpenSkillList, setisOpenSkillList] = useState<role>(null);

  const handleClick = (role: role) => {
    setisOpenSkillList(role);
  };

  return (
    <div className="w-[90vw] flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {!isOpenSkillList ? (
        <>
          <SkillItem
            title="Languages"
            role="languages"
            handleClick={handleClick}
          />
          <SkillItem
            title="Front End"
            role="frontend"
            handleClick={handleClick}
          />
          <SkillItem
            title="Back End"
            role="backend"
            handleClick={handleClick}
          />
          <SkillItem
            title="Libraries and Frameworks"
            role="libsAndFrameworks"
            handleClick={handleClick}
          />
          <SkillItem title="Tools" role="tools" handleClick={handleClick} />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SkillList;
