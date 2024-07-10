import Menu from "../Menu";

function Header() {
  return (
    <header className="flex justify-between p-5 text-primary-text-color bg-secondary-color">
      <div>
        <p className="font-bold">
          FG <span className="text-secondary-text-color">.</span>
        </p>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
