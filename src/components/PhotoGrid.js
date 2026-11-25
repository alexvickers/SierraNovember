import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import gridData from "../data/grid-data";
import Modal from "./Modal";
import LazyImage from "./LazyImage";

const FEATURED_COUNT = 8;

const shuffle = (list) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

const formatDateWithOrdinal = (dateStr) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  const date = match
    ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
    : new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${day}${getOrdinal(day)}, ${year}`;
};

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
              layout: CONSTRAINED
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

  const [layout, setLayout] = React.useState({
    items: gridData,
    featured: new Set(),
    ready: false,
  });

  React.useEffect(() => {
    const items = shuffle(gridData);

    const eligible = [];
    items.forEach((item, index) => {
      const sharp = imagesMap.get(item.image);
      const img = sharp && getImage(sharp);
      if (img && img.width >= img.height) eligible.push(index);
    });

    const count = Math.min(FEATURED_COUNT, eligible.length);
    const featured = new Set();
    for (let i = 0; i < count; i++) {
      const from = Math.floor((i * eligible.length) / count);
      const to = Math.floor(((i + 1) * eligible.length) / count);
      featured.add(eligible[from + Math.floor(Math.random() * (to - from))]);
    }

    setLayout({ items, featured, ready: true });
  }, [imagesMap]);

  const [modalImage, setModalImage] = React.useState(null);

  return (
    <>
      <div
        className="masonry-grid"
        style={{
          opacity: layout.ready ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {layout.items.map(({ title, location, date, image }, index) => {
          const imageSharp = imagesMap.get(image);

          if (!imageSharp) {
            console.warn(`Image not found: ${image}`);
            return null;
          }

          const gatsbyImage = getImage(imageSharp);
          const isPortrait = gatsbyImage.height > gatsbyImage.width;
          const isFeatured = !isPortrait && layout.featured.has(index);

          const alt = location
            ? `${title} at ${location} by Alexandre Aimbiré`
            : `${title} by Alexandre Aimbiré`;

          return (
            <div
              key={image}
              className={`masonry-item ${
                isPortrait ? "is-portrait" : "is-landscape"
              }${isFeatured ? " is-featured" : ""}`}
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
                  <LazyImage imageSharp={imageSharp} alt={alt} />
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
