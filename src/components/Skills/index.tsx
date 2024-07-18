import { useState } from "react";

import SkillList from "./SkillList";
import Container from "../Container";
import CategorySkillList from "./CategorySkillList";

import { role } from "../../utils/types";

const Skills = () => {
  const [isOpenSkillList, setIsOpenSkillList] = useState<role>(null);
  return (
    <Container>
      <div className="flex flex-col space-y-4 items-center text-center">
        <h2 className="text-secondary-text-color font-semibold uppercase text-sm">
          Skills
        </h2>
        <h3 className="font-bold text-2xl">Quais skills eu possuo</h3>
        {!isOpenSkillList ? (
          <CategorySkillList setisOpenSkillList={setIsOpenSkillList} />
        ) : (
          <SkillList
            category={isOpenSkillList}
            setIsOpenSkillList={setIsOpenSkillList}
          />
        )}
      </div>
    </Container>
  );
};

export default Skills;
