import * as React from "react";
import { graphql, Link } from "gatsby";
import ImageMe from "../components/ImageMe";
import Layout from "../components/Layout";
import Age from "../components/age";
import { SeoHead } from "../components/SEOHead";
import IconList from "../components/IconList";
import HomeHeader from "../components/HomeHeader";

const IndexPage = ({ data }) => (
  <Layout siteTitle={data.site.siteMetadata.title}>
    <div className="container">
      <div className="row">
        <div className="col-8 col-md-4 col-lg-3 mx-auto">
          <div className="avatar my-4 my-xl-0">
            <ImageMe />
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <h1>Call me Alex!</h1>
          <HomeHeader />
          <p>
            My name is <strong>Alexandre Aimbiré</strong>. I'm <Age /> years old
            and I hail from Florianópolis, a city known for its stunning beaches
            and the legendary tennis player Gustavo Kuerten. These days, I’m
            diving deep into English Language and Literature at the University
            of São Paulo, where I’m rediscovering my passion for language. I
            like to think of myself as a recovering Coca-Cola addict — but I
            still drink coffee by the bucketload.
          </p>
          <p>
            When I’m not buried in books, I play guitar and bass. Music has
            always been a big part of my life, and I collect vinyl records
            because, let’s face it, there’s nothing quite like the crackle of a
            record.
          </p>
          <p>
            Take a look at my{" "}
            <Link to="/portfolio" title="Portfolio" className="text-white">
              portfolio
            </Link>{" "}
            for a selection of the projects I’ve worked on. I’ll be updating
            this site regularly, so keep an eye out for new stuff!
          </p>
          <p>Here’s a quick rundown of some of the tech I’ve worked with:</p>
          <IconList />
        </div>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;

export const Head = () => (
  <SeoHead
    pageTitle="Hello! This is the personal website of Alexandre Aimbiré!"
    bodyClass="index"
  />
);
