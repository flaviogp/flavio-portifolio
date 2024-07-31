interface RepositoryList {
  children: React.ReactNode;
}
const RepositoryList = ({ children }: RepositoryList) => {
  return (
    <div className="w-[90vw] flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden overflow-y-hidden">
      {children}
    </div>
  );
};

export default RepositoryList;
