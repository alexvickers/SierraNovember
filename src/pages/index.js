import { faAdobe, faAngular, faBootstrap, faCss3Alt, faHtml5, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Hello!" />

    <main>
      <div className="container-fluid">
        <div class="row">
          <div class="col">
            <h1 className="text-center text-white text-uppercase">Hello!</h1>
            <h2 className="text-center text-white mb-5">
              I'm Alex and I'm a Front-end developer and Webdesigner living in
              São Paulo, Brazil.
            </h2>
            <p className="text-center text-white">
              Unfortunately there's not much around here right now, but be sure
              to check back. I'll be constantly updating this website in the
              near future.
            </p>
            <p className="text-center text-white">
              Meanwhile, check out my resumé and some of the things I do.
            </p>
            <div className="icons text-white justify-content-center d-flex">
              <FontAwesomeIcon icon={faAngular} className="mr-2" />
              <FontAwesomeIcon icon={faHtml5} className="mx-2" />
              <FontAwesomeIcon icon={faCss3Alt} className="mx-2" />
              <FontAwesomeIcon icon={faSass} className="mx-2" />
              <FontAwesomeIcon icon={faBootstrap} className="mx-2" />
              <FontAwesomeIcon icon={faAdobe} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
