import * as React from "react";
import {
  FaBootstrap,
  FaCogs,
  FaExchangeAlt,
  FaPhp,
  FaReact,
  FaSass,
  FaWordpress,
  FaDotCircle,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiTailwindcss,
  SiPostcss
} from "react-icons/si";

export const tagMetaMap = {
  ajax: { icon: <FaExchangeAlt />, color: "teal" },
  bootstrap: { icon: <FaBootstrap />, color: "secondary" },
  gatsby: { icon: <SiGatsby />, color: "purple" },
  graphql: { icon: <SiGraphql />, color: "pink" },
  javascript: { icon: <SiJavascript />, color: "yellow" },
  jquery: { icon: <SiJquery />, color: "darkBlue" },
  nextjs: { icon: <SiNextdotjs />, color: "gray" },
  php: { icon: <FaPhp />, color: "lightPurple" },
  react: { icon: <FaReact />, color: "primary" },
  rest: { icon: <FaCogs />, color: "rest" },
  sass: { icon: <FaSass />, color: "sass" },
  tailwind: { icon: <SiTailwindcss />, color: "info" },
  wordpress: { icon: <FaWordpress />, color: "blue" },
  postcss: { icon: <SiPostcss />, color: "postcss" },
  outsystems: { icon: <FaDotCircle />, color: "red" },
  css: { icon: <FaCss3Alt />, color: "css"  },
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
  sass: "#cf649a",
  tailwind: "#38bdf8",
  postcss: "#dd3a0a",
  red: "#dd1234",
  css: "#1572b6",
  gray: "#888888",
};
