import { PiMountainsFill } from 'react-icons/pi';
import { FaGithub, FaLinkedin, FaStackOverflow, FaLastfm,  FaInstagram } from 'react-icons/fa';
import { BsMedium } from "react-icons/bs";
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="container py-4">
    <div className="row align-items-center">
      <div className="col-4">
        <Link to="/" title={siteTitle} className="logo text-white">
          <PiMountainsFill size={42}/>
        </Link>
      </div>
      <div className="col-8 d-flex justify-content-end">
        <a
          className="icon text-white me-3"
          href="https://www.linkedin.com/in/alexandreaimbire"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          className="icon text-white me-3"
          href="https://www.instagram.com/vickersvickers/"
          target="_blank"
          title="Instagram"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>

        <a
          className="icon text-white me-3"
          href="https://github.com/alexvickers"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          className="icon text-white me-3"
          href="https://stackoverflow.com/users/4366533/alexandre-aimbir%c3%a9"
          target="_blank"
          title="Stack Overflow"
          rel="noopener noreferrer"
        >
          <FaStackOverflow size={24} />
        </a>
        <a
          className="icon text-white me-3"
          href="https://vickersvickers.medium.com/"
          target="_blank"
          title="Medium"
          rel="noopener noreferrer"
        >
          <BsMedium size={24} />
        </a>
        <a
          className="icon text-white"
          href="https://www.last.fm/user/alexvickers"
          target="_blank"
          title="Last.fm"
          rel="noopener noreferrer"
        >
          <FaLastfm size={24} />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
