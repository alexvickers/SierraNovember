import React from "react";
import Layout from "../components/Layout";
import PhotoGrid from "../components/PhotoGrid";
import { SeoHead } from "../components/SEOHead";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const PhotographyPage = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout siteTitle={siteTitle}>
      <div className="photography-page container">
        <h1>Louder than Love</h1>
        <p>A collection of raw moments, frozen mid-chaos. No filters. Just light, sweat, and noise.</p>
        <PhotoGrid />
      </div>
    </Layout>
  );
};

export default PhotographyPage;

export const Head = () => (
  <SeoHead
    pageTitle="Louder Than Love | Live Gig Photography by Alexandre Aimbiré"
    pageUrl={`https://www.sierranovember.com.br/photography`}
    bodyClass="photography"
  />
);
