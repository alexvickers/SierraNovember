import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import gridData from "../data/grid-data";
import Modal from "./Modal";
import LazyImage from "./LazyImage";

const PhotoGrid = () => {
  const data = useStaticQuery(graphql`
    query ConcertImagesQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "concertImages" } }
        sort: { relativePath: ASC }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 82
            )
          }
        }
      }
    }
  `);

  const imagesMap = React.useMemo(() => {
    const map = new Map();
    data.allFile.nodes.forEach((node) => {
      map.set(node.relativePath, node.childImageSharp);
    });
    return map;
  }, [data]);

  const shuffledItems = React.useMemo(() => {
    return [...gridData].sort(() => Math.random() - 0.5);
  }, []);

  const featuredIndexes = React.useMemo(() => {
    const count = Math.min(6, shuffledItems.length);
    const indexes = new Set();
    while (indexes.size < count) {
      indexes.add(Math.floor(Math.random() * shuffledItems.length));
    }
    return indexes;
  }, [shuffledItems]);

  const [modalImage, setModalImage] = React.useState(null);

  const formatDateWithOrdinal = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const getOrdinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };
    return `${month} ${day}${getOrdinal(day)}, ${year}`;
  };

  return (
    <>
      <div className="masonry-grid">
        {shuffledItems.map(({ title, location, date, image }, index) => {
          const imageSharp = imagesMap.get(image);
          if (!imageSharp) {
            console.warn(`Image not found: ${image}`);
            return null;
          }

          const gatsbyImage = getImage(imageSharp);
          const isPortrait = gatsbyImage.height > gatsbyImage.width;
          const isFeatured = !isPortrait && featuredIndexes.has(index);

          const alt = location
            ? `${title} at ${location} by Alexandre Aimbiré`
            : `${title} by Alexandre Aimbiré`;

          return (
            <div
              key={image}
              className={`masonry-item
                ${isPortrait ? "is-portrait" : "is-landscape"}
                ${isFeatured ? "is-featured" : ""}`}
            >
              <div className="photo-wrapper">
                <button
                  type="button"
                  className="button"
                  aria-label={`View ${title}`}
                  onClick={() => setModalImage(gatsbyImage)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "block",
                  }}
                >
                  <LazyImage
                    imageSharp={imageSharp}
                    alt={alt}
                    onClick={() => setModalImage(gatsbyImage)}
                  />
                </button>

                <div className="caption">
                  <span className="artist">{title}</span>
                  {location && <span className="location">{location}</span>}
                  {date && (
                    <span className="date">{formatDateWithOrdinal(date)}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Modal image={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

export default PhotoGrid;
