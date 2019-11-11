import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "resume",
      }}
    />
    <SEO title="Alexandre Aimbiré - Resumé" />
    <div className="container-fluid">
      <div class="row"></div>
    </div>
  </Layout>
)

export default IndexPage
