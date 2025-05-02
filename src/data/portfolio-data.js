import pecImage from "../assets/images/portfolio/pec.png";
import mitImage from "../assets/images/portfolio/mit.png";
import hueImage from "../assets/images/portfolio/hue.png";
import exameImage from '../assets/images/portfolio/exame.png';
import underImage from '../assets/images/portfolio/underfloripa.png';
import sierraImage from '../assets/images/portfolio/sierra.png';

const portfolioData = [
  {
    title: "Princeton Election Consortium",
    description:
      "A custom WordPress build for Princeton’s Election Consortium, ahead of the 2022 midterms. Designed to mimic the look and feel of a newspaper, but built as a lightweight single-page app — fast, responsive, and easy to navigate.",
    image: pecImage,
    link: "https://election.princeton.edu/",
    tags: ["wordpress", "php", "javascript", "jquery", "ajax", "postcss"],
  },
  {
    title: "MIT Energy Initiative",
    description:
      "A redesign of the MIT Energy Initiative’s website, focused on improving accessibility and usability. We prioritized intuitive navigation, mobile responsiveness, and compliance with WCAG 2.1 Level AA accessibility standards to ensure the site is inclusive for all users — from researchers to industry professionals.",
    image: mitImage,
    link: "https://energy.mit.edu/",
    tags: ["wordpress", "php", "javascript", "jquery", "postcss"],
  },
  {
    title: "HUE | The Magazine of FIT",
    description:
      "A complete overhaul of the HUE website for the Fashion Institute of Technology. The focus was on creating a visually striking, user-friendly design that reflected the vibrant nature of the FIT community while ensuring accessibility and easy navigation for students, faculty, and visitors alike.",
    image: hueImage,
    link: "https://hue.fitnyc.edu/",
    tags: ["wordpress", "php", "javascript", "jquery", "sass"],
  },
  {
    title: "Exame",
    description: "A comprehensive redesign of Exame's digital platform, Brazil's leading business and finance news outlet. The project involved streamlining the user interface for improved navigation and readability, enhancing SEO performance, and optimizing ad placements to boost monetization—all while modernizing the site's visual identity. This was implemented as a headless site, leveraging a decoupled architecture for greater flexibility and performance.",
    image: exameImage,
    link: "https://exame.com/",
    tags: [
      "nextjs",
      "react",
      "javascript",
      "wordpress",
      "php",
      "rest",
      "tailwind",
      "sass",
    ],
  },
  {
    title: "Underfloripa",
    description: " I lead the development and design of Underfloripa, an independent music and culture website. Built on WordPress, the project showcases my work across custom theme development, UX/UI design, and performance optimization. I also manage ongoing maintenance, content strategy, and feature planning—including a custom event plugin for local concert listings. In addition to the tech side, I contribute music reviews and features, bringing together my skills in both digital and editorial work.",
    image: underImage,
    link: "https://underfloripa.com.br/",
    tags: [
      "wordpress",
      "javascript",
      "php",
      "rest",
      "sass",
    ],
  },
  {
    title: "Sierra November",
    description: "This is my personal portfolio site where I show off my work as a frontend developer and designer. It’s a mix of everything I love to do—building clean, responsive, and user-friendly websites.",
    image: sierraImage,
    link: "https://github.com/alexvickers/SierraNovember",
    tags: [
      "gatsby",
      "react",
      "javascript",
      "bootstrap",
      "sass",
    ],
  },
];

export default portfolioData;
