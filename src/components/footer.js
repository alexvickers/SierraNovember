import React from "react";
import { RiGatsbyFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

const Footer = () => (
  <footer className="text-white text-right container py-3">
    <div className="row">
      <div className="col">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org" className="text-white text-decoration-none">
          <RiGatsbyFill
            style={{
              color: "#663399",
              verticalAlign: "middle",
              fontSize: "1rem",
            }}
          />{" "}
          Gatsby
        </a>{" "}
        and{" "}
        <a href="https://getbootstrap.com" className="text-white text-decoration-none">
          <BsBootstrapFill
            style={{
              color: "#7952b3",
              verticalAlign: "middle",
              fontSize: "1rem",
            }}
          />{" "}
          Bootstrap
        </a>
        , hosted on{" "}
        <a href="https://www.netlify.com/" className="text-white text-decoration-none">
          <SiNetlify
            style={{
              color: "#00C7B7",
              verticalAlign: "middle",
              fontSize: "1rem",
            }}
          />{" "}
          Netlify
        </a>
        <br />
        <small>
          <a
            href="https://github.com/your-username/your-repository"
            className="text-white"
          >
            GitHub Repository
          </a>
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
