import React from "react";
import {
  FaBootstrap,
  FaCogs,
  FaExchangeAlt,
  FaPhp,
  FaReact,
  FaWordpress
} from "react-icons/fa";
import {
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";

export const tagMetaMap = {
  ajax: { icon: <FaExchangeAlt />, color: "teal" },
  bootstrap: { icon: <FaBootstrap />, color: "secondary" },
  gatsby: { icon: <SiGatsby />, color: "purple" },
  graphql: { icon: <SiGraphql />, color: "pink" },
  javascript: { icon: <SiJavascript />, color: "yellow" },
  jquery: { icon: <SiJquery />, color: "darkBlue" },
  nextjs: { icon: <SiNextdotjs />, color: "success" },
  php: { icon: <FaPhp />, color: "lightPurple" },
  react: { icon: <FaReact />, color: "primary" },
  rest: { icon: <FaCogs />, color: "rest" },
  tailwind: { icon: <SiTailwindcss />, color: "info" },
  wordpress: { icon: <FaWordpress />, color: "blue" },
};

export const customColors = {
  blue: "#21759b",
  pink: "#e535ab",
  purple: "#663399",
  teal: "#20c997",
  yellow: "#f7df1e",
  lightPurple: "#8993be",
  darkBlue: "#0769ad",
  success: "#38b2ac",
  rest: "#6c757d",
  tailwind: "#38bdf8",
};
