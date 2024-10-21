import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
    </header>
  );
}

export default Header;
