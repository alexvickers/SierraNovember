import React from "react";
import { Link } from "gatsby";
import ImageMe from "../components/image-me";
import Layout from "../components/layout";
import Age from "../components/age";
import { SeoHead } from "../components/SEOHead";

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
            Frontend Developer with a love for building things, living in concrete jungle of São Paulo, Brazil.
          </h2>
          <p className="text-white">
            My name is <strong>Alexandre Aimbiré</strong>. I'm <Age /> years old
            and I hail from Florianópolis, a city known for its stunning beaches
            and the legendary tennis player Gustavo Kuerten. These days, I’m
            diving deep into English Language and Literature at the University
            of São Paulo, where I’m rediscovering my passion for language. I
            like to think of myself as a recovering Coca-Cola addict — who knew
            caffeine could have such a hold on you?
          </p>
          <p className="text-white">
            When I’m not buried in books, I play guitar and bass. Music has
            always been a big part of my life, and I collect vinyl records
            because, let’s face it, there’s nothing quite like the crackle of a
            record.
          </p>
          <p className="text-white">
            Take a look at my{" "}
            <Link to="/portfolio" title="Portfolio" className="text-white">
              portfolio
            </Link>{" "}
            for a selection of the projects I’ve worked on. I’ll be updating
            this site regularly, so keep an eye out for new stuff!
          </p>
          <p className="text-white">
            Here’s a quick rundown of some of the tech I’ve worked with:
          </p>
          <div className="icons text-white d-flex justify-content-between">
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

export const Head = () => (
  <SeoHead
    pageTitle="Hello! This is the personal website of Alexandre Aimbiré!"
    bodyClass="index"
  />
);
