import pecImage from "../images/pec.png";
import mitImage from "../images/mit.png";
import hueImage from "../images/hue.png";
import exameImage from '../images/exame.png';

const portfolioData = [
  {
    title: "Princeton Election Consortium",
    description:
      "A custom WordPress build for Princeton’s Election Consortium, ahead of the 2022 midterms. Designed to mimic the look and feel of a newspaper, but built as a lightweight single-page app — fast, responsive, and easy to navigate.",
    image: pecImage,
    link: "https://election.princeton.edu/",
    tags: ["wordpress", "php", "javascript", "ajax", "jquery"],
  },
  {
    title: "MIT Energy Initiative",
    description:
      "A redesign of the MIT Energy Initiative’s website, focused on improving accessibility and usability. We prioritized intuitive navigation, mobile responsiveness, and compliance with accessibility standards to make the site more inclusive for all users — from researchers to industry professionals.",
    image: mitImage,
    link: "https://energy.mit.edu/",
    tags: ["wordpress", "php", "javascript", "jquery"],
  },
  {
    title: "HUE | The Magazine of FIT",
    description:
      "A complete overhaul of the HUE website for the Fashion Institute of Technology. The focus was on creating a visually striking, user-friendly design that reflected the vibrant nature of the FIT community while ensuring accessibility and easy navigation for students, faculty, and visitors alike.",
    image: hueImage,
    link: "https://hue.fitnyc.edu/",
    tags: ["wordpress", "php", "javascript", "jquery"],
  },
  {
    title: "Exame",
    description: "A comprehensive redesign of Exame's digital platform, Brazil's leading business and finance news outlet. The project involved streamlining the user interface for improved navigation and readability, enhancing SEO performance, and optimizing ad placements to boost monetization—all while modernizing the site's visual identity.",
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
    ],
  },
];

export default portfolioData;
