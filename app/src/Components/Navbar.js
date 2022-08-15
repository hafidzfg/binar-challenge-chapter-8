import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
        </Link>
      </div>
    </nav>
  );
}
