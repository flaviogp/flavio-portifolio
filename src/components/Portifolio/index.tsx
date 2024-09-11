import { useState } from "react";
import { useGetRepositories } from "../../hooks/useGetRepositories";
// import { useGetRepository } from "../../hooks/useGetRepository";
import Container from "../Container";
import Gallery from "../Gallery";
import RepositoryItem from "./RepositoryItem";
import RepositoryList from "./RepositoryList";

const Portifolio = () => {
  const repositories = useGetRepositories("flaviogp");
  // const repository = useGetRepository("flaviogp", "addison-global-1");

  const [repositoryIsOpen, setRepositoryIsOpen] = useState(false);

  const openRepositoryList = () => setRepositoryIsOpen(!repositoryIsOpen);

  return (
    <Container bg={"secondary"}>
      <div
        id="portifolio"
        className=" flex flex-col space-y-4 items-center text-center"
      >
        <h2 className="text-secondary-text-color font-semibold uppercase text-sm">
          Portifolio
        </h2>

        {!repositoryIsOpen ? (
          <Gallery />
        ) : (
          <RepositoryList>
            {repositories.map((repo) => (
              <RepositoryItem key={Number(repo.id)} repository={repo} />
            ))}
          </RepositoryList>
        )}

        <span
          className="text-end w-full text-secondary-text-color font-semibold hover:underline cursor-pointer"
          onClick={openRepositoryList}
        >
          ver todos
        </span>
      </div>
    </Container>
  );
};

export default Portifolio;
