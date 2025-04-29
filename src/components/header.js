import { faGithub, faLinkedinIn, faMediumM, faStackOverflow, faLastfm, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="container py-3">
    <div className="row align-items-center">
      <div className="col-4">
        <Link to="/" title={siteTitle} className="logo text-white">
          <FontAwesomeIcon icon={faMountain} size="2x" />
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
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a
          className="icon text-white me-3"
          href="https://www.instagram.com/vickersvickers/"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>

        <a
          className="icon text-white me-3"
          href="https://github.com/alexvickers"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          className="icon text-white me-3"
          href="https://stackoverflow.com/users/4366533/alexandre-aimbir%c3%a9"
          target="_blank"
          title="Stack Overflow"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} size="lg" />
        </a>
        <a
          className="icon text-white me-3"
          href="https://vickersvickers.medium.com/"
          target="_blank"
          title="Medium"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMediumM} size="lg" />
        </a>
        <a
          className="icon text-white"
          href="https://www.last.fm/user/alexvickers"
          target="_blank"
          title="Last.fm"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLastfm} size="lg" />
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
