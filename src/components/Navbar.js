import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Navigation
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={location.pathname=== '/' ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className={location.pathname=== '/about' ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
