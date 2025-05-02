import React from "react";
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

const iconStyles = {
  react: "text-white hover:text-blue-500",
  javascript: "text-white hover:text-yellow-500",
  nextjs: "text-white hover:text-black",
  gatsby: "text-white hover:text-indigo-600",
  html: "text-white hover:text-orange-500",
  css: "text-white hover:text-blue-400",
  jquery: "text-white hover:text-blue-600",
  wordpress: "text-white hover:text-blue-700",
  woo: "text-white hover:text-blue-500",
  php: "text-white hover:text-blue-700",
  sass: "text-white hover:text-pink-500",
  bootstrap: "text-white hover:text-primary",
  tailwind: "text-white hover:text-cyan-500",
  git: "text-white hover:text-gray-600",
  gulp: "text-white hover:text-black",
  figma: "text-white hover:text-gray-500",
  adobe: "text-white hover:text-red-500",
};

const IconList = () => {
  return (
    <div className="icons d-flex justify-content-between">
      <FaReact size={36} className={`me-3 mb-2 ${iconStyles.react}`} />
      <RiJavascriptFill
        size={36}
        className={`me-3 mb-2 ${iconStyles.javascript}`}
      />
      <RiNextjsFill size={36} className={`me-3 mb-2 ${iconStyles.nextjs}`} />
      <RiGatsbyFill size={36} className={`me-3 mb-2 ${iconStyles.gatsby}`} />
      <FaHtml5 size={36} className={`me-3 mb-2 ${iconStyles.html}`} />
      <FaCss3Alt size={36} className={`me-3 ${iconStyles.css}`} />
      <SiJquery size={36} className={`me-3 ${iconStyles.jquery}`} />
      <FaWordpress size={36} className={`me-3 mb-2 ${iconStyles.wordpress}`} />
      <SiWoo size={36} className={`me-3 mb-2 ${iconStyles.woo}`} />
      <FaPhp size={36} className={`me-3 mb-2 ${iconStyles.php}`} />
      <FaSass size={36} className={`me-3 mb-2 ${iconStyles.sass}`} />
      <FaBootstrap size={36} className={`me-3 mb-2 ${iconStyles.bootstrap}`} />
      <RiTailwindCssFill
        size={36}
        className={`me-3 mb-2 ${iconStyles.tailwind}`}
      />
      <FaGit size={36} className={`me-3 mb-2 ${iconStyles.git}`} />
      <FaGulp size={36} className={`me-3 mb-2 ${iconStyles.gulp}`} />
      <FaFigma size={36} className={`me-3 mb-2 ${iconStyles.figma}`} />
      <SiAdobexd size={36} className={`mb-2 ${iconStyles.adobe}`} />
    </div>
  );
};

export default IconList;
