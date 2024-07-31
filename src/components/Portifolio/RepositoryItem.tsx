import { repository } from "../../utils/types";

interface RepositoryItemProps {
  repository: repository;
}

const formatRepositoryName = (name: string) => {
  const reg = /[-_]+/g;
  const nameFormated = name.replace(reg, " ");
  return nameFormated;
};

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <div className="min-w-32 h-48 flex flex-col items-center justify-between p-4 border border-secondary-text-color rounded-xl">
      <div>
        <p className="font-semibold text-secondary-text-color">Projeto:</p>
        <p className="capitalize">{formatRepositoryName(repository.name)}</p>
      </div>
      <div>
        <p className="font-semibold text-secondary-text-color">Feito em:</p>
        <p>{repository.language}</p>
      </div>
      <div>
        <p className="font-semibold text-secondary-text-color">Acesse:</p>
        <a href={repository.html_url} target="_blank">
          Clique aqui
        </a>
      </div>
    </div>
  );
};

export default RepositoryItem;
