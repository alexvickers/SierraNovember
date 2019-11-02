import {
  faAdobe,
  faAngular,
  faBootstrap,
  faCss3Alt,
  faGit,
  faHtml5,
  faJs,
  faSass,
  faSketch,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Hello!" />
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-8 col-md-4 col-lg-3 mx-auto">
          <div className="avatar my-4 my-xl-0">
            <Image />
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <h1 className="text-white text-uppercase">Hello! I'm Alex!</h1>
          <h2 className="text-white mb-4 mb-xl-5">
            I'm a Front-end Developer and Webdesigner living in São Paulo,
            Brazil.
          </h2>
          <p className="text-white">
            There's not much around here right now, but be sure to check back.
            I'll be constantly updating this website in the near future.
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <p className="text-center text-white">
            You can check out my{" "}
            <a
              href="http://sierranovember.com.br/resume.pdf"
              target="_blank"
              className="text-white"
            >
              resumé
            </a>{" "}
            and some of the things I do here.
          </p>
          <div className="icons text-white justify-content-center d-flex flex-wrap">
            <FontAwesomeIcon icon={faAngular} className="mr-2" />
            <FontAwesomeIcon icon={faJs} className="mx-2" />
            <FontAwesomeIcon icon={faHtml5} className="mx-2" />
            <FontAwesomeIcon icon={faCss3Alt} className="mx-2" />
            <FontAwesomeIcon icon={faSass} className="mx-2" />
            <FontAwesomeIcon icon={faBootstrap} className="mx-2" />
            <FontAwesomeIcon icon={faWordpressSimple} className="mx-2" />
            <FontAwesomeIcon icon={faAdobe} className="mx-2" />
            <FontAwesomeIcon icon={faSketch} className="mx-2" />
            <FontAwesomeIcon icon={faGit} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
