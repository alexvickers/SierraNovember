import React from "react";

const Footer = () => (
<footer className="text-white text-right container py-3">
  <div className="row">
    <div className="col">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" className="text-white">
        Gatsby
      </a>
      {` `}
      and
      {` `}
      <a href="https://getbootstrap.com" className="text-white">
        Bootstrap
      </a>
      <br />
      <small>
        <a href="https://github.com/your-username/your-repository" className="text-white">
          GitHub Repository
        </a>
      </small>
    </div>
  </div>
</footer>);

export default Footer;
