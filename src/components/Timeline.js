import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TimelineItem from "./TimelineItem";
import timelineData from "../data/timeline-data";

const Timeline = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "timeline" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 60
              height: 60
              layout: FIXED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes.reduce((acc, node) => {
    acc[node.name] = node.childImageSharp.gatsbyImageData;
    return acc;
  }, {});

  const sortedData = [...timelineData].sort((a, b) => {
    if (b.year === a.year) return b.month - a.month;
    return b.year - a.year;
  });

  return (
    <section className="container py-5">
      <h2 className="mb-5 text-center">My Journey</h2>
      <div className="timeline position-relative border-start border-2 ps-4">
        {sortedData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            month={item.month}
            title={item.title}
            description={item.description}
            image={images[item.imageName]}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
