import { useGetRepositories } from "../../hooks/useGetRepositories";
// import { useGetRepository } from "../../hooks/useGetRepository";
import Container from "../Container";
import RepositoryItem from "./RepositoryItem";
import RepositoryList from "./RepositoryList";

const Portifolio = () => {
  const repositories = useGetRepositories("flaviogp");
  // const repository = useGetRepository("flaviogp", "addison-global-1");
  return (
    <Container bg={"secondary"}>
      <div className="flex flex-col space-y-4 items-center text-center">
        <h2 className="text-secondary-text-color font-semibold uppercase text-sm">
          Portifolio
        </h2>

        <RepositoryList>
          {repositories.map((repo) => (
            <RepositoryItem key={Number(repo.id)} repository={repo} />
          ))}
        </RepositoryList>
      </div>
    </Container>
  );
};

export default Portifolio;
