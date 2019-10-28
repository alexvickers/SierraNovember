import { faBehance, faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="container-fluid py-3">
    <div class="row align-items-center">
      <div class="col-4">
        <Link to="/" title={siteTitle} className="logo text-white">
          <FontAwesomeIcon icon={faMountain} />
        </Link>
      </div>
      <div class="col-8 d-flex justify-content-end">
        <a
          class="icon text-white"
          href="https://www.linkedin.com/in/alexandreaimbire"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          class="icon text-white"
          href="https://www.behance.net/vickersvickers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <a
          class="icon text-white"
          href="https://github.com/alexvickers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          class="icon text-white"
          href="https://stackoverflow.com/users/4366533/alexandre-aimbir%c3%a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a
          class="icon text-white"
          href="https://medium.com/@vickersvickers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} />
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
