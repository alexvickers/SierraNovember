import {
  faAngular,
  faBootstrap,
  faCss3Alt,
  faGit,
  faGulp,
  faHtml5,
  faJs,
  faPhp,
  faReact,
  faSass,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import ImageMe from '../components/image-me';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
          <h1 className="text-white">Hello! I'm Alex!</h1>
          <h2 className="text-white mb-4">
            I'm a Frontend Developer and Webdesigner living in São Paulo,
            Brazil.
          </h2>
          <p className="text-white">
            My name is <strong>Alexandre Aimbiré</strong>. I'm 38 years old and
            I was born in Florianópolis, a city mostly known for it's sandy
            beaches and former tennis player Gustavo Kuerten. I started out
            as an graphic designer that knew how to code, and now I'm a coder that knows how to
            design. I also study Language and Literature at the University of
            São Paulo and drink unholy amounts of Coca-Cola.
          </p>
          <p className="text-white">
            There's not much around here right now, but be sure to check back.
            I'll be constantly updating this website in the near future.
          </p>
          <p className="text-white">
            You can check out my <Link className="text-white" to="/resume">resumé</Link>.
            and some of the things I do here:
          </p>
          <div className="icons text-white d-flex">
            <FontAwesomeIcon icon={faAngular} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faReact} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faJs} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faHtml5} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faCss3Alt} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faWordpressSimple} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faPhp} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faSass} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faBootstrap} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faGit} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faGulp} size="2x" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
