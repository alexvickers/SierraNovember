import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import portfolioData from "../data/portfolio-data";
import { FaReact, FaWordpress, FaBootstrap, FaPhp } from "react-icons/fa";
import { SiGatsby, SiGraphql } from "react-icons/si";

const tagMetaMap = {
  react: { icon: <FaReact />, color: "primary" },
  wordpress: { icon: <FaWordpress />, color: "info" },
  bootstrap: { icon: <FaBootstrap />, color: "secondary" },
  php: { icon: <FaPhp />, color: "warning" },
  gatsby: { icon: <SiGatsby />, color: "purple" },
  graphql: { icon: <SiGraphql />, color: "pink" },
};

const customColors = {
  purple: "#6f42c1",
  pink: "#d63384",
};

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="mb-4 text-white">Portfolio</h1>
        <div className="row gy-5">
          {portfolioData.map((project, index) => (
            <div className="col-12" key={index}>
              <div className="card h-100 flex-md-row">
                <div className="col-md-5">
                  <img
                    src={project.image}
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    alt={project.title}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      maxHeight: "300px",
                    }}
                  />
                </div>
                <div className="col-md-7 d-flex flex-column p-4">
                  <div className="card-body d-flex flex-column h-100">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-3 d-flex flex-wrap">
                      {project.tags.map((tag, i) => {
                        const meta = tagMetaMap[tag];
                        return (
                          <span
                            key={i}
                            className={`badge bg-${
                              meta?.color || "secondary"
                            } me-2 mb-2 d-inline-flex align-items-center badge-fade-in`}
                            style={{
                              ...(["purple", "pink"].includes(meta?.color)
                                ? { backgroundColor: customColors[meta.color] }
                                : {}),
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
                    </div>{" "}
                    <div className="mt-auto">
                      {project.link.startsWith("http") ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          View Project
                        </a>
                      ) : (
                        <Link to={project.link} className="btn btn-primary">
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
