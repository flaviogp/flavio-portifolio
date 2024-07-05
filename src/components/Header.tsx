import Menu from "./Menu";

function Header() {
  return (
    <header className="flex justify-between p-5">
      <div>
        <p>FG</p>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
