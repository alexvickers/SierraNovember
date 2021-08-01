import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "resume",
      }}
    />
    <Seo title="Alexandre Aimbiré - Resumé" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <h2 className="text-white text-uppercase mb-4">Experiences</h2>
          <div className="experience-template bg-white p-4 mb-1">
            <h3 className="text-uppercase">Neo Med</h3>
            <h4 className="mb-3">
              Front-end Developer - September 2019 to Present
            </h4>
            <p>
              Member of the team responsible for building the front-end of the
              Octopus webapp, a marketplace for medical reports.
            </p>
          </div>
          <div className="experience-template bg-white p-4 mb-1">
            <h3 className="text-uppercase">Flatbox</h3>
            <h4 className="mb-3">
              Front-end Developer - March 2019 to September 2019
            </h4>
            <p>
              Lead Front-end developer. Responsible for the development of
              websites and webapps.
            </p>
            <h5 class="text-uppercase">Projects</h5>
            <ul></ul>
            <h5 class="text-uppercase">Clients</h5>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
