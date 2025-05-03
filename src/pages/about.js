import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import AboutIntro from "../components/AboutIntro";
import Timeline from "../components/Timeline";
import Extras from "../components/Extras";

const AboutPage = ({ data }) => {
  return (
    <Layout siteTitle={data.site.siteMetadata.title} pageTitle="About Me">
      <AboutIntro />
      <Timeline />
      <Extras />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
