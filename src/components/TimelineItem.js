import * as React from "react";

const TimelineItem = ({ year, title, description }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold text-primary">{year}</h5>
      <h6 className="fw-semibold">{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default TimelineItem;
