import * as React from "react";
import { useState } from "react";
import {
  FaLaptopCode,
  FaRegAddressCard,
  FaCameraRetro,
  FaBars,
} from "react-icons/fa";
import { PiMountainsFill } from "react-icons/pi";
import { Link } from "gatsby";
import { socialLinks } from "../components/socialLinks";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (e, color) => {
    e.currentTarget.style.color = color;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "white";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="container py-4">
      <div className="row align-items-center">
        <div className="col-lg-1 col-6 d-flex align-items-center">
          <Link to="/" title={siteTitle} className="logo text-white">
            <PiMountainsFill size={42} className="logo-icon" />
          </Link>
        </div>

        <div className="d-lg-none col-6 text-end">
          <button
            className="btn btn-link text-white p-0"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FaBars size={28} />
          </button>
        </div>

        <div
          className={`menu col-12 col-lg-4 ${
            menuOpen ? "open" : ""
          } `}
        >
          <ul className="d-lg-flex gap-3 p-0 mb-0 mt-3 mt-lg-0">
            <li>
              <Link
                to="/portfolio"
                title="Portfolio"
                className="text-decoration-none d-flex align-items-center gap-2 text-white portfolio-link"
              >
                <FaLaptopCode size={24} />
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/photography"
                title="Photography"
                className="text-decoration-none d-flex align-items-center gap-2 text-white photography-link"
              >
                <FaCameraRetro size={24} />
                Photography
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                title="About Me"
                className="text-decoration-none d-flex align-items-center gap-2 text-white about-link"
              >
                <FaRegAddressCard size={24} />
                About Me
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-7 col-12 d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0 gap-3">
          {socialLinks.map(({ icon: Icon, url, title, color }, index) => (
            <a
              key={index}
              className="icon"
              href={url}
              target="_blank"
              title={title}
              rel="noopener noreferrer"
              onMouseEnter={(e) => handleMouseEnter(e, color)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: "white",
                transition: "color 0.3s ease",
              }}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
