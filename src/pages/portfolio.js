import React from "react";
import Layout from "../components/layout"; // Assuming you have a Layout component
import { Link } from "gatsby";

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="mb-4">Portfolio</h1>
        <div className="row g-4">
          {/* Portfolio Item 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src="/path/to/image1.jpg"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Project Title 1</h5>
                <p className="card-text">Short description of the project.</p>
                <Link to="/project-1" className="btn btn-primary mt-auto">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src="/path/to/image2.jpg"
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Project Title 2</h5>
                <p className="card-text">Short description of the project.</p>
                <Link to="/project-2" className="btn btn-primary mt-auto">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Add more portfolio items here */}
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
