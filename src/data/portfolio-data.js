import pecImage from "../assets/images/portfolio/pec.png";
import mitImage from "../assets/images/portfolio/mit.png";
import hueImage from "../assets/images/portfolio/hue.png";
import exameImage from "../assets/images/portfolio/exame.png";
import osacImage from "../assets/images/portfolio/osac.png";
import underImage from "../assets/images/portfolio/underfloripa.png";
import sierraImage from "../assets/images/portfolio/sierra.png";

const portfolioData = [
  {
    title: "Princeton Election Consortium",
    description:
      "A custom WordPress build for Princeton’s Election Consortium, ahead of the 2022 midterms. Designed to mimic the look and feel of a newspaper, but built as a lightweight single-page app — fast, responsive, and easy to navigate. This project was completed while I was working at Goodfolk Agency.",
    image: pecImage,
    link: "https://election.princeton.edu/",
    tags: ["wordpress", "php", "javascript", "jquery", "ajax", "postcss"],
  },
  {
    title: "MIT Energy Initiative",
    description:
      "A redesign of the MIT Energy Initiative’s website, focused on improving accessibility and usability. We prioritized intuitive navigation, mobile responsiveness, and compliance with WCAG 2.1 Level AA accessibility standards to ensure the site is inclusive for all users — from researchers to industry professionals. This project was completed while I was working at Goodfolk Agency.",
    image: mitImage,
    link: "https://energy.mit.edu/",
    tags: ["wordpress", "php", "javascript", "jquery", "postcss"],
  },
  {
    title: "HUE | The Magazine of FIT",
    description:
      "A complete overhaul of the HUE website for the Fashion Institute of Technology. The focus was on creating a visually striking, user-friendly design that reflected the vibrant nature of the FIT community while ensuring accessibility and easy navigation for students, faculty, and visitors alike. This project was completed while I was working at Goodfolk Agency.",
    image: hueImage,
    link: "https://hue.fitnyc.edu/",
    tags: ["wordpress", "php", "javascript", "jquery", "sass"],
  },
  {
    title: "2022 OSAC Annual Briefing",
    description:
      "The online home for the 2022 OSAC Annual Briefing — a key event hosted by the U.S. State Department for the global security community. Developed in WordPress with a focus on responsive design and subtle, polished animations to enhance user experience. This project was completed while I was working at Goodfolk Agency.",
    image: osacImage,
    link: "https://web.archive.org/web/20220418023729/https://annualbriefing.osac.gov/",
    tags: ["wordpress", "php", "javascript", "jquery", "postcss"],
  },
  {
    title: "Exame",
    description:
      "A comprehensive redesign of Exame's digital platform, Brazil's leading business and finance news outlet. The project involved streamlining the user interface for improved navigation and readability, enhancing SEO performance, and optimizing ad placements to boost monetization—all while modernizing the site's visual identity. This was implemented as a headless site, leveraging a decoupled architecture for greater flexibility and performance.",
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
    title: "Under Floripa",
    description:
      "I designed and developed Under Floripa, an independent music and culture website, creating a custom WordPress theme from the ground up. I built custom plugins to extend functionality—most notably a tool for managing local concert listings—and optimized the site for performance and scalability. I also oversee content strategy, feature planning, and ongoing maintenance. Beyond coding, I contribute music reviews and editorial features, bridging digital expertise with creative storytelling.",
    image: underImage,
    link: "https://underfloripa.com.br/",
    github: "https://github.com/alexvickers/underfloripa",
    tags: ["wordpress", "javascript", "php", "rest", "sass"],
  },
  {
    title: "Sierra November",
    description:
      "This is my personal portfolio site where I show off my work as a frontend developer and designer. It’s a mix of everything I love to do—building clean, responsive, and user-friendly websites.",
    image: sierraImage,
    github: "https://github.com/alexvickers/SierraNovember",
    tags: ["gatsby", "react", "javascript", "bootstrap", "sass", "graphql"],
  },
];

export default portfolioData;
