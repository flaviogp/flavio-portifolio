import { useGetRepositories } from "../../hooks/useGetRepositories";
import { useGetRepository } from "../../hooks/useGetRepository";
import Container from "../Container";

const Portifolio = () => {
  // const repositories = useGetRepositories("flaviogp");
  const repository = useGetRepository("flaviogp", "addison-global-1");
  return (
    <Container bg={"secondary"}>
      <div className="flex flex-col space-y-4 items-center text-center">
        <h2 className="text-secondary-text-color font-semibold uppercase text-sm">
          Portifolio
        </h2>
        <div>
          <h2>{repository.name}</h2>
          <p>{repository.created_at}</p>
          <p></p>
        </div>
        <div>
          {/* {repositories.map((repo) => (
            <div key={repo.id}>
              <h2>{repo.name}</h2>
              <p>{repo.created_at}</p>
            </div>
          ))} */}
          <p></p>
        </div>
      </div>
    </Container>
  );
};

export default Portifolio;
