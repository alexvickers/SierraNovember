import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/components/photo-grid.scss";

const PhotoGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            location
            date(formatString: "YYYY-MM-DD")
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `);

  // 🔀 Randomize the image order on every load
  const shuffledImages = [...data.allMarkdownRemark.nodes].sort(
    () => 0.5 - Math.random()
  );

  return (
    <div className="masonry-grid">
      {shuffledImages.map((node) => {
        const { title, location, date, image } = node.frontmatter;

        return (
          <div key={node.id} className="masonry-item">
            <div className="photo-wrapper">
              <GatsbyImage image={getImage(image)} alt={title} />
              <div className="caption">
                <span className="artist">{title}</span>
                {location && <span className="location"> — {location}</span>}
                {date && <span className="date"> ({date})</span>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGrid;
