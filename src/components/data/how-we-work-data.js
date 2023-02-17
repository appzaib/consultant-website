import Card from "@components/cards/card";
import ProjectShowcase from "@components/project-showcase";

import LightBulbIcon from "@assets/lightbulb.svg";
import PersonIcon from "@assets/person.svg";
import CommitIcon from "@assets/1m+commits.svg";
import ProjectImage2 from "@assets/project-2.png";
import ProjectImage3 from "@assets/project-3.png";

export const description =
  "At Codeline-Consulting, we believe that every project is unique and requires a customized approach. Our How We Work section outlines our comprehensive web development process, which starts with a thorough consultation to understand your business needs and goals. We then move on to the design and development phase, where we create a prototype and iterate until we arrive at a final design that meets your requirements. Our team of expert developers then builds and tests the website to ensure it meets the highest standards. Finally, we provide ongoing support and maintenance to ensure your website remains optimized and up-to-date. We prioritize communication, collaboration, and transparency throughout the entire process to ensure a successful outcome for our clients.";

export const howWeWorkCards = [
  <Card key={1} width="350px" />,
  <Card
    icon={<LightBulbIcon />}
    heading="10+"
    description="Years in Business"
    key={2}
    transitionDelay={0.1}
    width="350px"
  />,
  <Card
    icon={<PersonIcon />}
    heading="200+"
    description="Team Members"
    key={3}
    transitionDelay={0.2}
    width="350px"
  />,
  <Card
    icon={<CommitIcon />}
    heading="1M+"
    description="Commits"
    key={4}
    transitionDelay={0.3}
    width="350px"
  />,
];

export const briefInfo = [
  { name: "STANDUPS", num: "10K+" },
  { name: "OFFICES", num: "3" },
  { name: "USER STORIES", num: "10K+" },
];

export const projects = [
  <ProjectShowcase
    title="Unit Converter"
    desc="Our team at Codeline-Consulting recently delivered a customized unit converter project for a client in the manufacturing industry. The unit converter we developed enables users to easily and accurately convert measurements between different units of measurement, such as weight, volume, and length. We worked closely with the client to understand their specific needs, and developed a tool that was tailored to their unique requirements. The end result is a user-friendly and intuitive tool that provides quick and accurate results, improving efficiency and productivity for the client."
    key={1}
  />,
  <ProjectShowcase
    imgSrc={`${ProjectImage2.src}`}
    title="Portfolio"
    desc="We recently completed a client project to develop a visually stunning website to showcase their business. We worked closely with the client to ensure the final product met their specifications and exceeded their expectations. The resulting website features a modern, responsive design with an intuitive user interface and engaging visual elements. We're proud of the final product and excited to add it to our portfolio."
    key={2}
  />,
  <ProjectShowcase
    imgSrc={`${ProjectImage3.src}`}
    title="Land it Right"
    desc="Our team at Codeline-Consulting recently delivered a customized product landing page project for a client in the e-commerce industry. The landing page we developed was designed to showcase the client's flagship product and highlight its features and benefits in a visually appealing and engaging way. We worked closely with the client to understand their brand and target audience, and developed a page that aligned with their overall marketing strategy. The end result is a landing page that effectively drives conversions and enhances the client's online presence, helping them to achieve their business goals."
    key={3}
  />,
];
