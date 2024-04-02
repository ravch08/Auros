import { Link, NavLink } from "react-router-dom";
import { SocialIcons, logoDark } from "../utils/helper";

const Footer = () => {
  return (
    <footer className="pt-8">
      <div className="container">
        <div className="flex items-center justify-between gap-4 pb-4">
          <Link to="/">
            <img src={logoDark} alt="logo" />
          </Link>

          <nav
            aria-labelledby="Footer Navigation"
            className="flex items-center justify-between gap-4"
          >
            <NavLink to="#!" className="px-2 py-4 text-sm">
              About Us
            </NavLink>
            <NavLink to="#!" className="px-2 py-4 text-sm">
              Blog
            </NavLink>
            <NavLink to="#!" className="px-2 py-4 text-sm">
              FAQs
            </NavLink>
            <NavLink to="#!" className="px-2 py-4 text-sm">
              Contact
            </NavLink>
          </nav>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-8 py-12">
          <div className="flex flex-col gap-2">
            <p>2593 Timbercrest Road, Chisana,</p>
            <p>Alaska Badalas United State</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>(+91)7-723-4608</p>
            <a href="mailto:Demo@demo.com">Demo@demo.com</a>
          </div>
          <SocialIcons />
        </div>
        <hr />
        <div className="py-4 text-left">
          <p>Copyright © 2019 Auros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
