import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ResumePosition from '../components/position';

const IndexPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "resume",
      }}
    />
    <Seo title="Alexandre Aimbiré - Resumé" />
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <h2 className="text-white text-uppercase mb-4">Experiences</h2>
          <ResumePosition />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
