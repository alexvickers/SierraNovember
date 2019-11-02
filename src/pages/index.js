import {
  faAdobe,
  faAngular,
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGit,
  faGulp,
  faHtml5,
  faJs,
  faSass,
  faSketch,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Hello!" />
    <div className="container-fluid">
      <div class="row">
        <div class="col">
          <h1 className="text-center text-white text-uppercase">Hello!</h1>
          <h2 className="text-center text-white mb-5">
            I'm Alex and I'm a Front-end Developer and Webdesigner living in São
            Paulo, Brazil.
          </h2>
          <p className="text-center text-white">
            There's not much around here right now, but be sure to check back.
            I'll be constantly updating this website in the near future.
          </p>
          <p className="text-center text-white">
            Meanwhile, check out my{" "}
            <a
              href="http://sierranovember.com.br/resume.pdf"
              target="_blank"
              className="text-white"
            >
              resumé
            </a>{" "}
            and some of the things I do.
          </p>
          <div className="icons text-white justify-content-center d-flex">
            <FontAwesomeIcon icon={faAngular} className="mr-2" />
            <FontAwesomeIcon icon={faJs} className="mx-2" />
            <FontAwesomeIcon icon={faHtml5} className="mx-2" />
            <FontAwesomeIcon icon={faCss3Alt} className="mx-2" />
            <FontAwesomeIcon icon={faSass} className="mx-2" />
            <FontAwesomeIcon icon={faBootstrap} className="mx-2" />
            <FontAwesomeIcon icon={faGulp} className="mx-2" />
            <FontAwesomeIcon icon={faAdobe} className="mx-2" />
            <FontAwesomeIcon icon={faSketch} className="mx-2" />
            <FontAwesomeIcon icon={faFigma} className="mx-2" />
            <FontAwesomeIcon icon={faGit} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
