import * as React from "react";
import TimelineItem from "./TimelineItem";
import timelineData from "../data/timeline-data";

const Timeline = () => {
  return (
    <section className="container py-5">
      <h2 className="mb-5 text-center">My Journey</h2>
      <div className="border-start border-2 ps-4">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
