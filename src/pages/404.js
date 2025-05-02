import React from 'react';
import { Link } from 'gatsby';
import { SeoHead } from '../components/SEOHead';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <h1 className="text-white">NOPE</h1>
    <p className="text-white">
      There's something wrong that isn't right. Please refer back to the{" "}
      <Link className="text-white" to="/">homepage</Link>.
    </p>
  </Layout>
)

export default NotFoundPage

export const Head = () => <SeoHead pageTitle="404! Not Found!" />;
