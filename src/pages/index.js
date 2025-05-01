import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import ImageMe from "../components/image-me";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Age from "../components/age";
import {
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaGit,
  FaGulp,
  FaHtml5,
  FaPhp,
  FaSass,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { RiNextjsFill, RiGatsbyFill, RiTailwindCssFill } from "react-icons/ri";
import { SiWoo, SiJquery, SiAdobexd } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const IndexPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "index",
      }}
    />
    <Seo title="Hello! This is the personal website of Alexandre Aimbiré!" />
    <div className="container">
      <div className="row align-items-center">
        <div className="col-8 col-md-4 col-lg-3 mx-auto">
          <div className="avatar my-4 my-xl-0">
            <ImageMe />
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <h1 className="text-white">Call me Alex!</h1>
          <h2 className="text-white mb-4">
            I'm a Frontend Developer living in São Paulo, Brazil.
          </h2>
          <p className="text-white">
            My name is <strong>Alexandre Aimbiré</strong>. I'm <Age /> years old
            and I was born in Florianópolis, a city mostly known for it's sandy
            beaches and former tennis player Gustavo Kuerten. I'm currently
            studying English Language and Literature at the University of São
            Paulo and I'm a recovering Coca-Cola addict. I play guitar and bass,
            and I collect vinyl records.
          </p>
          <p className="text-white">
            Check out my portfolio to see a selection of the{" "}
            <Link to="/portfolio" title="Portfolio" className="text-white">
              projects
            </Link>{" "}
            I've worked on.
            <br />
            I'll be constantly updating this website in the near future.
          </p>
          <p className="text-white">
            Here's some of the stuff I've worked with:
          </p>
          <div className="icons text-white d-flex justify-content-start">
            <FaReact size={36} className="me-3 mb-2" />
            <RiJavascriptFill size={36} className="me-3 mb-2" />
            <RiNextjsFill size={36} className="me-3 mb-2" />
            <RiGatsbyFill size={36} className="me-3 mb-2" />
            <FaHtml5 size={36} className="me-3 mb-2" />
            <FaCss3Alt size={36} className="me-3" />
            <SiJquery size={36} className="me-3" />
            <FaWordpress size={36} className="me-3 mb-2" />
            <SiWoo size={36} className="me-3 mb-2" />
            <FaPhp size={36} className="me-3 mb-2" />
            <FaSass size={36} className="me-3 mb-2" />
            <FaBootstrap size={36} className="me-3 mb-2" />
            <RiTailwindCssFill size={36} className="me-3 mb-2" />
            <FaGit size={36} className="me-3 mb-2" />
            <FaGulp size={36} className="me-3 mb-2" />
            <FaFigma size={36} className="me-3 mb-2" />
            <SiAdobexd size={36} className="mb-2" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
