import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="container-fluid">
    <div class="row align-items-center">
      <div class="col-4">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div class="col-8 d-flex justify-content-end">
        <a
          class="icon"
          href="https://stackoverflow.com/users/4366533/alexandre-aimbir%c3%a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
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
