import { Link, NavLink } from "react-router-dom";
import { logoDark } from "../utils/helper";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logoDark} alt="logo" />
        </Link>

        <nav aria-labelledby="Primary Navigation">
          <ul className="flex items-center justify-between gap-4">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
