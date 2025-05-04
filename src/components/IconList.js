import * as React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaPhp,
  FaSass,
  FaBootstrap,
  FaGit,
  FaGulp,
  FaFigma,
} from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiGatsbyFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiJquery, SiWoo, SiAdobexd } from "react-icons/si";

const icons = [
  FaReact,
  RiJavascriptFill,
  RiNextjsFill,
  RiGatsbyFill,
  FaHtml5,
  FaCss3Alt,
  SiJquery,
  FaWordpress,
  SiWoo,
  FaPhp,
  FaSass,
  FaBootstrap,
  RiTailwindCssFill,
  FaGit,
  FaGulp,
  FaFigma,
  SiAdobexd,
];

const hoverColors = [
  "#61DBFB", // React
  "#F7DF1E", // JavaScript
  "#000000", // Next.js
  "#663399", // Gatsby
  "#E34F26", // HTML5
  "#1572B6", // CSS3
  "#0769AD", // jQuery
  "#21759B", // WordPress
  "#96588A", // WooCommerce
  "#777BB4", // PHP
  "#CD6799", // Sass
  "#7952B3", // Bootstrap
  "#38BDF8", // Tailwind
  "#F05032", // Git
  "#CF4647", // Gulp
  "#F24E1E", // Figma
  "#FF61F6", // Adobe XD
];

const IconList = () => {
  const handleMouseEnter = (e, color) => {
    e.currentTarget.style.color = color;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "white";
  };

  return (
    <div className="icons d-flex justify-content-between flex-wrap gap-2">
      {icons.map((Icon, index) => (
        <Icon
          key={index}
          size={36}
          style={{
            color: "white",
            transition: "color 0.3s ease",
          }}
          className="mb-2"
          onMouseEnter={(e) => handleMouseEnter(e, hoverColors[index])}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default IconList;
