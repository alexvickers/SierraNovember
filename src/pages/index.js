import {
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
          <h1 className="text-white">Call me Alex!</h1>
          <h2 className="text-white mb-4">
            I'm a Frontend Developer living in São Paulo, Brazil.
          </h2>
          <p className="text-white">
            My name is <strong>Alexandre Aimbiré</strong>. I'm 41 years old and I was born in Florianópolis, a city mostly known for it's sandy beaches and former tennis player Gustavo Kuerten. I started out as an Graphic Designer that knew how to code, and before that I was an undergrad Social Sciences. I'm currently studying English Language and Literature at the University of São Paulo and I'm a recovering Coca-Cola addict.
          </p>
          <p className="text-white">
            There's not much around here right now, but be sure to check back.<br />
            I'll be constantly updating this website in the near future.
          </p>
          <p className="text-white">
            You can check out some of the things I do below:
          </p>
          <div className="icons text-white d-flex justify-content-start">
            <FontAwesomeIcon icon={faReact} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faJs} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faHtml5} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faCss3Alt} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faWordpressSimple} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faPhp} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faSass} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faBootstrap} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faGit} size="2x" className="me-3 mb-2" />
            <FontAwesomeIcon icon={faGulp} size="2x mb-2" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
