import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const getMonthName = (month) => {
  const date = new Date();
  date.setMonth(month - 1);
  return date.toLocaleString("en-US", { month: "long" });
};

const TimelineItem = ({ year, month, title, description, image }) => {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-start mb-4 timeline-item">
      {" "}
      {image && (
        <div className="mb-2 mb-sm-0 me-sm-3">
          <GatsbyImage
            image={image}
            alt={title}
            className="rounded-circle"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
      )}
      <div>
        <span className="d-block m01">{`${getMonthName(month)} of ${year}`}</span>
        <h4 className="mb-1">{title}</h4>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
