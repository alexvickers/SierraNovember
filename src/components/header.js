import { FaLaptopCode } from "react-icons/fa";
import { PiMountainsFill } from "react-icons/pi";
import { Link } from "gatsby";
import { socialLinks } from "../components/socialLinks";
import PropTypes from "prop-types";
import * as React from "react";

const Header = ({ siteTitle }) => {
  const handleMouseEnter = (e, color) => {
    e.currentTarget.style.color = color;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "white";
  };

  return (
    <header className="container py-4">
      <div className="row align-items-center">
        <div className="col-lg-1 col-6">
          <Link to="/" title={siteTitle} className="logo text-white">
            <PiMountainsFill size={42} className="logo-icon" />
          </Link>
        </div>
        <div className="col-lg-3 col-6 d-flex d-lg-block justify-content-end">
          <Link
            to="/portfolio"
            title={siteTitle}
            className="text-decoration-none d-flex align-items-center gap-2 portfolio-link"
          >
            <FaLaptopCode size={24} />
            Portfolio
          </Link>{" "}
        </div>
        <div className="col-lg-8 col-12 d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0">
          {socialLinks.map(({ icon: Icon, url, title, color }, index) => (
            <a
              key={index}
              className={`icon me-3`}
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
