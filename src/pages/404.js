import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOPE</h1>
    <p>
      There's something wrong that isn't right. Please refer back to the{" "}
      <Link to="/">homepage</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
