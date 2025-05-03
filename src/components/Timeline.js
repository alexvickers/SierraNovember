import * as React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    year: "2025",
    title: "Started Sierra November",
    description:
      "Launched an English school to help developers communicate more confidently.",
  },
  {
    year: "2024",
    title: "Lead Dev – Headless WP + Next.js",
    description:
      "Oversaw migration, built backend/frontend stack, and led the design system development.",
  },
  {
    year: "2022–2023",
    title: "Agency & Freelance Projects",
    description:
      "Built e-commerce stores, optimized SEO, and developed custom WordPress themes.",
  },
  {
    year: "2021",
    title: "Joined Underfloripa",
    description:
      "Started writing about indie shows, albums, and São Paulo's culture scene.",
  },
  {
    year: "2019",
    title: "Started Literature Degree at USP",
    description:
      "Studied English and Brazilian literature while continuing web dev work.",
  },
  {
    year: "2018",
    title: "Exchange Semester – Radboud University",
    description:
      "Focused on American Studies and communication in the Netherlands.",
  },
];

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
