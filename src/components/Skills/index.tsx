import Container from "../Container";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-4 items-center text-center">
        <p className="text-secondary-text-color font-semibold uppercase text-sm">
          Skills
        </p>
        <h2 className="font-bold text-2xl">Quais skills eu possuo</h2>
        <SkillList />
      </div>
    </Container>
  );
};

export default Skills;
