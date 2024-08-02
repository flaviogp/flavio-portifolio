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
    <div className="min-w-44 h-56 flex flex-col items-center p-2 border border-secondary-text-color rounded-xl">
      <div className="w-full h-24 bg-primary-text-color rounded-t-md">
        <img src="" alt="" className="" />
      </div>
      <div className=" rounded-b-md p-2 py-4 w-full flex flex-wrap justify-around items-center overflow-hidden  text-sm ">
        <div>
          <p className="font-semibold">Projeto:</p>
          <p className="capitalize text-base">
            {formatRepositoryName(repository.name)}
          </p>
        </div>
        <div>
          <p className="font-semibold">Feito em:</p>
          <p>{repository.language}</p>
        </div>
        <div>
          <p className="font-semibold">Acesse:</p>
          <a href={repository.html_url} target="_blank">
            Clique aqui
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;

// <div className="min-w-32 h-48 flex flex-col items-center justify-between p-4 border border-secondary-text-color rounded-xl">
// <div>
//   <p className="font-semibold text-secondary-text-color">Projeto:</p>
//   <p className="capitalize">{formatRepositoryName(repository.name)}</p>
// </div>
// <div>
//   <p className="font-semibold text-secondary-text-color">Feito em:</p>
//   <p>{repository.language}</p>
// </div>
// <div>
//   <p className="font-semibold text-secondary-text-color">Acesse:</p>
//   <a href={repository.html_url} target="_blank">
//     Clique aqui
//   </a>
// </div>
// </div>
