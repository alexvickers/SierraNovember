import { faGithub, faLinkedin, faMedium, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="container-fluid py-3">
    <div className="row align-items-center">
      <div className="col-4">
        <Link to="/" title={siteTitle} className="logo text-white">
          <FontAwesomeIcon icon={faMountain} />
        </Link>
      </div>
      <div className="col-8 d-flex justify-content-end">
        <a
          className="icon text-white"
          href="https://www.linkedin.com/in/alexandreaimbire"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="icon text-white"
          href="https://github.com/alexvickers"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="icon text-white"
          href="https://stackoverflow.com/users/4366533/alexandre-aimbir%c3%a9"
          target="_blank"
          title="Stack Overflow"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a
          className="icon text-white"
          href="https://vickersvickers.medium.com/"
          target="_blank"
          title="Medium"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a
          className="icon text-white"
          href="https://twitter.com/vickersvickers"
          target="_blank"
          title="Twitter"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
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
