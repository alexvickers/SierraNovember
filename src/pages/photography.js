import React from "react";
import Layout from "../components/layout";
import PhotoGrid from "../components/PhotoGrid";

const PhotographyPage = () => {
  return (
    <Layout>
      <div className="photography-page container">
        <h1>Concert Photography</h1>
        <p>A collection of moments from live shows I’ve captured lately.</p>
        <PhotoGrid />
      </div>
    </Layout>
  );
};

export default PhotographyPage;
