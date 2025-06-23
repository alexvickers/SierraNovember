import * as React from "react";
import Layout from "../components/layout";
import { SeoHead } from "../components/SEOHead";
import { Link } from "gatsby";
import portfolioData from "../data/portfolio-data";
import { tagMetaMap, customColors } from "../data/techstack-meta";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const cardStyle = {
  backgroundColor: "#f1f1f1",
  color: "#333",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  backgroundColor: "#333333",
  borderColor: "#333333",
  color: "#fff",
  hover: {
    backgroundColor: "#1f1f1f",
  },
};

const PortfolioPage = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout siteTitle={siteTitle}>
      <div className="container py-3 py-lg-5">
        <h1 className="mb-3">Portfolio</h1>
        <p className="mb-4">
          Some of the stuff I’ve built over the years — WordPress sites, React
          apps, a few things in between. Mostly clean code, always made with
          care.
        </p>
        <div className="row gy-5">
          {portfolioData.map((project, index) => (
            <div className="col-12" key={index}>
              <div className="card h-100 flex-md-row" style={cardStyle}>
                <div className="col-lg-5 h-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image rounded-start object-fit-cover"
                  />
                </div>
                <div className="col-lg-7 d-flex flex-column p-4">
                  <div className="card-body d-flex flex-column h-100">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-3 d-flex flex-wrap">
                      {project.tags.map((tag, i) => {
                        const meta = tagMetaMap[tag.toLowerCase()];
                        const color = meta?.color || "secondary";
                        const backgroundStyle = customColors[color]
                          ? { backgroundColor: customColors[color] }
                          : {};

                        return (
                          <span
                            key={i}
                            className={`badge bg-${color} me-2 mb-2 d-inline-flex align-items-center badge-fade-in`}
                            style={{
                              ...backgroundStyle,
                              "--animation-delay": `${i * 0.1}s`,
                            }}
                          >
                            {meta?.icon && (
                              <span className="me-1">{meta.icon}</span>
                            )}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <div className="mt-auto">
                      {project.link.startsWith("http") ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={buttonStyle}
                        >
                          View Project
                        </a>
                      ) : (
                        <Link
                          to={project.link}
                          className="btn"
                          style={buttonStyle}
                        >
                          View Project
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => (
  <SeoHead
    pageTitle="WordPress & React Projects | Developer Portfolio of Alexandre Aimbiré"
    pageUrl={`https://www.sierranovember.com.br/portfolio`}
    bodyClass="portfolio"
  />
);
