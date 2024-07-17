import * as S from "../../utils/skills";

interface SkillDescriptionProps {
  skill: string;
}

const SkillDescription = ({ skill }: SkillDescriptionProps) => {
  return <div className="flex flex-coll items-center">
    {S.`${skill}`.name}
  </div>;
};

export default SkillDescription;
