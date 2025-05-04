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
              width: 120
              height: 120
              layout: FIXED
              placeholder: BLURRED
              transformOptions: { grayscale: true }
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
      <h2 className="text-center mb-3">"Well, How Did I Get Here?"</h2>
      <h3 className="text-center mb-5">
        My ongoing adventure in making things, fixing things, and figuring it
        out.
      </h3>
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
      <p className="mb-1 text-center">This ain’t no party, this ain’t no disco, this ain’t no complete timeline.</p>
      <p className="mb-0 text-center">More moments coming soon. Because time isn’t holding us, time isn’t after us — but it is still happening.</p>
    </section>
  );
};

export default Timeline;
