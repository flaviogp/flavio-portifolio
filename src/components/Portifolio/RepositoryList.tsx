interface RepositoryList {
  children: React.ReactNode;
}
const RepositoryList = ({ children }: RepositoryList) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export default RepositoryList;
