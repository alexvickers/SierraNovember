import * as React from "react";
import { BsBootstrapFill } from "react-icons/bs";
import { SiNetlify, SiGatsby } from "react-icons/si";

const Footer = () => (
  <footer className="text-right container py-3">
    <div className="row">
      <div className="col">
        © {new Date().getFullYear()}, Built with{" "}
        <a
          href="https://www.gatsbyjs.org"
          className="text-white text-decoration-none footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGatsby
            className="footer-icon"
            style={{
              color: "#663399",
              verticalAlign: "middle",
              fontSize: "1rem",
            }}
          />{" "}
          Gatsby
        </a>{" "}
        and{" "}
        <a
          href="https://getbootstrap.com"
          className="text-white text-decoration-none footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsBootstrapFill
            style={{
              color: "#7952b3",
              verticalAlign: "middle",
              fontSize: "1rem",
            }}
            className="footer-icon"
          />{" "}
          Bootstrap
        </a>
        , hosted on{" "}
        <a
          href="https://www.netlify.com/"
          className="text-white text-decoration-none footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNetlify
            style={{
              color: "#00C7B7",
              verticalAlign: "middle",
              fontSize: "1rem",
            }}
            className="footer-icon"
          />{" "}
          Netlify
        </a>
        <br />
        <small>
          <a
            href="https://github.com/alexvickers/SierraNovember"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
