import * as React from "react";
import { FaReact, FaWordpress, FaPhp, FaSass, FaFigma } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiGatsby,
  SiTailwindcss,
} from "react-icons/si";

const tech = [
  { Icon: FaReact, name: "React", color: "#61DBFB" },
  { Icon: RiNextjsFill, name: "Next.js", color: "#888888" },
  { Icon: SiTypescript, name: "TypeScript", color: "#719af4" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiGraphql, name: "GraphQL", color: "#E535AB" },
  { Icon: FaWordpress, name: "WordPress", color: "#21759B" },
  { Icon: FaPhp, name: "PHP", color: "#777BB4" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { Icon: FaSass, name: "Sass", color: "#CD6799" },
  { Icon: SiGatsby, name: "Gatsby", color: "#663399" },
  { Icon: FaFigma, name: "Figma", color: "#F24E1E" },
];

const IconList = () => {
  const handleMouseEnter = (e, color) => {
    e.currentTarget.style.color = color;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "white";
  };

  return (
    <div className="icons d-flex justify-content-around flex-wrap gap-2">
      {tech.map(({ Icon, name, color }) => (
        <Icon
          key={name}
          size={36}
          title={name}
          style={{ color: "white", transition: "color 0.3s ease" }}
          className="mb-2"
          onMouseEnter={(e) => handleMouseEnter(e, color)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default IconList;
