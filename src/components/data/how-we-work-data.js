import Card from "@components/cards/card";

import LightBulbIcon from "@assets/lightbulb.svg";
import PersonIcon from "@assets/person.svg";
import CommitIcon from "@assets/1m+commits.svg";

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
