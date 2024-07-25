import { useGithubApi } from "../../hooks/useGithubApi";
import Container from "../Container";

const Portifolio = () => {
  const repositories = useGithubApi("flaviogp");
  return (
    <Container bg={"secondary"}>
      <div className="flex flex-col space-y-4 items-center text-center">
        <h2 className="text-secondary-text-color font-semibold uppercase text-sm">
          Portifolio
        </h2>
        <div>
          {repositories.map((repo) => (
            <h2 key={repo.id}>{repo.name}</h2>
          ))}
          <p></p>
        </div>
      </div>
    </Container>
  );
};

export default Portifolio;
