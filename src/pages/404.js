import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="text-white">NOPE</h1>
    <p className="text-white">
      There's something wrong that isn't right. Please refer back to the{" "}
      <Link className="text-white" to="/">homepage</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
