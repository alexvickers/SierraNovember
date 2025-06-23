import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { SeoHead } from "../components/SEOHead";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export const query = graphql`
  query UnderfloripaQuery {
    underfloripa {
      posts(
        first: 12
        where: {
          authorName: "vickersvickers"
          categoryName: "resenhas, coberturas"
        }
      ) {
        nodes {
          title
          uri
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

const UnderfloripaPage = ({ data }) => {
  const { title: siteTitle } = useSiteMetadata();
  const posts = data.underfloripa.posts.nodes;

  return (
    <Layout siteTitle={siteTitle}>
      <div className="container py-3 py-lg-5">
        <h1 className="mb-5">Últimos textos no Underfloripa</h1>
        <div className="row">
          {posts.map((post) => (
            <div key={post.uri} className="col-12 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                {post.featuredImage?.node?.sourceUrl && (
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    className="card-img-top"
                    style={{ objectFit: "cover", maxHeight: "300px" }}
                    loading="lazy"
                    decoding="async"
                  />
                )}{" "}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <a
                      href={`https://underfloripa.com.br${post.uri}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stretched-link text-dark text-decoration-none"
                    >
                      {post.title}
                    </a>
                  </h5>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
                <div className="card-footer text-muted small d-flex justify-content-between align-items-center">
                  <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                  <span>
                    {post.categories.nodes.map((cat, index) => (
                      <span key={index} className="badge bg-secondary ms-1">
                        {cat.name}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </Layout>
  );
};

export default UnderfloripaPage;

export const Head = () => (
  <SeoHead
    pageTitle="Under Floripa"
    pageUrl={`https://www.sierranovember.com.br/underfloripa`}
    bodyClass="underfloripa"
  />
);
